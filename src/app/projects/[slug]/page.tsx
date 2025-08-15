
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/lib/projects-data'; 
import Section from '@/app/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, TrendingUp, Cpu, Database, Network, Code, Globe, Settings, Eye, Activity, ShieldAlert } from 'lucide-react';
import Header from '@/app/components/shared/Header';
import Footer from '@/app/components/shared/Footer';
import ZoomableImage from '@/app/components/shared/ZoomableImage';
import TickerCaseStudy from '@/app/components/case-studies/ticker/TickerCaseStudy';
import { navItems } from '@/app/page';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }
  
  const hasCategorizedTech = project.frameworks || project.primaryProtocols || project.databases || project.pubSub;
  const isDistributedTaskScheduler = project.slug === 'dynaq-distributed-event-scheduler';
  const isTickerRealTime = project.slug === 'ticker-real-time-push-infrastructure';
  
  // SVG mapping for projects
  const getProjectSvg = (slug: string) => {
    const svgMap: Record<string, string> = {
      'dynaq-distributed-event-scheduler': '/projects/distributed-event-scheduler-system-design.svg',
      'ticker-real-time-push-infrastructure': '/projects/ticker-system-design.svg',
    };
    return svgMap[slug] || '/projects/ticker-system-design.svg'; // fallback
  };

  // Distributed Task Scheduling Platform specific component
  const DynaqCaseStudy = () => (
    <div className="space-y-12">
      {/* Table of Contents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="text-primary" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <a href="#overview" className="block text-primary hover:underline">1. System Overview</a>
            <a href="#architecture" className="block text-primary hover:underline">2. Architecture Design</a>
            <a href="#impact" className="block text-primary hover:underline">3. Impact & Contributions</a>
            <a href="#summary" className="block text-primary hover:underline">4. Technical Summary</a>
            <a href="#technology" className="block text-primary hover:underline">5. Technology Stack</a>
            <a href="#api-design" className="block text-primary hover:underline">6. API Design</a>
            <a href="#data-models" className="block text-primary hover:underline">7. Data Models</a>
            <a href="#monitoring" className="block text-primary hover:underline">8. Monitoring & Observability</a>
          </nav>
        </CardContent>
      </Card>

      {/* System Overview */}
      <section id="overview">
        <h2 className="text-3xl font-bold mb-6">1. System Overview</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg mb-4">
              The Distributed Task Scheduling Platform is a fault-tolerant, serverless system designed to handle time-sensitive financial workflows at scale. 
              Built on AWS Lambda and DynamoDB, it processes 300k+ events daily with 99.9% uptime.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Core Capabilities</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Multi-tenant architecture with tenant isolation</li>
                  <li>• Hexagonal architecture for clean separation</li>
                  <li>• Event-driven processing with AWS Lambda</li>
                  <li>• Comprehensive audit trails for compliance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Metrics</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 300k+ events processed daily</li>
                  <li>• 99.9% system uptime</li>
                  <li>• 60% reduction in operational overhead</li>
                  <li>• 10+ tenants supported</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Architecture */}
      <section id="architecture">
        <h2 className="text-3xl font-bold mb-6">2. Architecture Design</h2>
        <ZoomableImage
          src={getProjectSvg(project.slug)}
          alt="Distributed Task Scheduling Platform Architecture"
          width={1200}
          height={700}
          className="rounded-lg shadow-2xl w-full h-auto object-contain mx-auto border mb-6"
        />
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">API Gateway Layer</h4>
                <p className="text-sm text-muted-foreground">
                  RESTful API endpoints for tenant management, notification scheduling, and audit trail access.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Processing Layer</h4>
                <p className="text-sm text-muted-foreground">
                  AWS Lambda functions handling scheduling, execution, and retry logic with SQS queues.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Storage Layer</h4>
                <p className="text-sm text-muted-foreground">
                  DynamoDB tables for notifications, tenants, and audit data with streams for real-time processing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Impact & Contributions */}
      <section id="impact">
        <h2 className="text-3xl font-bold mb-6">3. Impact & Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><TrendingUp className="text-primary"/>Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {project.impact.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/>Key Contributions</CardTitle>
            </CardHeader>
            <CardContent>
               <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {project.keyContributions.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Summary */}
      <section id="summary">
        <h2 className="text-3xl font-bold mb-6">4. Technical Summary</h2>
        <Card>
           <CardHeader>
              <CardTitle>Implementation Details</CardTitle>
            </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Technology Stack */}
      <section id="technology">
        <h2 className="text-3xl font-bold mb-6">5. Technology Stack</h2>
        <Card>
          <CardHeader>
            <CardTitle>Technologies & Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
              {project.frameworks && project.frameworks.length > 0 && (
                <div>
                  <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Cpu />Frameworks:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.frameworks.map((fw) => <Badge key={fw}>{fw}</Badge>)}
                  </div>
                </div>
              )}
              {project.primaryProtocols && project.primaryProtocols.length > 0 && (
                <div>
                  <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Network />Primary Protocols:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.primaryProtocols.map((protocol) => <Badge key={protocol}>{protocol}</Badge>)}
                  </div>
                </div>
              )}
              {project.databases && project.databases.length > 0 && (
                <div>
                  <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Database />Databases:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.databases.map((db) => <Badge key={db}>{db}</Badge>)}
                  </div>
                </div>
              )}
              {project.pubSub && project.pubSub.length > 0 && (
                <div>
                  <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Network />PubSub:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.pubSub.map((ps) => <Badge key={ps}>{ps}</Badge>)}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* API Design */}
      <section id="api-design">
        <h2 className="text-3xl font-bold mb-6">6. API Design</h2>
        <div className="space-y-8">
          {/* API Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="text-primary" />
                API Architecture Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The Task Scheduling Platform exposes a comprehensive REST API built with OpenAPI 3.0 specification,
                providing endpoints for tenant management, notification scheduling, and audit tracking.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">API Design Principles</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• RESTful design with standard HTTP methods</li>
                    <li>• Consistent error handling and status codes</li>
                    <li>• Tenant-aware routing with header-based isolation</li>
                    <li>• Comprehensive request/response validation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Security & Authentication</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Header-based tenant identification (x-tenant)</li>
                    <li>• Request ID tracking for traceability</li>
                    <li>• Input validation with JSON schemas</li>
                    <li>• Audit logging for all operations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tenant Management APIs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="text-primary" />
                Tenant Management APIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">POST /v1/scheduler/tenant - Tenant Onboarding</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">Creates a new tenant with custom storage and consumer configurations.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-1">Request Body:</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• tenantLabel (string): Human-readable tenant name</li>
                          <li>• taskStorageConfiguration: DynamoDB or PostgreSQL setup</li>
                          <li>• internalConsumerConfiguration: SQS or Kafka integration</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Response:</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• tenantId: Unique identifier</li>
                          <li>• tenantUrn: Resource name</li>
                          <li>• Configuration details</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">GET /v1/scheduler/tenant - Retrieve Tenant</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">Fetches tenant configuration and current status.</p>
                    <p className="text-xs text-muted-foreground">Returns complete tenant object with storage and consumer configurations.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">GET /v1/scheduler/tenants - List All Tenants</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">Administrative endpoint to retrieve all registered tenants.</p>
                    <p className="text-xs text-muted-foreground">Returns array of tenant objects for system monitoring and management.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification APIs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="text-primary" />
                Notification Scheduling APIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">POST /v1/scheduler/notification - Schedule Notification</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">Schedules a new notification for future execution.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-1">Key Parameters:</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• requestId: Unique notification identifier</li>
                          <li>• executionTime: ISO 8601 timestamp</li>
                          <li>• destination: SQS URL for delivery</li>
                          <li>• payload: Notification content</li>
                          <li>• notificationType: ONE_TIME (CRON planned)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Use Cases:</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Financial workflow triggers</li>
                          <li>• Payment reminders</li>
                          <li>• Compliance notifications</li>
                          <li>• System maintenance alerts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">GET /v1/scheduler/notification/&#123;request-id&#125; - Get Notification</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">Retrieves notification details and current status.</p>
                    <p className="text-xs text-muted-foreground">
                      Returns notification object with status: ACTIVE, IN_ACTIVE, SEND_SUCCESSFUL, or SEND_FAILED.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">PATCH /v1/scheduler/notification/&#123;request-id&#125; - Update Notification</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">Modifies existing notification before execution.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-1">Updatable Fields:</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• label: Display name</li>
                          <li>• destination: Target SQS URL</li>
                          <li>• executionTime: Reschedule timing</li>
                          <li>• payload: Notification content</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Business Logic:</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Validates execution time is future</li>
                          <li>• Maintains audit trail of changes</li>
                          <li>• Preserves original request ID</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">DELETE /v1/scheduler/notification/&#123;request-id&#125; - Cancel Notification</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">Cancels scheduled notification before execution.</p>
                    <p className="text-xs text-muted-foreground">
                      Soft deletion with audit logging - notification remains in database for compliance.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">GET /v1/scheduler/notifications - List Notifications</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">Retrieves notifications for a tenant on specific execution date.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-1">Query Parameters:</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• executionDate (required): yyyy-MM-dd format</li>
                          <li>• notification-status (optional): Filter by status</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Response:</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Array of notification objects</li>
                          <li>• Filtered by tenant and date</li>
                          <li>• Includes execution status</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audit APIs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="text-primary" />
                Audit & Tracing APIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-semibold mb-2">GET /v1/scheduler/notification/&#123;request-id&#125;/audit-trace</h4>
                <div className="bg-muted p-4 rounded-md">
                  <p className="text-sm mb-2">Retrieves complete audit trail for notification lifecycle.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-1">Audit Actions Tracked:</h5>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• CREATION: Initial notification scheduling</li>
                        <li>• PATCH: Notification modifications</li>
                        <li>• PATCH_STATUS: Status transitions</li>
                        <li>• LONG_TERM_SCHEDULER_EVICTION: System cleanup</li>
                        <li>• NOTIFICATION_DISPATCH: Actual execution</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Audit Record Fields:</h5>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• id: Unique audit record identifier</li>
                        <li>• createdAt: Timestamp (ISO 8601)</li>
                        <li>• action: Type of operation performed</li>
                        <li>• status: SUCCESSFUL, FAILED, IGNORED</li>
                        <li>• payload: Action-specific data</li>
                        <li>• message: Human-readable description</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Models */}
      <section id="data-models">
        <h2 className="text-3xl font-bold mb-6">7. Data Models & Configuration</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Multi-Tenant Configuration Models</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Storage Configuration</h4>
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="mb-2"><strong>DynamoDB Configuration:</strong></p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• databaseType: "DYNAMO"</li>
                      <li>• tableName: Tenant-specific table</li>
                      <li>• Automatic scaling enabled</li>
                    </ul>
                    <p className="mt-3 mb-2"><strong>PostgreSQL Configuration:</strong></p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• databaseType: "POSTGRES"</li>
                      <li>• tableName: Custom schema</li>
                      <li>• Connection pooling</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Consumer Configuration</h4>
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="mb-2"><strong>SQS Consumer:</strong></p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• consumerType: "SQS"</li>
                      <li>• sqsUrl: Target queue URL</li>
                      <li>• Dead letter queue support</li>
                    </ul>
                    <p className="mt-3 mb-2"><strong>Kafka Consumer:</strong></p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• consumerType: "KAFKA"</li>
                      <li>• kafkaTopic: Target topic</li>
                      <li>• Header configuration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification State Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Notification Status Lifecycle</h4>
                  <div className="bg-muted p-3 rounded text-xs">
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <strong>ACTIVE:</strong> Scheduled and awaiting execution</li>
                      <li>• <strong>IN_ACTIVE:</strong> Temporarily disabled or paused</li>
                      <li>• <strong>SEND_SUCCESSFUL:</strong> Successfully delivered</li>
                      <li>• <strong>SEND_FAILED:</strong> Delivery failed, retry eligible</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Error Handling & Recovery</h4>
                  <div className="bg-muted p-3 rounded text-xs">
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Exponential backoff retry strategy</li>
                      <li>• Maximum retry attempts configurable</li>
                      <li>• Dead letter queue for failed notifications</li>
                      <li>• Automatic error classification and routing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Monitoring */}
      <section id="monitoring">
        <h2 className="text-3xl font-bold mb-6">8. Monitoring & Observability</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>CloudWatch Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Custom Metrics</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Notification creation rate</li>
                    <li>• Execution success/failure rates</li>
                    <li>• Queue depth monitoring</li>
                    <li>• Tenant-specific usage patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Alerting Strategy</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• High failure rate alerts</li>
                    <li>• Queue backlog warnings</li>
                    <li>• Lambda timeout monitoring</li>
                    <li>• DynamoDB throttling alerts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distributed Tracing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">X-Ray Tracing</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• End-to-end request tracing</li>
                    <li>• Lambda cold start monitoring</li>
                    <li>• DynamoDB operation timing</li>
                    <li>• Cross-service dependency mapping</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Performance Insights</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• P99 latency tracking</li>
                    <li>• Resource utilization analysis</li>
                    <li>• Cost optimization recommendations</li>
                    <li>• Bottleneck identification</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );

  // Use the refactored TickerCaseStudy component
  const TickerCaseStudyComponent = () => (
    <TickerCaseStudy project={project} getProjectSvg={getProjectSvg} />
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header navItems={navItems} />
      <main className="flex-grow pt-16">
        <Section id="project-detail" className="pt-12 md:pt-16">
          <div className="mb-8">
            <Link href="/#projects" className="inline-flex items-center text-sm text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
          </div>
          
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{project.shortDescription}</p>
          </header>

          {isDistributedTaskScheduler ? (
            <DynaqCaseStudy />
          ) : isTickerRealTime ? (
            <TickerCaseStudyComponent />
          ) : (
            <div className="space-y-12">
              <div className="mb-12">
                <ZoomableImage
                  src={getProjectSvg(project.slug)}
                  alt={`${project.title} System Design`}
                  width={1200}
                  height={700}
                  className="rounded-lg shadow-2xl w-full h-auto object-contain mx-auto border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><TrendingUp className="text-primary"/>Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.impact.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/>Key Contributions</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.keyContributions.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mb-12">
                 <CardHeader>
                    <CardTitle>Summary</CardTitle>
                  </CardHeader>
                <CardContent>
                  <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  {hasCategorizedTech ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
                      {project.frameworks && project.frameworks.length > 0 && (
                        <div>
                          <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Cpu />Frameworks:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.frameworks.map((fw) => <Badge key={fw}>{fw}</Badge>)}
                          </div>
                        </div>
                      )}
                      {project.primaryProtocols && project.primaryProtocols.length > 0 && (
                        <div>
                          <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Network />Primary Protocols:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.primaryProtocols.map((protocol) => <Badge key={protocol}>{protocol}</Badge>)}
                          </div>
                        </div>
                      )}
                      {project.databases && project.databases.length > 0 && (
                        <div>
                          <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Database />Databases:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.databases.map((db) => <Badge key={db}>{db}</Badge>)}
                          </div>
                        </div>
                      )}
                      {project.pubSub && project.pubSub.length > 0 && (
                        <div>
                          <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Network />PubSub:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.pubSub.map((ps) => <Badge key={ps}>{ps}</Badge>)}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            </div>
          )}

        </Section>
      </main>
      <Footer />
    </div>
  );
}
