# In-App Notification System Design Document

## 1 Introduction

### 1.1 Purpose
The In-App Notification System is designed to provide a scalable, reliable, and efficient mechanism for delivering real-time notifications to users within our application ecosystem. This system will enhance user engagement by providing timely and relevant information directly within the app, ensuring users are kept informed of important events, updates, and personalized messages as they happen.

The system will handle the entire lifecycle of notifications—from creation and ingestion to delivery and acknowledgement—while supporting multiple notification types including system alerts, transactional updates, and promotional messages.

### 1.2 Scope
The system encompasses:
- Real-time notification delivery via persistent connections
- Multi-tenant support with isolated infrastructure
- Notification lifecycle management (creation, delivery, acknowledgement, history)
- Connection state management across distributed instances
- Priority-based notification processing
- Retry mechanisms and failure handling
- Authentication and authorization via JWT tokens

**Out of Scope:**
- Push notifications to mobile devices when app is not active
- Email/SMS notification delivery
- Notification template management UI
- Advanced analytics and reporting dashboards

### 1.3 System Boundaries
The system operates within the following boundaries:
- **Input Boundary**: Kafka topics receiving notification events from upstream services
- **Processing Boundary**: Internal workers, connection managers, and databases
- **Output Boundary**: Client applications via persistent WebSocket/NATS connections
- **Management Boundary**: Retool interfaces for operational tasks

### 1.4 Definitions, Acronyms, and Abbreviations
- **NATS**: Neural Autonomic Transport System - message broker
- **JWT**: JSON Web Token - authentication mechanism
- **TTL**: Time To Live - notification expiration time
- **QPS**: Queries Per Second
- **DCM**: Distributed Connection Manager
- **RBAC**: Role-Based Access Control
- **TLS**: Transport Layer Security

