# DynaQ - Distributed Task Scheduling Platform Design Document

## 1 Introduction

### 1.1 Purpose
DynaQ is a multi-tenant, distributed task scheduling platform designed to abstract away the complexities of time-based task execution for applications within the Jupiter ecosystem. The system provides a reliable, scalable, and event-driven alternative to traditional cron-job based scheduling solutions.

The platform enables applications to schedule tasks for future execution without managing the underlying infrastructure complexities of time-based triggers, retry mechanisms, or delivery guarantees. DynaQ addresses the common need across multiple Jupiter applications for scheduling notifications, reminders, and automated actions at specified future times.

The system is designed to handle both short-term tasks (within 48 hours) and long-term tasks (beyond 48 hours) with different optimization strategies, ensuring efficient resource utilization and cost-effective operations at scale.

### 1.2 Scope
The system encompasses:
- **Multi-tenant task scheduling** with complete resource isolation
- **Dual scheduling architecture** optimized for short-term (<48h) and long-term (>48h) tasks
- **Multiple destination types** including SQS, HTTP endpoints, and Kafka topics
- **Comprehensive APIs** for tenant onboarding, task management, and monitoring
- **At-least-once delivery guarantees** with retry mechanisms
- **Full audit trail** and task lifecycle tracking
- **Real-time monitoring and alerting** capabilities

**Out of Scope:**
- Cron-style recurring tasks (planned for future releases)
- Direct database query scheduling
- File system or object storage based triggers
- Real-time streaming data processing
- Complex workflow orchestration beyond single task execution

### 1.3 System Boundaries
The system operates within the following boundaries:
- **Input Boundary**: REST APIs for task creation, tenant management, and monitoring
- **Processing Boundary**: Internal scheduling engines, lambda functions, and data stores
- **Output Boundary**: Destination delivery mechanisms (SQS, HTTP, Kafka)
- **Storage Boundary**: DynamoDB for long-term tasks, SQS for short-term tasks, audit tables
- **Management Boundary**: Administrative APIs and monitoring dashboards

### 1.4 Definitions, Acronyms, and Abbreviations
- **Tenant**: A service or application that uses DynaQ for task scheduling
- **ScheduledNotification**: A task scheduled for future execution with associated metadata
- **Destination**: The delivery mechanism (SQS, HTTP, Kafka) for notifying tenants when tasks are ready
- **Label**: Categorization field for tenant bookkeeping across multiple use cases
- **Long-term Scheduler**: Component handling tasks scheduled >48 hours in the future
- **Short-term Scheduler**: Component handling tasks scheduled <48 hours in the future
- **TTL**: Time To Live - automatic expiration mechanism for DynamoDB records
- **Audit Trail**: Complete historical record of task state transitions and system actions

