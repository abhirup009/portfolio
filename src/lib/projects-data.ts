
import type { LucideIcon } from 'lucide-react';
import { CreditCard, Zap, Globe, FolderArchive, ReceiptText, Activity, Wallet, ShieldAlert } from 'lucide-react';

export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  summary: string;
  keyContributions: string[];
  impact: string[];
  technologies?: string[];
  frameworks?: string[];
  primaryProtocols?: string[];
  databases?: string[];
  pubSub?: string[];
  numbers?: string[];
  icon?: LucideIcon;
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Realtime Event Push Platform",
    slug: "realtime-event-push-platform",
    shortDescription: "Designed and implemented Realtime Event Push Platform, a low-latency, cost-efficient platform for real-time backend-to-frontend communication.",
    summary: `Functional Capabilities
  • Backend-to-Frontend Event Push: Real-time event delivery to clients using persistent WebSocket connections.
  • Online/Offline Status Indicators: Live client presence monitoring.
  • Tenant-Specific Delivery Guarantees: Multiple delivery modes (BLIND, WITHOUT_ACK, WITH_ACK) based on tenant configurations and criticality of the event.
  • Network-Based Prioritization: Intelligent event prioritization based on network conditions and event importance.
  • Client Reconnection Support: Graceful session recovery and message replay on reconnect.
  • Dynamic Topic Subscriptions: Runtime subscription changes without re-establishing connections.
  • Backpressure Handling: Event dispatch regulation to prevent overloading slow clients.
  • Authentication-Aware Messaging: Message routing scoped per tenant and user session with strict isolation.
  • Delivery Tracing and Monitoring: Built-in observability for tracing message flow and measuring latency.

Non-Functional Requirements
  • High Availability: Stateless services with load-balanced deployments and a persistent messaging layer.
  • Scalability: Horizontally scalable using NATS and Redis.
  • Latency SLAs: End-to-end delivery latency under 250ms for 95th percentile users.
  • Thundering Herd Protection: Jittered exponential backoff on reconnect storms to mitigate load spikes.
  • Security: JWT-based authentication and per-tenant access controls.
  • Observability: Custom metrics for delivery times, drop rates, acknowledgment success, and per-tenant usage breakdown.`,
    keyContributions: [
        "End-to-End System Ownership: Solely responsible for the entire lifecycle of the platform—from architecture and implementation to deployment, monitoring, and iterative optimization.",
        "Protocol and Architectural Evaluation: Performed in-depth comparisons of MQTT, SSE, gRPC, and WebSockets. Selected WebSockets for efficient long-lived sessions and minimal per-connection overhead.",
        "Platform-Oriented Multi-Tenant Design: Built a tenant-aware messaging layer capable of handling diverse event types and QoS levels. Designed for easy extension by other teams without tight coupling.",
        "Vendor and Open-Source Tradeoff Analysis: Analyzed multiple messaging solutions and finalized a hybrid infrastructure using NATS and Redis to optimize for throughput, observability, and cost.",
        "Forward-Compatible Design: Designed the system with future extensibility in mind. Currently being used and extended for new event types like market data feeds, collect requests, transaction status updates, and balance changes."
    ],
    impact: [
        "Improved User Experience: Eliminated manual refresh and polling through real-time updates.",
        "Scalable and Flexible: Supports new product features without core system changes.",
        "Delivery Flexibility: Different delivery strategies allow optimization for reliability vs performance.",
        "Real Time Payment Request popups."
    ],
    numbers: [
        "~90% reduction in UPI transaction polling.",
        "~85% reduction in balance API polling.",
        "~$100/month in hosting costs.",
        "Projected savings of $15K–$20K/month eliminating network costs."
    ],
    frameworks: ["NATS", "Spring Boot"],
    primaryProtocols: ["WebSockets", "SSE", "HTTP"],
    databases: ["Redis", "PostgreSQL"],
    pubSub: ["Kafka", "AWS SQS", "NATS"],
    icon: Activity,
  },
  {
    title: "Distributed Task Scheduling Platform",
    slug: "dynaq-distributed-event-scheduler",
    shortDescription: "Fault-tolerant task scheduling platform handling high-volume event processing.",
    summary: `Built a distributed task scheduling system for financial workflows with fault tolerance and high throughput. Designed using hexagonal architecture with AWS Lambda functions for scalability. Implemented both one-time and recurring notification capabilities with comprehensive audit trails.`,
    keyContributions: [
      'Designed and architected distributed task scheduler using AWS serverless stack',
      'Implemented hexagonal architecture pattern for clean separation of concerns',
      'Built comprehensive REST API with OpenAPI 3.0 specification',
      'Created tenant-based multi-tenancy with configurable storage and consumer configurations',
      'Developed fault-tolerant execution engine with retry mechanisms and dead letter queues',
      'Implemented comprehensive audit trail system for compliance and debugging'
    ],
    impact: [
      'Processes 300k+ scheduled events daily across multiple financial workflows',
      'Achieved 99.9% uptime with fault-tolerant design and auto-recovery mechanisms',
      'Reduced operational overhead by 60% through automated task management',
      'Enabled horizontal scaling to handle peak loads during financial reporting periods',
      'Improved system observability with comprehensive logging and monitoring'
    ],
    frameworks: [
      'AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudWatch', 'Go Runtime'
    ],
    primaryProtocols: [
      'HTTPS', 'AWS SDK', 'JSON', 'SQS Protocol'
    ],
    databases: [
      'DynamoDB', 'DynamoDB Streams'
    ],
    pubSub: [
      'Amazon SQS', 'DynamoDB Streams', 'SNS'
    ],
    numbers: [
        "300k+ events/day processed reliably",
        "10+ tenants supported",
        "Zero downtime incidents post-production with self-healing and retry mechanisms in place"
    ],
    icon: Zap,
  },
  {
    title: "Mandates - Automatic Payments Platform",
    slug: "mandates-automatic-payments-platform",
    shortDescription: "Redesigned a high-throughput financial mandate system to a robust, event-driven architecture, significantly improving scalability and reliability.",
    summary: `Role: Backend Engineer | Lead Contributor
Tech Focus: Distributed Systems, Event-Driven Architecture, Multi-Tenancy, Performance Optimization

Redesigned a high-throughput financial mandate processing system to address performance bottlenecks, scalability limits, and operational fragility in the legacy platform. Transitioned from a Cron-based execution model to a robust, event-driven architecture, ensuring reliable, low-latency execution across 10+ tenants.`,
    keyContributions: [
      "Architected a new mandate schema with denormalized fields to enable high-performance querying and reduce database overhead.",
      "Replaced Cron-based execution with Dynaq, a distributed event scheduler, enabling asynchronous and resilient task orchestration.",
      "Built an Event Tracker to trace mandate, transaction, and execution lifecycles, dramatically improving observability and debuggability.",
      "Enforced multi-tenancy and tenant isolation, ensuring fault containment and SLA guarantees across all clients.",
      "Implemented global locks and burst control to handle peak loads and race conditions during high-traffic windows.",
      "Introduced audit-compliant history tables to track state transitions and support traceability across workflows."
    ],
    impact: [
      "3x improvement in execution latency and throughput",
      "10+ tenants onboarded with isolated and reliable processing",
      "Zero incidents of double execution or concurrency-related failures",
      "Scalable architecture aligned with stringent financial transaction deadlines (e.g., 2 PM cutoffs for Mutual Funds)"
    ],
    technologies: ["Java", "Spring Boot", "Apache Kafka", "Dynaq", "Distributed Systems", "Event-Driven Architecture", "Multi-Tenancy", "Performance Optimization"],
    numbers: [
      "Peak (5th of Every month for repayments): 200k executions/day",
      "Average: 120k executions/day",
      "Lifetime Peak (During Spend Linked Investments): 250k executions/day"
    ],
    icon: CreditCard,
  },
  {
    title: "Galactus – Unified, Scalable Document Management Platform",
    slug: "galactus-document-management-platform",
    shortDescription: "Designed and implemented Galactus, a centralized document management service to abstract and standardize file handling across multiple business applications.",
    summary: `Designed and implemented Galactus, a centralized document management service to abstract and standardize file handling across multiple business applications. Eliminated fragmented document logic from individual systems, enabling consistent, secure, and scalable storage with per-tenant configurability.`,
    keyContributions: [
      "Architected Galactus as a Platform Service: Consolidated document management into a reusable backend platform used by 10+ applications (e.g., LRS, KYC, Mutual Funds, Nexus).",
      "Enabled Tenant-Specific Storage Models: Supported custom data stores and policies per tenant at onboarding, aligned with regulatory, residency, and operational requirements.",
      "Built Advanced File Handling Features: Introduced secure document locking/unlocking, structured file storage, and safe retrieval APIs to maintain data integrity.",
      "Optimized Upload/Download Efficiency: Evolved from basic file I/O to direct uploads and event-based notifications, significantly reducing resource overhead.",
      "Abstracted Complexity for Applications: Removed the need for teams to implement bespoke file storage logic, letting them focus on core workflows (e.g., LRS in Mercury).",
      "Incremental Enhancements & Scalability: Designed the system to scale horizontally while maintaining isolated performance and security for each tenant."
    ],
    impact: [
      "10+ tenants onboarded, powering mission-critical use cases like KYC, MF, OB, CS, and LRS",
      "Applications now onboard in days with zero custom document logic required",
      "Improved compliance posture with tenant-specific storage, encryption, and residency controls",
      "Became a core platform service within the Jupiter ecosystem, unlocking consistent, reliable file handling across diverse business lines",
      "Reduced developer effort and duplication across teams by centralizing document lifecycle management"
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "AWS S3", "Cloud Storage", "API Design", "Multi-Tenancy", "Security", "Event-Driven Architecture"],
    numbers: [
      "10+ tenants onboarded",
      "Applications onboard in days (zero custom logic)",
      "Core platform service in Jupiter ecosystem"
    ],
    icon: FolderArchive,
  },
  {
    title: "PPI UPI – Prepaid Wallet Infrastructure with UPI Support",
    slug: "ppi-upi-wallet-infrastructure",
    shortDescription: "Led the end-to-end design and implementation of Jupiter’s in-house PPI Wallet stack integrated with UPI, replicating bank-grade backend systems.",
    summary: `Led the end-to-end design and implementation of Jupiter’s in-house PPI (Prepaid Payment Instrument) Wallet stack integrated with UPI, replicating bank-grade backend systems. As the first internal system where Jupiter plays both payer and remitter roles, the platform was designed as a scalable and exportable service to support external integrations in the future.`,
    keyContributions: [
      "Architected the Entire Transaction Lifecycle: Designed and implemented a granular, multi-step state machine to handle all stages of UPI transactions – initiation, authorization, debit, credit, and reconciliation. Engineered reversal flows with guaranteed consistency and loss recovery mechanisms, critical for high-stakes payment systems.",
      "Designed a Platform-Oriented Transaction Core: The system was built as a reusable transaction platform, abstracting business logic from orchestration. Introduced per-event state tracking, enabling precise visibility into transaction state transitions for observability, debugging, and analytics.",
      "Robust Retry & Reliability Framework: Built a persistent retry mechanism that tracks effectiveness of retry intervals and fine-tunes them using real-world latency/error feedback. Integrated global locking for managing concurrent operations and preventing race conditions in critical financial flows.",
      "UPI Registration & AFA Workflow (Switch-Side): Implemented complete UPI Registration system, including mobile number binding, AFA (Additional Factor Authentication), and SMS verification, fully owned by Jupiter as the switch. Unlike previous integrations where Jupiter was a consumer, this system places Jupiter as the primary processor, requiring full lifecycle management and regulatory compliance.",
      "Vendor Integrations: NPSTX (NPCI Switch Partner): Full integration to connect with NPCI and enable UPI payments across the ecosystem. Hyperface: Seamless ledger integration to maintain wallet balances and transaction reconciliation. Gupshup: Used for real-time SMS orchestration and AFA OTP flows to ensure compliance with RBI security mandates.",
      "UDIR Support: Accounted for UDIR (Unified Dispute and Issue Resolution) transaction flows, which added significant complexity in failure handling and dispute resolution scenarios."
    ],
    impact: [
      "Bank-Grade Infrastructure: Developed an internal switch-grade system equivalent to what traditional banks provide, but fully owned and managed by Jupiter.",
      "Composability for External Use: Platform is modularly designed for reuse in external deployments (B2B partnerships, white-labeling etc.) with minimal change.",
      "Extreme Observability: Event tracker and retry analytics framework offer full visibility into transactions and system behavior.",
      "Secure & Compliant: Integrated SMS + AFA compliance, concurrency handling, and UDIR support from day one to meet regulatory requirements.",
      "Payment Resilience: Real-time reversals and retries make the system robust to partner errors, network flakiness, or NPCI downtimes."
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "UPI Integration", "System Design", "Scalability", "State Machines", "API Integration", "Compliance", "NPSTX", "Hyperface", "Gupshup"],
    numbers: [
      "Bank-Grade Infrastructure developed",
      "Composability for External Use",
      "Extreme Observability achieved",
      "Secure & Compliant (SMS + AFA, UDIR)",
      "Payment Resilience via real-time reversals & retries"
    ],
    icon: Wallet,
  },
  {
    title: "Bills – Scalable Bill Payment & Reminder Platform via BBPS",
    slug: "bills-bbps-payment-platform",
    shortDescription: "Led the design and implementation of a scalable bill payment and reminder platform integrating with BBPS, supporting 25k+ billers.",
    summary: `Led the design and implementation of the Bills Platform, a foundational product initiative to integrate with BBPS (Bharat Bill Payment System) and offer users a seamless, in-app experience for bill discovery, fetching, reminders, and payments. Built to scale across 25k+ dynamic billers with diverse metadata, the platform is optimized for fetch-to-pay ratios, burst-resilience, and high product configurability.`,
    keyContributions: [
      "Owned the First End-to-End Iteration: Led architecture, development, and GTM alongside Manu — single-handedly built the core Bills Service from scratch.",
      "Designed Scalable Data Models: Created the UserBillerRegistration model and hierarchical biller metadata store, supporting 25k+ billers with minimal lookup latency. Architecture remains unchanged to date, proving stability and extensibility.",
      "Optimized Bill Fetching at Scale: Migrated all bill fetch operations from Cron to Dynaq, enabling smoother, staggered fetch cycles with event-based scheduling. Reduced reliance on manual intervention by handling backpressure and failures gracefully.",
      "Built Configurable Reminders & Fetch Logic: Designed fetch/reminder flows with runtime configuration support, enabling dynamic experimentation by Product without engineering involvement. Supported segmentation-based targeting to optimize user engagement across cohorts.",
      "Enforced Compliance Constraints: Engineered the system to comply with BBPS Fetch:Pay ratio enforcement, minimizing penalties while maintaining data freshness.",
      "Daily Refresh System: Engineered daily refreshes for 40k+ billers, optimizing fetch scheduling to account for burst periods and partner-specific behaviors."
    ],
    impact: [
      "Drastically improved reliability vs the initial Cron-based implementation, which was bursty, fragile, and required frequent manual intervention.",
      "Enhanced product velocity via config-driven fetch/reminder flows, enabling the Product team to iterate on user engagement without backend changes.",
      "Helped position Jupiter as a holistic financial wellness platform, allowing users to manage recurring bills in-app without switching platforms."
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "BBPS Integration", "Dynaq", "Scalability", "System Design", "Event-Driven Architecture"],
    numbers: [
      "200k+ bill payments processed monthly",
      "40k+ daily biller refreshes"
    ],
    icon: ReceiptText,
  },
  {
    title: "LRS – High-Reliability International Payments Platform",
    slug: "lrs-international-payments-platform",
    shortDescription: "Owned design and implementation of a backend system for seamless international remittances via Fairexpay, aligned with RBI’s LRS.",
    summary: `Owned the design and implementation of a backend system to facilitate seamless international remittances via Fairexpay, aligned with RBI’s Liberalized Remittance Scheme (LRS). Built for precision, auditability, and compliance, the system was architected to manage multi-step, high-value transactions with resilience and flexibility.`,
    keyContributions: [
      "Led End-to-End Order Management: Orchestrated multi-service workflows, ensuring transaction accuracy and regulatory compliance across each sequential step.",
      "Document Lifecycle Management: Built a robust, audit-compliant document management subsystem for all regulatory artifacts — integrated with internal and partner APIs.",
      "Granular State Tracking: Implemented a fine-grained state machine to track every transaction step, enabling full visibility, faster debugging, and minimal operational overhead.",
      "Validation & Step Module: Designed a generic validation engine and a backend-driven frontend architecture to support dynamic, compliance-specific flows with minimal dev effort.",
      "Tenant Segregation & Limits: Developed per-tenant isolation, usage tracking, and configurable transaction limits — foundational for upcoming cross-border investment products.",
      "Fault Recovery Mechanism: Built lossage recovery flows to safely resume transactions after mid-flow failures, minimizing financial risk and ensuring a smooth user experience.",
      "Comprehensive Audit Logging: Enabled traceable, end-to-end logs to support internal monitoring and external compliance audits."
    ],
    impact: [
      "Greatly improved operational transparency with step-level visibility and traceable audit logs",
      "System design enabled seamless UX despite regulatory complexities — early user feedback highlighted a marked improvement in clarity and flow",
      "Set the foundation for future international payment and investment products (e.g., global equity, overseas fund transfers)",
      "Despite external partner and compliance-related sunset, the architecture remains a reference model for regulated financial flows"
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "System Design", "Compliance", "API Integration", "Workflow Automation"],
    numbers: [
      "High reliability for high-value transactions",
      "Improved operational transparency",
      "Foundation for future international payment products"
    ],
    icon: Globe,
  },
  {
    title: "DMS (Downtime Management System) – Production Fix & System Redesign",
    slug: "dms-production-fix-system-redesign",
    shortDescription: "Redesigned a critical Downtime Management System to fix alert aggregation issues post-account segregation, improving UX and system responsiveness.",
    summary: `The Downtime Management System (DMS) is responsible for aggregating alerts and triggering automated protective actions—such as greying out a bank for UPI debit—based on real-time failures and anomaly detection (e.g., metrics-based alerts).
Following the introduction of account-level segregation, the system's inability to aggregate alerts across segregated accounts led to degraded user experience and failure to proactively mitigate issues across services.

Challenges Addressed
  • Broken Alert Aggregation Post-Segregation: After account segregation, alerts were fragmented and failed to map holistically to a single actionable outcome.
  • Inconsistent UX: Failure to grey out impacted banks or services on time led to user-facing transaction failures.
  • Scalability Bottleneck: The original system was tightly coupled and hardcoded, making it difficult to extend to new accounts or alert types.`,
    keyContributions: [
      "Redesigned the Alert Aggregation Engine with a Config-Driven Architecture—allowing DMS to dynamically understand how alerts should be grouped and acted upon based on account, service, and severity.",
      "Enabled support for multi-account alert collation, ensuring the system acts decisively and correctly in platform-wide or scoped downtimes.",
      "Modularized and abstracted the aggregation logic to future-proof the system and support onboarding of new services with minimal dev effort.",
      "Deployed the fix to production after comprehensive testing and verification against critical UPI transaction paths and fallback workflows.",
    ],
    impact: [
      "Resolved Broken Aggregation: Fixed persistent UX and reliability issues by restoring core DMS functionality across all affected accounts.",
      "Improved Downtime Responsiveness: Enabled faster and more accurate mitigation actions—like greying out banks/services when errors are detected.",
      "Platform-Ready: The system is now extensible and config-driven, capable of supporting any new account structure or alerting logic going forward.",
      "Production Stability: Since deployment, no further DMS-related regressions have occurred across impacted services.",
    ],
    technologies: ["Alerting Systems", "Anomaly Detection", "System Redesign", "Config-Driven Architecture", "Scalability", "Production Support"],
    numbers: ["Restored core DMS functionality", "Faster accurate mitigation", "No DMS regressions since deployment"],
    icon: ShieldAlert,
  },
];