### 1.5 References
- [NATS Documentation](https://docs.nats.io/)
- [JWT Authentication Standards](https://jwt.io/)
- [Kafka Streaming Platform](https://kafka.apache.org/)

## 2 Actors & Usage

### 2.1 Human Actors
- **End Users**: Receive notifications within the application
- **System Administrators**: Monitor system health and manage configurations
- **Operations Team**: Handle incident response and system maintenance
- **Tenant Administrators**: Manage tenant-specific configurations

### 2.2 System Actors
- **Upstream Services**: Generate notification events and publish to Kafka
- **Client Applications**: iOS, Android, and web applications receiving notifications
- **Authentication Service**: Validates JWT tokens for connection establishment
- **Monitoring Systems**: Collect metrics and trigger alerts
- **Load Balancers**: Distribute traffic across DCM instances

## 3 Requirements

### 3.1 Functional Requirements

#### 3.1.1 Notification Types Support
- System Alerts: Maintenance notifications, service disruptions
- Service Specific Notifications: Backend-triggered events (order updates, payment confirmations)
- Promotional Notifications: Marketing messages with targeting capabilities

#### 3.1.2 Notification Creation and Management
- Configurable priority levels (HIGH, MEDIUM, LOW)
- TTL-based expiration for notifications
- Payload size limit of 4KB per notification
- Support for rich content (text, images, actions)

#### 3.1.3 Targeting and Segmentation
- User-specific targeting via user_id
- Tenant-level isolation and configuration
- Batch delivery to user segments

#### 3.1.4 Delivery Mechanism
- Real-time delivery via persistent connections
- At-least-once delivery guarantee
- Maximum retry attempts: 3 with exponential backoff
- Fallback mechanism for offline users

#### 3.1.5 Connection Management
- Stateless connection handling with persistent state in cache
- Health ping mechanism every 30 seconds
- Connection status tracking (ONLINE, OFFLINE, RECONNECTING)

#### 3.1.6 PII Requirements
The system handles Category 2 PII data (user identifiers, notification content). All PII data will be:
- Encrypted at rest using AES-256
- Encrypted in transit using TLS 1.3
- Anonymized in logs and monitoring systems
- Subject to data retention policies (90 days for notification history)

### 3.2 Non Functional Requirements

#### 3.2.1 Scale
- **Current Scale**: 10,000 concurrent connections per DCM instance
- **Future Scale**: 100,000 concurrent connections per DCM instance (2-year projection)
- **Tenant Growth**: Support for 1,000 tenants initially, scaling to 10,000

#### 3.2.2 Concurrent Users
- Peak concurrent users: 50,000 across all tenants
- Average concurrent users: 25,000
- Growth projection: 200% year-over-year

#### 3.2.3 Throughput/RPS/QPS
- Notification ingestion: 10,000 messages/second from Kafka
- Notification delivery: 50,000 notifications/second
- Connection health pings: 1,667 pings/second (50k users / 30s interval)
- Acknowledgment processing: 40,000 acks/second

#### 3.2.4 Latencies
- End-to-end notification delivery: <300ms (P95)
- Connection establishment: <100ms (P95)
- Health ping response: <50ms (P95)
- Database write operations: <10ms (P95)

### 3.3 Data Requirements

#### 3.3.1 Data Consistency
- Strong consistency for tenant configurations
- Eventual consistency acceptable for notification history
- Connection state consistency within 5 seconds across DCM instances

#### 3.3.2 Data Availability
- Notification DB: 99.9% availability
- Tenant DB: 99.99% availability
- Redis cache: 99.95% availability with automatic failover

#### 3.3.3 Data Growth and Archival
- **Notification Data**: 1GB/month/10k users
- **Connection Logs**: 500MB/month/10k users
- **2-Year Projection**: 50GB total storage
- **Archival Policy**: 
  - Notification history: 90 days retention
  - Connection logs: 30 days retention
  - Archived data moved to cold storage

### 3.4 Analytics & Monitoring requirements
- Real-time delivery rate monitoring
- Connection health dashboards
- Per-tenant usage metrics
- Latency percentile tracking (P50, P95, P99)
- Failed delivery alerts and retry metrics
- Historical data retention: 1 year for analytics

### 3.5 Auditing & Access Control
- All notification deliveries logged with timestamp and recipient
- Tenant access isolated through JWT claims
- Admin actions logged with user identification
- Connection establishment/termination events audited
- RBAC implementation for tenant administrators

### 3.6 Security
- **Assets to Protect**: User notification data, connection tokens, tenant configurations
- **Threats**: Unauthorized access, data breaches, connection hijacking, DoS attacks
- **Mitigations**: JWT-based authentication, TLS encryption, rate limiting, input validation

## 4 Research on Existing Solutions

### 4.1 Explored Solutions

#### 4.1.1 Socket.IO
- **Functionality Coverage**: Provides real-time bidirectional communication
- **Limitations**: 
  - No built-in horizontal scaling without sticky sessions
  - Memory overhead for maintaining connection state
  - Complex load balancing requirements
- **Decision**: Rejected due to scaling complexities and state management issues

#### 4.1.2 gRPC Streaming
- **Functionality Coverage**: HTTP/2 based bidirectional streaming with strong typing
- **Advantages**: Built-in load balancing, Protobuf serialization
- **Limitations**:
  - No native pub/sub model
  - Requires custom connection management logic
  - Higher protocol overhead compared to WebSocket-based solutions
- **Decision**: Considered but NATS chosen for better pub/sub support

#### 4.1.3 AWS IoT Core
- **Functionality Coverage**: Managed pub/sub with MQTT support
- **Limitations**:
  - Vendor lock-in
  - Higher costs for high message volume
  - Limited customization for connection management
- **Decision**: Rejected due to cost and flexibility concerns

#### 4.1.4 Apache Kafka + WebSockets
- **Functionality Coverage**: Could handle message processing with custom WebSocket layer
- **Limitations**:
  - Requires building entire connection management layer
  - Complex implementation for real-time delivery
  - No built-in connection state management
- **Decision**: Rejected due to implementation complexity

## 5 High level Design

### 5.1 Design Goals
1. **High Availability**: System remains operational during node failures
2. **Horizontal Scalability**: Add capacity by scaling out DCM instances
3. **Multi-tenancy**: Complete isolation between tenant data and configurations
4. **Low Latency**: Sub-300ms delivery for 95% of notifications
5. **Fault Tolerance**: Graceful degradation and automatic recovery

### 5.2 Assumptions
- Client applications maintain stable internet connectivity
- Upstream services publish well-formed notification events to Kafka
- JWT tokens have reasonable expiration times (1-24 hours)
- Database and cache infrastructure can handle projected load
- Network latency between components is minimal (<5ms)

### 5.3 Limitations/Constraints
- NATS cluster requires minimum 3 nodes for high availability
- Redis cluster failover may cause 2-3 second connection status delays
- Maximum message payload limited to 4KB
- JWT token validation adds 5-10ms latency per connection
- Kafka partition count limits parallel processing capability

### 5.4 Container Diagram/ High level Diagram
*[Refer to provided sequence diagrams in images showing component interactions]*

The system consists of:
- **Client Layer**: Mobile/web applications with persistent connections
- **Connection Layer**: NATS-based Distributed Connection Manager cluster
- **Processing Layer**: Kafka-based worker processes
- **Storage Layer**: PostgreSQL for persistence, Redis for caching
- **Authentication Layer**: JWT validation service

### 5.5 Container

#### 5.5.1 Container: Distributed Connection Manager (DCM)

##### 5.5.2 Requirements
- Maintain persistent WebSocket connections with clients
- Route notifications from workers to appropriate client connections
- Track connection health and status
- Handle client authentication via JWT validation
- Provide pub/sub communication between workers and connections

##### 5.5.3 Functionalities
- JWT token validation for incoming connections
- Connection lifecycle management (connect, disconnect, reconnect)
- Health ping handling every 30 seconds
- Message routing from Kafka workers to clients
- Connection status updates to Redis cache
- Graceful shutdown with connection migration

##### 5.5.4 Exploration of platform capabilities
**Reusability**: DCM can be packaged as a reusable platform for other real-time communication needs within the organization. Other teams requiring WebSocket-based communication could leverage this infrastructure.

**Client Awareness**: The system is designed to be tenant-aware, with complete isolation between tenants' connections and data.

**Effort Investment**: Moderate effort to make this a reusable platform - mainly configuration management and documentation improvements.

##### 5.5.5 System View
DCM operates as a clustered service with:
- NATS Core for message routing
- Redis for distributed state management
- Load balancer for connection distribution
- Health check endpoints for monitoring

##### 5.5.6 Interfaces/APIs
**Exported Interfaces**:
- WebSocket endpoint: `/ws/connect` with JWT authentication
- Health check: `/health`
- Metrics endpoint: `/metrics`

**Imported Interfaces**:
- AuthService: JWT validation API
- Redis: Connection state operations
- NATS: Internal message routing

##### 5.5.7 Database choices and Comparisons
**Redis vs In-Memory State**:
- Redis chosen for distributed state sharing across DCM instances
- Provides persistence during restarts and failover capabilities
- Trade-off: Network latency vs state durability - Redis chosen for reliability

**NATS vs Apache Kafka for Internal Routing**:
- NATS chosen for low-latency internal communication
- Kafka used for durable event processing
- Trade-off: Kafka provides better durability, NATS provides better latency

##### 5.5.8 Tech Decisions & Trade offs
1. **WebSocket over HTTP/2 Streaming**: Lower overhead, better browser support
2. **NATS over RabbitMQ**: Better clustering, gossip protocol, lower resource usage
3. **Connection pooling**: Reduces memory overhead but increases complexity
4. **Stateless design with Redis state**: Enables horizontal scaling with slight latency trade-off

#### 5.5.9 Container: Priority Based Notification Push Worker

##### 5.5.10 Requirements
- Consume notifications from Kafka topics with priority ordering
- Validate tenant permissions and configurations
- Route notifications to appropriate DCM instances
- Implement retry logic for failed deliveries
- Track delivery metrics and status

##### 5.5.11 Functionalities
- Priority-based Kafka consumer with multiple topic subscription
- Tenant validation against TenantDB
- Client online status checking via Redis
- DCM instance selection and load balancing
- Exponential backoff retry mechanism
- Delivery status reporting to NotificationDB

## 6 Low Level Design

### 6.1 Component: Distributed Connection Manager

#### 6.2 Data Models (Class Diagrams)
*[Refer to database schema diagram in images]*

Key entities:
- **Connection**: Stores active connection metadata
- **ClientSession**: Maps client_id to connection details
- **HealthPing**: Tracks client heartbeat status

#### 6.3 Schema Design
*[Database schema from image shows]*
- **tenants**: tenant_id, tenant_name, created_at, status, last_updated_at
- **notifications**: notification_id, tenant_id, entity_id, payload, action, priority, sent_at, ttl, expiry, status, status_code
- **connections**: connection_id, tenant_id, entity_id, status, created_at, last_active_at
- **notification_history**: history_id, notification_id, status, status_code, timestamp

### 6.4 External Interfaces / APIs

#### 6.4.1 WebSocket Connection API
```
Endpoint: wss://notification-service.com/ws/connect
Headers: 
  Authorization: Bearer <JWT_TOKEN>
  
Connection Flow:
1. Client sends JWT token
2. Server validates with AuthService
3. Connection established with client_id extracted from token
4. Health ping interval started (30s)
```

#### 6.4.2 Internal NATS Topics
```
Topics:
- notification.{tenant_id}.{priority} - Notification delivery
- connection.status.update - Connection status changes  
- health.ping.{client_id} - Health ping messages
- ack.{client_id} - Acknowledgment messages
```

### 6.5 PII Solutioning
- **Data Classification**: Category 2 PII (user identifiers, notification content)
- **Encryption**: AES-256 for database, TLS 1.3 for transit
- **Access Control**: Role-based access with tenant isolation
- **Logging**: PII stripped from application logs, audit trails maintained
- **Data Retention**: 90-day retention with automated purging
- **Compliance**: GDPR-compliant data handling with right to erasure

## 7 Sequence Diagrams/ UseCase Diagrams
*[Refer to provided sequence diagrams in images showing]:*
1. **Connection Establishment Flow**: Client authentication, JWT validation, connection setup
2. **Notification Delivery Flow**: Kafka consumption, client status check, delivery, acknowledgment
3. **Retry Mechanism Flow**: Failed delivery handling, exponential backoff, max retry limits
4. **Connection Health Management**: Ping/pong mechanism, status updates, connection recovery

## 8 Security
- **Authentication**: JWT-based authentication with configurable token expiration
- **Authorization**: Tenant-based isolation with RBAC for administrative functions
- **Transport Security**: TLS 1.3 for all client connections
- **Data Protection**: AES-256 encryption for sensitive data at rest
- **Input Validation**: Strict payload validation to prevent injection attacks
- **Rate Limiting**: Per-client and per-tenant rate limiting to prevent DoS
- **Audit Logging**: All security events logged with tamper-proof timestamps

## 9 Deployment View

### 9.1 Topology
- **Load Balancer**: HAProxy/NGINX for connection distribution
- **DCM Cluster**: 3-node NATS cluster for high availability
- **Worker Pool**: Auto-scaling Kubernetes pods for notification processing
- **Database Layer**: PostgreSQL cluster with read replicas
- **Cache Layer**: Redis cluster with sentinel configuration
- **Monitoring**: Prometheus/Grafana stack for observability

### 9.2 Hardware Ask and Why

**Initial Requirements**:
- **DCM Instances**: 3x c5.2xlarge (8 vCPU, 16GB RAM) - High network performance for connections
- **Worker Instances**: 5x c5.large (2 vCPU, 4GB RAM) - CPU optimized for message processing
- **Database**: 2x db.r5.xlarge (4 vCPU, 32GB RAM) - Memory optimized for caching
- **Redis**: 3x cache.r5.large (2 vCPU, 13GB RAM) - Memory optimized for state management
- **Load Balancer**: 2x c5.large for high availability

**Justification**: 
- DCM requires high memory for connection state and network bandwidth
- Workers need CPU for message processing and validation logic
- Database sized for projected data growth and query performance
- Redis cluster provides redundancy and failover capability

### 9.3 System Performance
*[To be updated during completion view]*
- Current benchmarks and load testing results
- Actual vs projected performance metrics
- Bottleneck analysis and optimization strategies
- Scaling recommendations based on production data

## 10 Cost Analysis

### 10.1 Usage Metrics
**Based on 400k DAU with realistic load profile:**
- **Peak concurrent users**: 30,000
- **Message volume**: 510M messages/month (~17M/day, ~200 msgs/sec sustained with bursts)
- **Average message size**: 2KB (~1TB/month data out)
- **Connection minutes**: 180M/month
- **Low latency requirement**: Real-time messaging
- **High availability**: 3+ node cluster requirement

### 10.2 Self-Hosted NATS Infrastructure Costs (AWS ap-south-1)
**3-node HA cluster for 30k peak concurrent users:**
- **NATS Core Cluster**: 3x m5.large (2 vCPU, 8GB RAM) = $210/month
- **Network Load Balancer**: $20/month
- **Data Transfer Out**: 1TB × $0.09/GB = $90/month
- **Monitoring/Logging/Backup**: $20/month
- **Total Self-Hosted NATS**: **$340/month**

*(Note: Additional workers, database, and cache would be separate services)*

### 10.3 Managed Service Cost Comparison

#### 10.3.1 AWS API Gateway WebSocket
- **Connection Minutes**: 180M × $0.25/1M = $45/month
- **Messages**: 510M × $1.00/1M = $510/month  
- **Data Transfer**: Included in message pricing
- **Total AWS API Gateway**: **$555/month**

#### 10.3.2 Ably Real-time Platform
- **Pro Plan Base Fee**: $399/month
- **Connection Minutes**: 180M with volume discount ≈ $164/month
- **Channel Minutes**: 180M with volume discount ≈ $164/month
- **Messages**: Included in connection/channel costs
- **Data Transfer**: Included
- **Total Ably**: **$727/month** (conservative estimate, could be up to $1,200+)

#### 10.3.3 NATS Cloud (Synadia)
- **Managed Enterprise Service**: $2,000-4,000+/month
- **BYON Add-on**: $49/month (for self-hosted with management)

### 10.4 Comprehensive Cost Comparison

| Solution | Monthly Cost | Annual Cost | Cost vs NATS | Notes |
|----------|-------------|-------------|--------------|--------|
| **Self-hosted NATS** | **$340** | **$4,080** | **Baseline** | Cheapest; needs DevOps expertise |
| **AWS API Gateway** | $555 | $6,660 | +63% | Fully managed; AWS-native |
| **Ably (Pro Plan)** | $727-1,200+ | $8,724-14,400+ | +114-253% | Feature-rich but expensive at scale |
| **Synadia Cloud** | $2,000+ | $24,000+ | +488%+ | Enterprise managed NATS |

### 10.5 Break-even Analysis
- **Self-hosted NATS is clearly the winner** - Cheapest by significant margin
- **vs AWS API Gateway**: Self-hosted saves $215/month (39% cheaper)
- **vs Ably**: Self-hosted saves $387-860/month (53-72% cheaper)
- **Cost advantage grows with scale** - Higher traffic makes self-hosted even more economical

### 10.6 Cost Sensitivity Analysis
**Message volume impact (2x to 1.02B messages/month):**
- **AWS API Gateway**: +$510/month (linear scaling with message costs)
- **Ably**: Minimal additional cost (already paying base + connection/channel fees)
- **Self-hosted NATS**: +$30/month (slight bandwidth increase, minimal compute)

**Connection scale impact (2x to 60k peak concurrent users):**
- **AWS API Gateway**: +$45/month (connection minutes)
- **Ably**: +$328/month (doubles connection/channel minutes)
- **Self-hosted NATS**: +$140/month (additional m5.large instances)

### 10.7 Cost Optimization Recommendations

**Immediate Optimizations:**
1. **Continue with self-hosted NATS** - Clear cost leader with 39-72% savings
2. **Reserved Instances**: Save 30-40% on predictable EC2 workloads
3. **Regional optimization**: ap-south-1 already cost-effective for your market

**Growth Strategy (>50k concurrent users):**
1. **Self-hosted advantage increases** - Fixed operational overhead, linear scaling costs
2. **Spot instances** for non-critical workers (60-70% savings)
3. **Multi-region deployment** for global scale while maintaining cost efficiency
4. **Connection pooling** and message batching for optimization

**Long-term Strategy:**
1. **NATS JetStream** for message persistence without external databases
2. **Edge deployment** to reduce data transfer costs
3. **Custom protocol optimization** to reduce message sizes
4. **Auto-scaling workers** based on load patterns

### 10.8 Final Recommendation

**Winner: Self-hosted NATS at $340/month**

**Rationale:**
- **63% cheaper** than AWS API Gateway ($555/month)
- **114% cheaper** than Ably Pro Plan ($727+/month)
- **Full control** over infrastructure and customization
- **No vendor lock-in** or dependency risks
- **Scales economically** with your growth
- **Your existing 4-node cluster** already positions you well

**Decision Factors:**
- **Lowest recurring cost**: Clear winner at $340/month
- **DevOps capability**: You already have NATS expertise in-house  
- **Operational control**: Critical for real-time messaging requirements
- **Cost predictability**: Linear scaling without surprise vendor charges

## 11 Roadmap, timelines and phases

### Phase 1 (Months 1-2): Core Infrastructure
- DCM implementation with NATS
- Basic notification delivery
- JWT authentication
- Single-tenant support

### Phase 2 (Months 3-4): Multi-tenancy & Reliability  
- Multi-tenant isolation
- Retry mechanisms
- Health monitoring
- Basic operational tooling

### Phase 3 (Months 5-6): Advanced Features
- Priority-based processing  
- Advanced retry strategies
- Comprehensive monitoring
- Load testing and optimization

### Phase 4 (Months 7-8): Production Readiness
- Security hardening
- Disaster recovery procedures
- Documentation and training
- Performance optimization

## 12 References
- [NATS Architecture Documentation](https://docs.nats.io/nats-concepts/overview)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
- [WebSocket Security Considerations](https://tools.ietf.org/html/rfc6455)
- [Kafka Consumer Patterns](https://kafka.apache.org/documentation/#consumerapi)
- [Redis Cluster Specification](https://redis.io/topics/cluster-spec)