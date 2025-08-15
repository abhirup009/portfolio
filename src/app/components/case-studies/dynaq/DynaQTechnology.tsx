import { Card, CardContent } from '@/components/ui/card';
import { Cog, Zap, Database, Shield } from 'lucide-react';

export default function DynaQTechnology() {
  return (
    <section id="technology-decisions">
      <h2 className="text-3xl font-bold mb-6">4. Technology Decisions & Trade-offs</h2>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Cog className="text-blue-600 dark:text-blue-400" size={24} />
            Core Technology Stack
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Compute Layer</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>AWS Lambda:</strong> Serverless execution for all processing</li>
                <li>• <strong>API Gateway:</strong> RESTful API management and routing</li>
                <li>• <strong>Go Runtime:</strong> High-performance, low-latency processing</li>
                <li>• <strong>Event-driven:</strong> DynamoDB Streams and SQS triggers</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Storage Layer</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>DynamoDB:</strong> Long-term task storage with TTL</li>
                <li>• <strong>SQS:</strong> Short-term task queuing with visibility timeout</li>
                <li>• <strong>DynamoDB Streams:</strong> Real-time change capture</li>
                <li>• <strong>CloudWatch:</strong> Metrics and logging</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Integration Layer</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>SQS Destinations:</strong> Internal queue delivery</li>
                <li>• <strong>HTTP Clients:</strong> External endpoint notifications</li>
                <li>• <strong>Kafka Producers:</strong> High-throughput messaging</li>
                <li>• <strong>SNS:</strong> Fan-out notifications</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="text-yellow-600 dark:text-yellow-400" size={24} />
              Key Architectural Decisions
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Serverless Architecture</h4>
                <p className="text-sm mb-2"><strong>Decision:</strong> AWS Lambda + API Gateway for all compute</p>
                <p className="text-sm"><strong>Rationale:</strong> Zero operational overhead, automatic scaling, pay-per-use cost model, and built-in high availability</p>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Dual Scheduling Architecture</h4>
                <p className="text-sm mb-2"><strong>Decision:</strong> DynamoDB for long-term, SQS for short-term tasks</p>
                <p className="text-sm"><strong>Rationale:</strong> DynamoDB TTL uncertainty requires 48-hour buffer; SQS visibility timeout perfect for short-term precision</p>
              </div>
              
              <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">At-least-once Delivery</h4>
                <p className="text-sm mb-2"><strong>Decision:</strong> Guarantee delivery over exactly-once semantics</p>
                <p className="text-sm"><strong>Rationale:</strong> Simpler implementation, better performance, tenant applications handle idempotency</p>
              </div>
              
              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">RESTful APIs</h4>
                <p className="text-sm mb-2"><strong>Decision:</strong> HTTP/REST over message-based protocols</p>
                <p className="text-sm"><strong>Rationale:</strong> Standard integration patterns, better tooling support, easier debugging and monitoring</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Database className="text-green-600 dark:text-green-400" size={24} />
              Storage Technology Comparisons
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 border rounded">
                <h4 className="font-semibold mb-2">DynamoDB vs RDS (Long-term Storage)</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Winner:</strong> DynamoDB</p>
                  <p><strong>Pros:</strong> TTL automation, serverless scaling, no operational overhead</p>
                  <p><strong>Cons:</strong> Limited query flexibility, eventual consistency</p>
                  <p><strong>Trade-off:</strong> Operational simplicity over query capabilities</p>
                </div>
              </div>
              
              <div className="p-3 border rounded">
                <h4 className="font-semibold mb-2">SQS vs Kafka (Short-term Storage)</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Winner:</strong> SQS</p>
                  <p><strong>Pros:</strong> Serverless operation, visibility timeout, managed service</p>
                  <p><strong>Cons:</strong> Limited throughput per queue, message size limits</p>
                  <p><strong>Trade-off:</strong> Operational simplicity over raw throughput</p>
                </div>
              </div>
              
              <div className="p-3 border rounded">
                <h4 className="font-semibold mb-2">Lambda vs Container (Compute)</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Winner:</strong> Lambda</p>
                  <p><strong>Pros:</strong> Zero infrastructure management, automatic scaling</p>
                  <p><strong>Cons:</strong> Cold start latency, 15-minute execution limit</p>
                  <p><strong>Trade-off:</strong> Operational simplicity over performance control</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Shield className="text-red-600 dark:text-red-400" size={24} />
            Alternative Solutions Analysis
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-gray-50 dark:bg-gray-900">
                  <th className="text-left p-3 font-semibold">Solution</th>
                  <th className="text-left p-3 font-semibold">Pros</th>
                  <th className="text-left p-3 font-semibold">Cons</th>
                  <th className="text-center p-3 font-semibold">Decision</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">AWS EventBridge</td>
                  <td className="p-3">Cron support, Lambda triggers</td>
                  <td className="p-3">No arbitrary timestamps, expensive for high frequency</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">✗ Rejected</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Celery + Redis</td>
                  <td className="p-3">Mature ecosystem, good retry mechanisms</td>
                  <td className="p-3">Complex infrastructure, operational overhead</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">✗ Rejected</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Quartz Scheduler</td>
                  <td className="p-3">Feature-rich, clustering support</td>
                  <td className="p-3">Infrastructure requirements, Java-specific</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">✗ Rejected</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Kubernetes CronJobs</td>
                  <td className="p-3">Container-based, horizontal scaling</td>
                  <td className="p-3">Cron-only, cluster management overhead</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">✗ Rejected</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">DynaQ (Custom)</td>
                  <td className="p-3">Exact requirements fit, AWS native, multi-tenant</td>
                  <td className="p-3">Custom development effort, maintenance responsibility</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">✓ Selected</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6">Technical Constraints & Limitations</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">AWS Service Constraints</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>DynamoDB TTL:</strong> Up to 48-hour delay requires dual architecture</li>
                <li>• <strong>SQS Message Limits:</strong> 256KB payload limit for task data</li>
                <li>• <strong>Lambda Timeout:</strong> 15-minute maximum execution time</li>
                <li>• <strong>API Gateway:</strong> 30-second timeout for synchronous responses</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400">Design Limitations</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Regional Deployment:</strong> Single-region initially, limited global latency</li>
                <li>• <strong>Cold Starts:</strong> Lambda cold start latency for infrequent functions</li>
                <li>• <strong>Eventual Consistency:</strong> DynamoDB eventual consistency for some operations</li>
                <li>• <strong>Payload Size:</strong> Large payloads may require external storage references</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}