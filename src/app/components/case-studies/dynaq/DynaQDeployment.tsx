import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Database, Globe, Settings } from 'lucide-react';

export default function DynaQDeployment() {
  return (
    <section id="deployment-strategy">
      <h2 className="text-3xl font-bold mb-6">7. Deployment Strategy</h2>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Globe className="text-blue-600 dark:text-blue-400" size={24} />
            AWS Multi-AZ Deployment Architecture
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">API Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• API Gateway with multiple availability zones</li>
                  <li>• Lambda functions distributed across AZs</li>
                  <li>• Auto-scaling based on request volume</li>
                  <li>• Regional failover capabilities</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Compute Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• Serverless Lambda functions with reserved concurrency</li>
                  <li>• Event-driven processing with SQS and DDB Streams</li>
                  <li>• Automatic scaling based on queue depth</li>
                  <li>• Dead letter queues for failure handling</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Storage Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• DynamoDB with Global Tables for multi-region</li>
                  <li>• SQS with cross-AZ message replication</li>
                  <li>• Automated backup and point-in-time recovery</li>
                  <li>• Data encryption at rest and in transit</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Monitoring Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• CloudWatch for metrics and logging</li>
                  <li>• X-Ray for distributed tracing</li>
                  <li>• Custom dashboards for operational metrics</li>
                  <li>• Real-time alerting and notification</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Cpu className="text-green-600 dark:text-green-400" size={24} />
            Resource Requirements & Scaling
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400">Initial Requirements (100 tenants)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Lambda Memory Allocation</span>
                  <span className="font-bold">10GB total</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded">
                  <span className="font-medium">DynamoDB Capacity</span>
                  <span className="font-bold">1000 RCU/WCU per tenant</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950 rounded">
                  <span className="font-medium">SQS Throughput</span>
                  <span className="font-bold">1000 msgs/sec per tenant</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
                  <span className="font-medium">API Gateway Capacity</span>
                  <span className="font-bold">5000 requests/second</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-950 rounded">
                  <span className="font-medium">Storage Allocation</span>
                  <span className="font-bold">100GB initial</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600 dark:text-green-400">Scaling Strategy (1000 tenants)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Lambda Scaling</span>
                  <span className="font-bold">100GB total memory</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded">
                  <span className="font-medium">DynamoDB Auto-scaling</span>
                  <span className="font-bold">5000 RCU/WCU per tenant</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950 rounded">
                  <span className="font-medium">SQS Partitioning</span>
                  <span className="font-bold">Multiple queues per tenant</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
                  <span className="font-medium">API Gateway Scaling</span>
                  <span className="font-bold">50,000 requests/second</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-950 rounded">
                  <span className="font-medium">Storage Growth</span>
                  <span className="font-bold">10TB projected</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Settings className="text-orange-600 dark:text-orange-400" size={24} />
            Operational Excellence
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Deployment Strategy</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Infrastructure as Code using AWS CloudFormation/CDK</li>
                <li>• Blue-green deployment for Lambda functions</li>
                <li>• Canary releases for gradual feature rollout</li>
                <li>• Automated rollback on health check failures</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Monitoring & Alerting</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Real-time dashboards for system health metrics</li>
                <li>• SLA-based alerting for latency and availability</li>
                <li>• Tenant-specific monitoring and usage tracking</li>
                <li>• Automated capacity planning and scaling alerts</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Disaster Recovery</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Multi-AZ deployment for high availability</li>
                <li>• Automated backup with point-in-time recovery</li>
                <li>• Cross-region replication for DR scenarios</li>
                <li>• RTO: 4 hours, RPO: 1 hour targets</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Performance Optimization</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Lambda provisioned concurrency for critical functions</li>
                <li>• DynamoDB reserved capacity for predictable workloads</li>
                <li>• SQS batch processing for efficiency</li>
                <li>• API Gateway caching for read-heavy operations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Database className="text-purple-600 dark:text-purple-400" size={24} />
            Deployment Phases & Timeline
          </h3>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">1</div>
                <div className="flex-1 pb-8">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">Months 1-3: Core Platform Development</h4>
                  <p className="text-sm text-muted-foreground">Foundation setup with basic tenant onboarding and dual scheduling</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Tenant APIs</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Dual Scheduling</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Basic Monitoring</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">2</div>
                <div className="flex-1 pb-8">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">Months 4-6: Production Readiness</h4>
                  <p className="text-sm text-muted-foreground">Advanced features, Kafka support, and enhanced monitoring</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Task Updates</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Kafka Integration</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Audit System</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">3</div>
                <div className="flex-1 pb-8">
                  <h4 className="font-semibold text-orange-600 dark:text-orange-400">Months 7-9: Scale & Reliability</h4>
                  <p className="text-sm text-muted-foreground">Multi-region support, advanced retry logic, and operational tools</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">Multi-region</span>
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">Advanced Retry</span>
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">Load Testing</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">4</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400">Months 10-12: Enterprise Features</h4>
                  <p className="text-sm text-muted-foreground">Cron support, workflow integration, and cost optimization</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Cron Expressions</span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Workflow Integration</span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Cost Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}