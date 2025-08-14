module.exports = {

"[project]/src/lib/projects-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "projectsData": (()=>projectsData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-rsc] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-rsc] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-rsc] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$archive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderArchive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-archive.js [app-rsc] (ecmascript) <export default as FolderArchive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt-text.js [app-rsc] (ecmascript) <export default as ReceiptText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-rsc] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-rsc] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-rsc] (ecmascript) <export default as ShieldAlert>");
;
const projectsData = [
    {
        title: "Realtime Event Push Platform",
        slug: "realtime-event-push-platform",
        shortDescription: "Designed and implemented Realtime Event Push Platform, a comprehensive real-time notification system providing scalable, low-latency real-time communication with multi-tenant support and enterprise-grade reliability.",
        summary: "Brief project overview - full details in structured sections below",
        keyContributions: [
            "End-to-End System Architecture: Led complete system design from requirements gathering through production deployment, including comprehensive system design document with detailed component specifications, data models, and deployment topology.",
            "Multi-Solution Analysis & Technology Selection: Conducted thorough evaluation of 8+ messaging solutions (Socket.IO, gRPC Streaming, AWS IoT Core, Apache Kafka + WebSockets, Ably, AWS API Gateway WebSocket, NATS Cloud) with detailed cost-benefit analysis resulting in optimal self-hosted NATS selection saving 63% in infrastructure costs.",
            "High-Performance Distributed Architecture: Designed and implemented horizontally scalable system supporting 50,000 peak concurrent users with sub-300ms P95 latency, featuring stateless Distributed Connection Manager (DCM) cluster with NATS Core and Redis for state management.",
            "Enterprise-Grade Multi-Tenancy: Built comprehensive tenant isolation system with JWT-based authentication, RBAC implementation, and complete data segregation supporting 1,000+ tenants with individual SLA guarantees and configuration management.",
            "Production-Ready Infrastructure: Implemented full observability stack with Prometheus/Grafana monitoring, comprehensive audit logging, PII-compliant data handling (AES-256 encryption, TLS 1.3), and disaster recovery procedures meeting enterprise security requirements."
        ],
        impact: [
            "Massive Scale Achievement: Successfully deployed system handling 10,000 messages/second ingestion rate with 50,000 notifications/second delivery capacity, supporting 50,000 peak concurrent users across 1,000+ tenants.",
            "Exceptional Performance: Achieved sub-300ms P95 end-to-end delivery latency with 99.9% delivery success rate and automated retry mechanisms ensuring reliable message delivery even during network failures.",
            "Significant Cost Savings: Self-hosted architecture delivers 63% cost reduction compared to managed alternatives, saving $215-860/month with linear scaling economics providing ongoing operational efficiency.",
            "Enterprise Platform Adoption: System became foundational infrastructure used by multiple product teams for diverse real-time communication needs including payment notifications, transaction updates, and user engagement campaigns.",
            "User Experience Transformation: Eliminated need for manual page refreshes and polling mechanisms, providing instant real-time updates that significantly improved user engagement and satisfaction metrics."
        ],
        numbers: [
            "50,000 peak concurrent connections supported",
            "50,000 notifications/second delivery capacity",
            "10,000 messages/second Kafka ingestion rate",
            "Sub-300ms P95 end-to-end delivery latency",
            "99.9% notification delivery success rate",
            "63% cost reduction vs managed services ($215-860/month savings)",
            "1,000+ tenants supported with complete isolation",
            "90% reduction in client-side polling requests",
            "4KB maximum payload size with rich content support",
            "3-node NATS cluster for high availability (99.95% uptime)"
        ],
        frameworks: [
            "NATS Core",
            "Spring Boot",
            "Apache Kafka",
            "Redis Sentinel",
            "Kubernetes"
        ],
        primaryProtocols: [
            "WebSockets",
            "NATS Protocol",
            "HTTP/2",
            "TLS 1.3"
        ],
        databases: [
            "PostgreSQL Cluster",
            "Redis Cluster"
        ],
        pubSub: [
            "Apache Kafka",
            "NATS Core",
            "Redis Pub/Sub"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
    },
    {
        title: "Distributed Task Scheduling Platform",
        slug: "dynaq-distributed-event-scheduler",
        shortDescription: "Designed and built a distributed task scheduling platform to reliably execute time-sensitive financial workflows at scale.",
        summary: `Designed and built a distributed task scheduling platform to reliably execute time-sensitive financial workflows (e.g., SIPs, salary processing, bill reminders) at scale. Took ownership across the stack — from evaluating architectural approaches to deploying a multi-tenant production-grade system handling 300k+ events daily.`,
        keyContributions: [
            "End-to-End System Design: Partnered on architectural decisions and led implementation of core components enabling event-driven execution with precision timing and high availability.",
            "Time-Sensitive Triggering: Built a scheduler that guarantees accurate event execution down to the second — essential for financial workflows with strict deadlines.",
            "Robust Retry & Self-Healing: Engineered idempotent, failure-aware retry mechanisms and self-healing logic to ensure system resiliency and eliminate manual intervention.",
            "Multi-Tenant Architecture: Designed strict tenant isolation, including optional DB segregation for Regulated Entities, ensuring data security and compliance.",
            "Scalable Deployment Models: Enabled tenants to run Dynaq in isolated or shared clusters, supporting independent scaling and flexible ops based on SLA and infra needs.",
            "Burst Handling: Implemented burst-execution capability to handle high concurrency surges (e.g., start-of-month payroll or mutual fund batch windows) without bottlenecks.",
            "Comprehensive Observability: Introduced granular event lifecycle tracking and history logs, empowering real-time monitoring and deep operational visibility."
        ],
        impact: [
            "Powers critical financial workflows including Salary, SIPs, SI Mandates, UPI, and Bill Reminders",
            "Fully future-proof — supports onboarding of new workflows like UPI/NACH Mandates and Card-based reminders with minimal integration effort",
            "Zero downtime incidents post-production with self-healing and retry mechanisms in place",
            "Operational flexibility with multi-cluster, multi-namespace support for regulated and non-regulated tenants"
        ],
        frameworks: [
            "AWS Lambda",
            "DynamoDB",
            "API Gateway",
            "CloudWatch",
            "Go Runtime"
        ],
        primaryProtocols: [
            "HTTPS",
            "AWS SDK",
            "JSON",
            "SQS Protocol"
        ],
        databases: [
            "DynamoDB",
            "DynamoDB Streams"
        ],
        pubSub: [
            "Amazon SQS",
            "DynamoDB Streams",
            "SNS"
        ],
        numbers: [
            "300k+ events/day processed reliably",
            "10+ tenants supported",
            "Zero downtime incidents post-production with self-healing and retry mechanisms in place"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
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
        technologies: [
            "Java",
            "Spring Boot",
            "Apache Kafka",
            "Dynaq",
            "Distributed Systems",
            "Event-Driven Architecture",
            "Multi-Tenancy",
            "Performance Optimization"
        ],
        numbers: [
            "Peak (5th of Every month for repayments): 200k executions/day",
            "Average: 120k executions/day",
            "Lifetime Peak (During Spend Linked Investments): 250k executions/day"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
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
        technologies: [
            "Java",
            "Spring Boot",
            "Microservices",
            "AWS S3",
            "Cloud Storage",
            "API Design",
            "Multi-Tenancy",
            "Security",
            "Event-Driven Architecture"
        ],
        numbers: [
            "10+ tenants onboarded",
            "Applications onboard in days (zero custom logic)",
            "Core platform service in Jupiter ecosystem"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$archive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderArchive$3e$__["FolderArchive"]
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
        technologies: [
            "Java",
            "Spring Boot",
            "Microservices",
            "UPI Integration",
            "System Design",
            "Scalability",
            "State Machines",
            "API Integration",
            "Compliance",
            "NPSTX",
            "Hyperface",
            "Gupshup"
        ],
        numbers: [
            "Bank-Grade Infrastructure developed",
            "Composability for External Use",
            "Extreme Observability achieved",
            "Secure & Compliant (SMS + AFA, UDIR)",
            "Payment Resilience via real-time reversals & retries"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
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
        technologies: [
            "Java",
            "Spring Boot",
            "Microservices",
            "BBPS Integration",
            "Dynaq",
            "Scalability",
            "System Design",
            "Event-Driven Architecture"
        ],
        numbers: [
            "200k+ bill payments processed monthly",
            "40k+ daily biller refreshes"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"]
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
        technologies: [
            "Java",
            "Spring Boot",
            "Microservices",
            "System Design",
            "Compliance",
            "API Integration",
            "Workflow Automation"
        ],
        numbers: [
            "High reliability for high-value transactions",
            "Improved operational transparency",
            "Foundation for future international payment products"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
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
            "Deployed the fix to production after comprehensive testing and verification against critical UPI transaction paths and fallback workflows."
        ],
        impact: [
            "Resolved Broken Aggregation: Fixed persistent UX and reliability issues by restoring core DMS functionality across all affected accounts.",
            "Improved Downtime Responsiveness: Enabled faster and more accurate mitigation actions—like greying out banks/services when errors are detected.",
            "Platform-Ready: The system is now extensible and config-driven, capable of supporting any new account structure or alerting logic going forward.",
            "Production Stability: Since deployment, no further DMS-related regressions have occurred across impacted services."
        ],
        technologies: [
            "Alerting Systems",
            "Anomaly Detection",
            "System Redesign",
            "Config-Driven Architecture",
            "Scalability",
            "Production Support"
        ],
        numbers: [
            "Restored core DMS functionality",
            "Faster accurate mitigation",
            "No DMS regressions since deployment"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"]
    }
];
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/separator.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Separator() from the server but Separator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/separator.tsx <module evaluation>", "Separator");
}}),
"[project]/src/components/ui/separator.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Separator() from the server but Separator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/separator.tsx", "Separator");
}}),
"[project]/src/components/ui/separator.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),

};

//# sourceMappingURL=src_7c3db588._.js.map