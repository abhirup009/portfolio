import { Card, CardContent } from '@/components/ui/card';
import { Network, Database, Cpu, Globe } from 'lucide-react';
import ZoomableImage from '@/app/components/shared/ZoomableImage';

interface DynaQArchitectureProps {
  project: any;
  getProjectSvg: (slug: string) => string;
  isHeroImage?: boolean;
}

export default function DynaQArchitecture({ project, getProjectSvg, isHeroImage = false }: DynaQArchitectureProps) {
  // If this is the hero image, just render the image without section wrapper
  if (isHeroImage) {
    return (
      <div className="flex justify-center">
        <ZoomableImage
          src={getProjectSvg(project.slug)}
          alt="DynaQ System Architecture"
          width={1400}
          height={900}
          className="w-full max-w-7xl"
        />
      </div>
    );
  }

  return (
    <section id="architecture">
      <h2 className="text-3xl font-bold mb-6">3. Architecture Design</h2>
      
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <ZoomableImage
            src={getProjectSvg(project.slug)}
            alt="DynaQ System Architecture"
            width={1200}
            height={800}
            className="w-full max-w-6xl"
          />
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">DynaQ Multi-Tenant Task Scheduling Architecture</h3>
          <p className="text-muted-foreground">
            Serverless dual-path scheduling system optimized for short-term and long-term task execution
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Network className="text-blue-600 dark:text-blue-400" size={24} />
              Design Goals
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>Multi-tenant Isolation:</strong> Complete resource isolation between tenants at storage and compute levels
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong>Cost Optimization:</strong> Minimize costs through serverless architecture and intelligent task routing
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <strong>Delivery Reliability:</strong> Guarantee at-least-once delivery with comprehensive retry mechanisms
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <strong>Operational Simplicity:</strong> Minimize operational overhead through managed services and automation
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <strong>Horizontal Scalability:</strong> Support linear scaling through partitioned storage and serverless compute
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Database className="text-green-600 dark:text-green-400" size={24} />
              System Boundaries
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Input Boundary</h4>
                <p className="text-sm text-muted-foreground">REST APIs for task creation, tenant management, and monitoring operations</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Processing Boundary</h4>
                <p className="text-sm text-muted-foreground">Internal scheduling engines, Lambda functions, and data processing pipelines</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold">Output Boundary</h4>
                <p className="text-sm text-muted-foreground">Destination delivery mechanisms (SQS, HTTP endpoints, Kafka topics)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Storage Boundary</h4>
                <p className="text-sm text-muted-foreground">DynamoDB for long-term tasks, SQS for short-term tasks, audit tables</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold">Management Boundary</h4>
                <p className="text-sm text-muted-foreground">Administrative APIs, monitoring dashboards, and operational tools</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Cpu className="text-purple-600 dark:text-purple-400" size={24} />
            Core Components
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Scheduler Core (API Gateway + Lambda)</h4>
              <ul className="space-y-2 text-sm">
                <li>• Processes task creation and routing decisions</li>
                <li>• Handles tenant authentication and authorization</li>
                <li>• Intelligent routing based on 48-hour threshold</li>
                <li>• Task management APIs (create, update, cancel, query)</li>
                <li>• Input validation and business rule enforcement</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Long-term Scheduler (DynamoDB)</h4>
              <ul className="space-y-2 text-sm">
                <li>• Stores tasks scheduled more than 48 hours ahead</li>
                <li>• Automatic TTL-based migration to short-term scheduler</li>
                <li>• Tenant-isolated storage with configurable retention</li>
                <li>• DynamoDB Streams trigger task migration</li>
                <li>• Supports task updates and cancellations</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Short-term Scheduler (SQS)</h4>
              <ul className="space-y-2 text-sm">
                <li>• Handles tasks scheduled within 48 hours</li>
                <li>• Uses SQS visibility timeout for precise timing</li>
                <li>• High-throughput processing with minimal latency</li>
                <li>• Configurable retry policies with exponential backoff</li>
                <li>• Dead letter queue management for failed tasks</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Execution Engine (Lambda)</h4>
              <ul className="space-y-2 text-sm">
                <li>• Polls SQS queues for ready-to-execute tasks</li>
                <li>• Multi-destination delivery (SQS, HTTP, Kafka)</li>
                <li>• Retry logic with failure tracking</li>
                <li>• Real-time metrics and status reporting</li>
                <li>• Audit trail integration for compliance</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Globe className="text-red-600 dark:text-red-400" size={24} />
            Data Flow & Processing Pipeline
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <strong>Task Submission:</strong> Tenant applications submit task scheduling requests via REST APIs with authentication
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <strong>Intelligent Routing:</strong> Scheduler Core analyzes execution time and routes to appropriate scheduler (48h threshold)
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <strong>Storage & Migration:</strong> Long-term tasks stored in DynamoDB with TTL; automatic migration via DDB Streams
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <strong>Execution Processing:</strong> Lambda functions poll SQS queues and execute tasks at scheduled time
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <strong>Delivery & Audit:</strong> Tasks delivered to configured destinations with comprehensive audit trail updates
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}