### 1.5 References
- [AWS DynamoDB TTL Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)
- [AWS SQS Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)
- [AWS Lambda Event Source Mapping](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html)
- [OpenAPI 3.0.1 Specification](https://spec.openapis.org/oas/v3.0.1)

## 2 Actors & Usage

### 2.1 Human Actors
- **Application Developers**: Create and integrate tenant applications with DynaQ
- **System Administrators**: Monitor system health, manage tenant configurations
- **Operations Team**: Handle incident response, capacity planning, and maintenance
- **Business Stakeholders**: Review usage patterns and cost optimization opportunities

### 2.2 System Actors
- **Tenant Applications**: Jupiter ecosystem services that schedule and consume tasks
- **AWS Lambda Functions**: Automated processors for task migration and execution checking
- **DynamoDB Streams**: Event-driven triggers for long-term task migration
- **SQS Queues**: Message delivery mechanisms for short-term tasks and destinations
- **HTTP Endpoints**: External systems receiving task execution notifications
- **Kafka Topics**: Message streaming platforms for high-throughput notifications
- **Monitoring Systems**: Prometheus, CloudWatch, and alerting platforms
- **Audit Systems**: Retool dashboards and compliance reporting tools

### 2.3 Usage Patterns
- **High-Volume Transactional Scheduling**: E-commerce order reminders, payment notifications
- **Low-Frequency Administrative Tasks**: Monthly report generation, data archival
- **Real-time Event Cascading**: User action follow-ups, workflow continuations
- **Compliance and Regulatory Tasks**: Data retention, audit report scheduling
- **Marketing and Communication**: Campaign scheduling, user engagement triggers

## 3 Requirements

### 3.1 Functional Requirements

#### 3.1.1 Tenant Management
- **Tenant Onboarding**: System must support automated tenant registration with unique tenant IDs
- **Resource Isolation**: Each tenant must have isolated DynamoDB tables, SQS queues, and Lambda consumers
- **Multi-Configuration Support**: Tenants can configure multiple destinations and storage options
- **Tenant Lifecycle Management**: Support for tenant activation, deactivation, and configuration updates

#### 3.1.2 Task Scheduling and Management
- **Flexible Task Creation**: Accept tasks with execution times ranging from immediate to years in the future
- **Dual Scheduling Architecture**: Automatically route tasks to appropriate scheduler based on execution time
- **Task Metadata Management**: Support arbitrary payload data and labeling for tenant categorization
- **Task Modification**: Allow updates to execution time, payload, and destination before execution
- **Task Cancellation**: Provide mechanism to cancel scheduled tasks before execution

#### 3.1.3 Delivery Mechanisms
- **Multiple Destination Types**: Support SQS, HTTP endpoints, and Kafka topics
- **At-least-once Delivery**: Guarantee task execution notification delivery with retry mechanisms
- **Destination Configuration**: Allow tenant-specific destination configurations per task
- **Delivery Status Tracking**: Track and report delivery success/failure with detailed error information

#### 3.1.4 Monitoring and Observability
- **Task Lifecycle Tracking**: Complete audit trail from creation to execution/failure
- **Real-time Statistics**: Provide APIs for pending task counts, execution statistics
- **Historical Reporting**: Maintain execution history for compliance and analysis
- **Multi-dimensional Metrics**: Support filtering by tenant, label, date range, and status

#### 3.1.5 PII Requirements
The system handles Category 3 PII data (task payloads may contain user identifiers, transaction data). All PII data must be:
- Encrypted at rest using AWS KMS with tenant-specific keys
- Encrypted in transit using TLS 1.3
- Anonymized in system logs and monitoring metrics
- Subject to tenant-defined retention policies (default 1 year)
- Accessible only to authorized tenant applications

### 3.2 Non Functional Requirements

#### 3.2.1 Scale
- **Current Scale**: Support 100 tenants with 1M tasks/month each
- **Future Scale**: Scale to 1,000 tenants with 10M tasks/month each within 2 years
- **Task Throughput**: Process 10,000 task creations/second during peak hours
- **Concurrent Execution**: Handle 50,000 simultaneous task executions

#### 3.2.2 Concurrent Users
- **API Concurrency**: Support 1,000 concurrent API requests
- **Tenant Concurrency**: Each tenant can submit 100 concurrent tasks
- **System Concurrency**: Total system capacity of 100,000 concurrent operations

#### 3.2.3 Throughput/RPS/QPS
- **Task Creation**: 10,000 tasks/second peak, 2,000 tasks/second sustained
- **Task Execution**: 20,000 executions/second peak, 5,000 executions/second sustained
- **API Requests**: 5,000 requests/second across all endpoints
- **Monitoring Queries**: 500 queries/second for statistics and audit data

#### 3.2.4 Latencies
- **Task Creation API**: <100ms (P95) for task submission response
- **Task Execution Accuracy**: Tasks execute within 30 seconds of scheduled time (P95)
- **Delivery Latency**: <5 seconds from execution trigger to destination delivery (P95)
- **Monitoring API Response**: <500ms (P95) for statistics and audit queries

### 3.3 Data Requirements

#### 3.3.1 Data Consistency
- **Task Scheduling**: Strong consistency for task creation and updates
- **Audit Trails**: Eventually consistent acceptable with 5-second convergence
- **Tenant Configuration**: Strong consistency for onboarding and configuration changes
- **Cross-Region**: Eventual consistency acceptable for disaster recovery scenarios

#### 3.3.2 Data Availability
- **Task Data**: 99.99% availability for active task scheduling and execution
- **Audit Data**: 99.9% availability for historical reporting and compliance
- **Configuration Data**: 99.99% availability for tenant and destination configuration

#### 3.3.3 Data Growth and Archival
- **Task Data Growth**: 100GB/month/1M tasks with linear scaling
- **Audit Data Growth**: 50GB/month/1M tasks for complete lifecycle tracking
- **2-Year Projection**: 5TB total active storage, 20TB archived storage
- **Archival Policy**:
  - Completed tasks: Move to cold storage after 90 days
  - Failed tasks: Retain in hot storage for 30 days, then cold storage for 1 year
  - Audit trails: Hot storage for 6 months, cold storage for 5 years

### 3.4 Analytics & Monitoring requirements
- **Real-time Dashboards**: Task creation rates, execution success/failure rates, queue depths
- **Performance Metrics**: API latency percentiles, task execution accuracy, delivery success rates
- **Business Metrics**: Per-tenant usage patterns, cost allocation, SLA compliance
- **Operational Metrics**: Lambda invocation counts, DynamoDB read/write capacity, SQS message rates
- **Historical Analysis**: Trend analysis over 2 years with hourly granularity
- **Alerting**: Real-time alerts for SLA breaches, error rate spikes, capacity issues

### 3.5 Auditing & Access Control
- **Complete Audit Trail**: Every task state transition logged with timestamp and actor
- **Tenant Isolation**: Strict access control ensuring tenants can only access their own data
- **Administrative Audit**: All system configuration changes logged with administrative user identification
- **API Access Logging**: All API calls logged with tenant identification and request/response details
- **Compliance Reporting**: Automated generation of audit reports for compliance requirements
- **Data Access Control**: Role-based access with tenant-specific permissions and IP restrictions

### 3.6 Security
- **Assets to Protect**: Task payloads, tenant configuration data, audit trails, system credentials
- **Threats**: Unauthorized task access, payload tampering, DoS attacks, credential theft
- **Mitigations**: 
  - API authentication using JWT tokens with tenant-specific claims
  - Payload encryption using tenant-specific KMS keys
  - Rate limiting per tenant and globally
  - Network segmentation and VPC isolation
  - Regular security assessments and penetration testing

## 4 Research on Existing Solutions

### 4.1 Explored Solutions

#### 4.1.1 AWS EventBridge Scheduled Rules
- **Functionality Coverage**: Provides cron-based scheduling with Lambda triggers
- **Limitations**:
  - Limited to cron expressions, no arbitrary future timestamps
  - No multi-tenancy support requiring separate rules per tenant
  - No built-in retry mechanisms or delivery guarantees
  - Expensive for high-frequency task scheduling
- **Decision**: Rejected due to lack of multi-tenant architecture and arbitrary scheduling support

#### 4.1.2 Celery with Redis/RabbitMQ
- **Functionality Coverage**: Distributed task queue with scheduling capabilities
- **Advantages**: Mature ecosystem, good retry mechanisms, monitoring tools
- **Limitations**:
  - Requires complex infrastructure management (Redis cluster, worker management)
  - No built-in multi-tenancy requiring application-level isolation
  - Memory-based storage not suitable for long-term task scheduling
  - Operational overhead for monitoring and scaling workers
- **Decision**: Rejected due to operational complexity and lack of native AWS integration

#### 4.1.3 Quartz Scheduler (Java-based)
- **Functionality Coverage**: Comprehensive scheduling with persistent job stores
- **Advantages**: Feature-rich scheduling, cron support, clustering capabilities
- **Limitations**:
  - Requires application server infrastructure
  - Not serverless-friendly, needs persistent compute resources
  - Java-specific limiting language flexibility
  - Complex configuration for multi-tenant scenarios
- **Decision**: Rejected due to infrastructure requirements and technology constraints

#### 4.1.4 AWS SQS + Lambda (Custom Solution)
- **Functionality Coverage**: Could provide basic delayed message delivery
- **Limitations**:
  - SQS maximum delay of 15 minutes insufficient for long-term scheduling
  - No built-in persistence for very long-term tasks
  - Requires significant custom development for reliability features
  - Limited monitoring and audit capabilities without additional development
- **Decision**: Rejected due to delay limitations and development complexity

#### 4.1.5 Kubernetes CronJobs
- **Functionality Coverage**: Container-based scheduled job execution
- **Limitations**:
  - Cron-based only, no arbitrary timestamp scheduling
  - No multi-tenancy without complex namespace/RBAC configuration
  - Requires Kubernetes cluster management overhead
  - No built-in task persistence or audit trails
- **Decision**: Rejected due to operational overhead and limited scheduling flexibility

### 4.2 Build vs Buy Analysis
After evaluating existing solutions, the decision was made to build a custom solution because:
- **Unique Requirements**: Combination of arbitrary timestamp scheduling, multi-tenancy, and AWS-native integration not available in existing solutions
- **Cost Optimization**: Custom solution allows optimization for specific usage patterns and cost requirements
- **Integration Requirements**: Deep integration with Jupiter ecosystem and AWS services requires custom development
- **Scalability Needs**: Ability to optimize for specific scaling patterns and tenant isolation requirements

## 5 High level Design

### 5.1 Design Goals
1. **Multi-tenant Isolation**: Complete resource isolation between tenants at storage and compute levels
2. **Cost Optimization**: Minimize costs through serverless architecture and intelligent task routing
3. **Delivery Reliability**: Guarantee at-least-once delivery with comprehensive retry mechanisms
4. **Operational Simplicity**: Minimize operational overhead through managed services and automation
5. **Horizontal Scalability**: Support linear scaling through partitioned storage and serverless compute

### 5.2 Assumptions
- AWS DynamoDB TTL has up to 48-hour delay for item deletion (AWS SLA)
- SQS visibility timeout can reliably handle short-term scheduling requirements
- Tenant applications can handle at-least-once delivery semantics with idempotent processing
- Network connectivity between components has <100ms latency within same region
- Lambda cold start latency is acceptable for non-real-time task processing

### 5.3 Limitations/Constraints
- **DynamoDB TTL Uncertainty**: Up to 48-hour delay requires dual-architecture approach
- **SQS Message Limits**: 256KB payload limit may require external storage for large payloads
- **Lambda Execution Limits**: 15-minute maximum execution time for task processing functions
- **API Gateway Limits**: 30-second timeout for synchronous API responses
- **Regional Deployment**: Single-region deployment initially, limiting global latency optimization

### 5.4 Container Diagram/ High level Diagram
The system consists of the following major components:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Tenant Apps   │    │  Admin Console  │    │  Monitoring     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │ REST APIs              │ Management APIs       │ Metrics/Logs
         │                       │                       │
┌─────────────────────────────────────────────────────────────────┐
│                    API Gateway + Lambda                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ Scheduler Core  │  │   Tenant Mgmt   │  │   Monitoring    │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
         │                       │                       │
         │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Long-term      │    │  Short-term     │    │   Audit Store   │
│  Scheduler      │    │  Scheduler      │    │   (DynamoDB)    │
│  (DynamoDB)     │    │     (SQS)       │    └─────────────────┘
└─────────────────┘    └─────────────────┘
         │                       │
         │ DDB Streams           │ Lambda Polling
         │                       │
┌─────────────────┐    ┌─────────────────┐
│ Migration       │    │ Execution       │
│ Lambda          │    │ Lambda          │
└─────────────────┘    └─────────────────┘
         │                       │
         │                       │ Delivery
         │                       │
┌─────────────────────────────────────────────────────────────────┐
│                    Destination Layer                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │      SQS        │  │   HTTP Client   │  │     Kafka       │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 5.5 Container

#### 5.5.1 Container: Scheduler Core

##### 5.5.2 Requirements
- Process task creation and routing decisions based on execution time
- Provide REST APIs for task management (create, update, cancel, query)
- Implement intelligent routing between long-term and short-term schedulers
- Handle tenant authentication and authorization for all operations
- Maintain task metadata and status information

##### 5.5.3 Functionalities
- **Task Creation API**: Accept task scheduling requests with validation
- **Intelligent Routing**: Route tasks to appropriate scheduler based on 48-hour threshold
- **Task Management**: Support task updates, cancellations, and status queries
- **Tenant Validation**: Verify tenant permissions and resource limits
- **Metadata Management**: Track task labels, destinations, and execution parameters
- **Error Handling**: Comprehensive error responses with tenant-specific error codes

##### 5.5.4 Exploration of platform capabilities
**Reusability**: Scheduler Core can be extended to support other Jupiter applications requiring time-based event scheduling. The API design allows for easy integration with different payload types and destination configurations.

**Multi-tenant Design**: Built from ground-up with tenant isolation, supporting different resource allocation models (shared vs dedicated resources per tenant).

**Platform Potential**: Can evolve into a comprehensive workflow orchestration platform with dependency management and complex scheduling patterns.

##### 5.5.5 System View
Scheduler Core operates as a set of Lambda functions behind API Gateway with:
- JWT-based authentication and tenant resolution
- Input validation and business rule enforcement
- Integration with both storage systems (DynamoDB and SQS)
- Comprehensive logging and metrics collection

##### 5.5.6 Interfaces/APIs
**Exported Interfaces**:
- POST /v1/scheduler/notification - Task creation
- GET /v1/scheduler/notification/{id} - Task retrieval
- PATCH /v1/scheduler/notification/{id} - Task updates
- DELETE /v1/scheduler/notification/{id} - Task cancellation
- GET /v1/scheduler/notifications - Bulk task queries

**Imported Interfaces**:
- DynamoDB APIs for long-term task storage
- SQS APIs for short-term task queueing
- Tenant management system for authentication
- Audit service for activity logging

##### 5.5.7 Database choices and Comparisons
**DynamoDB vs RDS for Long-term Storage**:
- DynamoDB chosen for automatic TTL management and serverless scaling
- Trade-off: Limited query flexibility vs operational simplicity
- RDS would provide better query capabilities but require operational management

**SQS vs Kafka for Short-term Storage**:
- SQS chosen for serverless operation and visibility timeout features
- Trade-off: Limited throughput per queue vs operational simplicity
- Kafka would provide higher throughput but require cluster management

##### 5.5.8 Tech Decisions & Trade offs
1. **Serverless Architecture**: Chosen for cost optimization and zero operational overhead
2. **48-hour Threshold**: Based on DynamoDB TTL SLA to ensure reliable task migration
3. **At-least-once Delivery**: Chosen over exactly-once for performance and simplicity
4. **RESTful APIs**: Standard HTTP APIs for easy integration over message-based protocols

#### 5.5.9 Container: Long-term Scheduler

##### 5.5.10 Requirements
- Store tasks scheduled more than 48 hours in the future
- Automatically migrate tasks to short-term scheduler when TTL expires
- Provide tenant-isolated storage with configurable retention policies
- Support task updates and cancellations for long-term tasks
- Maintain audit trail for all long-term task operations

##### 5.5.11 Functionalities
- **Task Persistence**: Store tasks with calculated TTL values
- **Automatic Migration**: Trigger task migration via DynamoDB Streams
- **Task Updates**: Support in-place updates for pending long-term tasks
- **Tenant Isolation**: Separate tables per tenant for complete isolation
- **Audit Integration**: Log all operations to audit trail system

#### 5.5.12 Container: Short-term Scheduler

##### 5.5.13 Requirements
- Queue tasks scheduled within 48 hours using SQS visibility timeout
- Support high-throughput task processing with minimal latency
- Implement precise timing control for task execution
- Handle task retries and dead letter queue management
- Provide real-time visibility into pending task counts

##### 5.5.14 Functionalities
- **Visibility Timeout Management**: Calculate precise timeout values for task execution
- **Polling Optimization**: Efficient polling strategies to minimize costs
- **Retry Logic**: Configurable retry policies with exponential backoff
- **Dead Letter Handling**: Failed task management and alerting
- **Real-time Metrics**: Queue depth and processing rate monitoring

## 6 Low Level Design

### 6.1 Component: Task Processing Engine

The task processing engine coordinates between all scheduling components to ensure reliable task execution.

#### 6.2 Data Models (Class Diagrams)

**Task Entity**:
```
Task {
  +requestId: String
  +tenantId: String
  +label: String
  +executionTime: DateTime
  +payload: String
  +destination: Destination
  +status: TaskStatus
  +createdAt: DateTime
  +updatedAt: DateTime
}
```

**Tenant Entity**:
```
Tenant {
  +tenantId: String
  +tenantLabel: String
  +tenantUrn: String
  +taskStorageConfig: StorageConfig
  +consumerConfig: ConsumerConfig
  +createdAt: DateTime
}
```

**Destination Entity**:
```
Destination {
  +type: DestinationType
  +configuration: DestinationConfig
}

SQSDestination extends Destination {
  +sqsUrl: String
}

HTTPDestination extends Destination {
  +endpoint: String
  +headers: Map<String, String>
}

KafkaDestination extends Destination {
  +topic: String
  +key: String
  +headers: List<KafkaHeader>
}
```

#### 6.3 Schema Design

**Tenant Metadata Table** (DynamoDB):
- Partition Key: `tenantId` (String)
- Sort Key: `entityType#entityId` (String) 
- Attributes: tenantLabel, tenantUrn, configurations, createdAt, updatedAt
- GSI: `tenantLabel-index` for lookup by label

**Long-term Task Tables** (DynamoDB - per tenant):
- Partition Key: `taskId` (String)
- Sort Key: `executionTime` (Number - Unix timestamp)
- Attributes: payload, destination, label, status, createdAt
- TTL Attribute: `ttlExpiry` (calculated as executionTime - 48h)
- GSI: `executionTime-index` for time-range queries

**Task Audit Table** (DynamoDB):
- Partition Key: `taskId` (String)
- Sort Key: `timestamp#action` (String)
- Attributes: action, status, payload, message, createdAt
- GSI: `tenantId-timestamp-index` for tenant-specific audit queries

**Short-term Task Queues** (SQS - per tenant):
- Message Body: Task JSON with all metadata
- Visibility Timeout: Calculated based on execution time
- Message Attributes: tenantId, label, executionTime
- Dead Letter Queue: For failed processing with max 3 retries

#### 6.4 External Interfaces / APIs

**Task Management APIs**:

```yaml
# Create Task
POST /v1/scheduler/notification
Headers:
  x-tenant: {tenantId}
  Authorization: Bearer {jwt}
Body:
  requestId: string
  label: string
  executionTime: ISO8601 datetime
  destination: DestinationConfig
  payload: string (max 64KB)
Response:
  201: Created task with ID and status
  400: Invalid request data
  409: Duplicate requestId
  429: Rate limit exceeded
```

```yaml
# Get Task
GET /v1/scheduler/notification/{requestId}
Headers:
  x-tenant: {tenantId}
  Authorization: Bearer {jwt}
Response:
  200: Task details with current status
  404: Task not found
  403: Unauthorized access
```

```yaml
# Update Task
PATCH /v1/scheduler/notification/{requestId}
Headers:
  x-tenant: {tenantId}
  Authorization: Bearer {jwt}
Body:
  executionTime: ISO8601 datetime (optional)
  destination: DestinationConfig (optional)
  payload: string (optional)
Response:
  200: Updated task details
  404: Task not found
  409: Task already executed
```

```yaml
# Cancel Task
DELETE /v1/scheduler/notification/{requestId}
Headers:
  x-tenant: {tenantId}
  Authorization: Bearer {jwt}
Response:
  200: Task cancelled successfully
  404: Task not found
  409: Task already executed
```

**Tenant Management APIs**:

```yaml
# Onboard Tenant
POST /v1/scheduler/tenant
Headers:
  Authorization: Bearer {adminJwt}
Body:
  tenantLabel: string
  taskStorageConfiguration: StorageConfig
  internalConsumerConfiguration: ConsumerConfig
Response:
  201: Created tenant with assigned ID
  400: Invalid configuration
  409: Tenant already exists
```

**Monitoring APIs**:

```yaml
# Get Task Statistics
GET /v1/scheduler/notifications
Headers:
  x-tenant: {tenantId}
Parameters:
  executionDate: yyyy-MM-dd
  status: ACTIVE|IN_ACTIVE|SEND_SUCCESSFUL|SEND_FAILED
Response:
  200: Array of matching tasks
  400: Invalid date format
```

#### 6.5 PII Solutioning
- **Data Classification**: Task payloads classified as Category 3 PII requiring encryption
- **Encryption Strategy**: 
  - At Rest: AWS KMS with tenant-specific keys for payload encryption
  - In Transit: TLS 1.3 for all API communications
  - In Processing: Temporary decryption only during task execution
- **Access Controls**: 
  - JWT tokens with tenant-specific claims
  - API rate limiting per tenant (1000 requests/minute)
  - Resource isolation preventing cross-tenant data access
- **Audit and Compliance**:
  - All PII access logged with user identification
  - Automated PII detection and classification in payloads
  - Data retention policies enforce automatic deletion
  - Right to erasure implemented via tenant-specific deletion APIs

## 7 Sequence Diagrams/ UseCase Diagrams

### 7.1 Task Creation Flow
```
Tenant App -> API Gateway -> Scheduler Core -> [Long/Short Scheduler] -> Response
```

**Detailed Sequence**:
1. Tenant app submits task creation request
2. API Gateway validates JWT and extracts tenant ID
3. Scheduler Core validates request payload and tenant permissions
4. Core calculates execution time delta and routes to appropriate scheduler:
   - If >48h: Store in DynamoDB with TTL = executionTime - 48h
   - If <48h: Queue in SQS with visibility timeout = executionTime - now
5. Audit record created for task creation
6. Response returned with task ID and status

### 7.2 Long-term Task Migration Flow
```
DynamoDB TTL -> DDB Streams -> Migration Lambda -> Short-term Scheduler
```

**Detailed Sequence**:
1. DynamoDB TTL expires for long-term task
2. DDB Stream triggers Migration Lambda with task data
3. Lambda validates task is still active and execution time is approaching
4. Task moved to appropriate tenant's SQS queue with calculated visibility timeout
5. Audit record created for migration event
6. Original DDB record status updated to MIGRATED

### 7.3 Task Execution Flow
```
SQS -> Execution Lambda -> Destination -> Audit Update
```

**Detailed Sequence**:
1. Execution Lambda polls SQS queue for messages
2. Lambda checks if execution time has arrived:
   - If not ready: Return message to queue with updated visibility timeout
   - If ready: Proceed with execution
3. Lambda delivers notification to configured destination:
   - SQS: Send message to destination queue
   - HTTP: POST request to configured endpoint  
   - Kafka: Publish to configured topic
4. Update audit trail with execution result (SUCCESS/FAILED)
5. Remove message from queue if successful, or retry if failed

### 7.4 Task Cancellation Flow
```
Tenant App -> API Gateway -> Scheduler Core -> [Storage Layer] -> Response
```

**Detailed Sequence**:
1. Tenant app requests task cancellation
2. API Gateway validates permissions
3. Scheduler Core locates task in appropriate storage (DDB or SQS)
4. Task status updated to CANCELLED
5. If in SQS, message removed from queue
6. If in DynamoDB, record updated with CANCELLED status
7. Audit record created for cancellation
8. Response returned confirming cancellation

## 8 Security

### 8.1 Authentication and Authorization
- **API Authentication**: JWT tokens with tenant-specific claims and expiration
- **Service-to-Service**: IAM roles for Lambda functions with least-privilege access
- **Admin Access**: Separate authentication realm for administrative functions
- **Token Validation**: Real-time validation against tenant management service

### 8.2 Data Security
- **Encryption at Rest**: AES-256 encryption for all DynamoDB tables using tenant-specific KMS keys
- **Encryption in Transit**: TLS 1.3 for all API communications and internal service calls
- **Key Management**: AWS KMS with automatic key rotation and tenant isolation
- **Secure Storage**: Sensitive configuration data stored in AWS Systems Manager Parameter Store

### 8.3 Network Security
- **VPC Isolation**: All Lambda functions deployed in private subnets
- **API Gateway**: Public endpoints with WAF protection and rate limiting
- **Service Mesh**: Internal service communications through private networking only
- **DDoS Protection**: AWS Shield Standard with enhanced monitoring

### 8.4 Access Control
- **Tenant Isolation**: Complete resource isolation at storage and compute levels
- **Role-Based Access**: Different permission levels for tenant users vs administrators
- **Resource Limits**: Per-tenant quotas on API calls, storage, and compute resources
- **Audit Logging**: All access attempts logged with user identification and outcome

### 8.5 Compliance and Governance
- **Data Residency**: Single-region deployment ensuring data locality requirements
- **Audit Trails**: Immutable audit logs for all system operations and data access
- **Compliance Reporting**: Automated generation of security and compliance reports
- **Regular Assessment**: Quarterly security reviews and penetration testing

## 9 Deployment View

### 9.1 Topology
**AWS Multi-AZ Deployment Architecture**:
- **API Layer**: API Gateway with Lambda functions across multiple AZs
- **Storage Layer**: DynamoDB with Global Tables, SQS with cross-AZ replication
- **Compute Layer**: Lambda functions with reserved concurrency and auto-scaling
- **Monitoring Layer**: CloudWatch, X-Ray, and custom metrics collection

### 9.2 Hardware Ask and Why

**Initial Requirements** (AWS):
- **Lambda Functions**: 10GB total memory allocation across all functions
- **DynamoDB**: Provisioned capacity of 1000 RCU/WCU per tenant table
- **SQS**: Standard queues with 1000 messages/second throughput per tenant
- **API Gateway**: 5000 requests/second across all endpoints
- **Storage**: 100GB initial storage allocation across all DynamoDB tables

**Cost Estimate**:
- Lambda execution: $50/month for 10M executions
- DynamoDB: $300/month for storage and throughput
- SQS: $40/month for message processing
- API Gateway: $35/month for 10M requests
- **Total**: ~$425/month for initial scale

**Justification**:
- Serverless architecture minimizes operational overhead
- Pay-per-use model aligns costs with actual usage
- Auto-scaling capabilities handle variable workloads
- Multi-AZ deployment ensures high availability

### 9.3 System Performance
*[To be updated during completion view]*

Target Performance Metrics:
- API Response Time: <100ms (P95)
- Task Execution Accuracy: Within 30 seconds of scheduled time (P95)
- System Availability: 99.9% uptime SLA
- Error Rate: <0.1% for all operations

## 10 Cost Analysis

### 10.1 Usage Metrics
**Based on projected tenant usage:**
- **Active Tenants**: 100 initially, scaling to 1000 over 2 years
- **Tasks per Month**: 1M per tenant average (100M total initially, 1B at scale)
- **API Calls**: 5M per month (task management and monitoring)
- **Storage Growth**: 10GB per million tasks (1TB initially, 10TB at scale)
- **Execution Distribution**: 80% short-term (<48h), 20% long-term (>48h)

### 10.2 AWS Serverless Infrastructure Costs

**Current Scale (100 tenants, 100M tasks/month)**:
- **Lambda Execution**: $500/month (100M executions × $0.0000002/ms × 5000ms avg)
- **DynamoDB**: $800/month (storage: $250, throughput: $550)
- **SQS**: $200/month (100M messages × $0.0004 per 1M requests × 4)
- **API Gateway**: $175/month (5M requests × $3.50 per million)
- **CloudWatch**: $100/month (logs and metrics)
- **Data Transfer**: $50/month (intra-region transfer)
- **Total**: **$1,825/month**

**Future Scale (1000 tenants, 1B tasks/month)**:
- **Lambda Execution**: $5,000/month (linear scaling)
- **DynamoDB**: $6,400/month (storage: $2,500, throughput: $3,900)
- **SQS**: $1,600/month (1B messages)
- **API Gateway**: $1,750/month (50M requests)
- **CloudWatch**: $800/month
- **Data Transfer**: $400/month
- **Total**: **$15,950/month**

### 10.3 Alternative Solution Cost Comparison

#### 10.3.1 Self-hosted Solution (EKS + RDS + Redis)
- **EKS Cluster**: $73/month (cluster) + $600/month (6× m5.large nodes)
- **RDS PostgreSQL**: $500/month (db.r5.2xlarge Multi-AZ)
- **ElastiCache Redis**: $300/month (cache.r5.xlarge cluster)
- **Load Balancer**: $25/month
- **Storage**: $200/month (EBS + backups)
- **Total**: **$1,698/month** (current scale)

#### 10.3.2 Third-party SaaS (Temporal/Zeebe)
- **Temporal Cloud**: $2,000+/month for 100M tasks
- **Camunda Cloud**: $1,500+/month for enterprise features
- **Additional Integration Costs**: $500/month (development/maintenance)
- **Total**: **$2,000-2,500/month**

### 10.4 Comprehensive Cost Comparison

| Solution | Current Scale | Future Scale | Pros | Cons |
|----------|--------------|--------------|------|------|
| **AWS Serverless** | $1,825/month | $15,950/month | Zero ops, auto-scale, pay-per-use | Vendor lock-in, cold starts |
| **Self-hosted** | $1,698/month | $8,500/month | Control, customization | High ops overhead, scaling complexity |
| **SaaS Solution** | $2,500/month | $20,000+/month | Feature-rich, supported | Expensive, limited customization |

### 10.5 Break-even Analysis
- **Self-hosted vs Serverless**: Self-hosted becomes cheaper at ~500 tenants (500M tasks/month)
- **Cost Crossover Point**: $10,000/month threshold
- **Migration Consideration**: Plan evaluation of self-hosted option at 300+ tenant scale

### 10.6 Cost Optimization Strategies

**Immediate Optimizations**:
1. **Reserved Capacity**: DynamoDB reserved capacity for 40% savings on predictable workloads
2. **Lambda Provisioned Concurrency**: Only for critical functions to reduce cold starts
3. **S3 Lifecycle Policies**: Move old audit data to IA/Glacier for 70% storage savings
4. **API Caching**: Implement caching for monitoring APIs to reduce DynamoDB reads

**Growth Strategy**:
1. **Tiered Pricing Model**: Charge tenants based on usage to offset infrastructure costs
2. **Resource Pooling**: Share resources where possible while maintaining isolation
3. **Regional Optimization**: Deploy in lowest-cost regions for development/testing
4. **Spot Pricing**: Use EC2 Spot for non-critical batch processing workloads

**Long-term Strategy**:
1. **Hybrid Architecture**: Evaluate self-hosted for high-volume, predictable workloads
2. **Multi-cloud**: Leverage pricing competition between cloud providers
3. **Edge Optimization**: Regional deployments to reduce data transfer costs
4. **Technology Refresh**: Regular evaluation of new AWS services and pricing models

### 10.7 Cost Monitoring and Governance
- **Real-time Cost Tracking**: Per-tenant cost allocation and monitoring
- **Budget Alerts**: Automated alerts at 80% and 100% of monthly budget
- **Usage Analytics**: Monthly cost optimization reviews and recommendations
- **Chargeback Model**: Tenant billing based on actual resource consumption

### 10.8 Final Recommendation

**Winner: AWS Serverless Architecture at $1,825/month**

**Rationale**:
- **Operational Excellence**: Zero infrastructure management overhead
- **Cost Efficiency**: Pay-per-use model aligns with variable tenant usage
- **Scalability**: Automatic scaling without capacity planning
- **Time to Market**: Faster development and deployment
- **Risk Mitigation**: Managed services reduce operational risks

**Decision Factors**:
- **Lower Initial Investment**: No upfront infrastructure costs
- **Reduced Operational Risk**: AWS manages underlying infrastructure
- **Development Velocity**: Focus on business logic vs infrastructure management
- **Compliance**: AWS compliance certifications reduce audit overhead

## 11 Roadmap, timelines and phases

### Phase 1 (Months 1-3): Core Platform Development
- **Foundation**: Basic tenant onboarding and task scheduling APIs
- **Dual Scheduling**: Implement both long-term (DynamoDB) and short-term (SQS) schedulers  
- **Delivery Mechanisms**: SQS and HTTP destination support
- **Basic Monitoring**: CloudWatch integration and basic metrics
- **Security**: JWT authentication and tenant isolation

### Phase 2 (Months 4-6): Production Readiness
- **Advanced Features**: Task updates, cancellations, and bulk operations
- **Kafka Support**: Integration with Kafka destinations for high-throughput scenarios
- **Enhanced Monitoring**: Custom dashboards, alerting, and SLA monitoring
- **Audit System**: Complete audit trail and compliance reporting
- **Performance Optimization**: Lambda warming, DynamoDB optimization

### Phase 3 (Months 7-9): Scale and Reliability
- **Multi-region Support**: Active-passive disaster recovery setup
- **Advanced Retry Logic**: Exponential backoff, dead letter queues, and failure analysis
- **Operational Tools**: Administrative APIs, tenant management console
- **Load Testing**: Comprehensive performance testing and capacity planning
- **Documentation**: Complete API documentation and integration guides

### Phase 4 (Months 10-12): Enterprise Features
- **Advanced Scheduling**: Support for cron expressions and recurring tasks
- **Workflow Integration**: Task dependencies and complex scheduling patterns
- **Advanced Security**: Enhanced encryption, audit trails, and compliance features
- **Cost Optimization**: Resource right-sizing and cost allocation tools
- **Ecosystem Integration**: Integration with other Jupiter platform services

## 12 References
- [AWS DynamoDB Best Practices](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
- [AWS Lambda Performance Tuning](https://docs.aws.amazon.com/lambda/latest/operatorguide/perf-optimize.html)
- [SQS Best Practices](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-best-practices.html)
- [Multi-tenant SaaS Architecture](https://aws.amazon.com/architecture/saas/)
- [Serverless Security Best Practices](https://aws.amazon.com/serverless/security-best-practices/)
- [OpenAPI 3.0 Specification](https://swagger.io/specification/)
- [JWT Best Practices](https://tools.ietf.org/rfc/rfc8725.txt)