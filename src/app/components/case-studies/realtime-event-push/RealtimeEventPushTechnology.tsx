import { Card, CardContent } from '@/components/ui/card';
import { Code, CheckCircle2, AlertCircle, Cpu } from 'lucide-react';

export default function RealtimeEventPushTechnology() {
  return (
    <section id="technology-decisions">
      <h2 className="text-3xl font-bold mb-6">4. Technology Decisions & Trade-offs</h2>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Code className="text-blue-600 dark:text-blue-400" size={24} />
            Technology Stack Evaluation
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Technology</th>
                  <th className="text-left p-3 font-semibold">Pros</th>
                  <th className="text-left p-3 font-semibold">Cons</th>
                  <th className="text-center p-3 font-semibold">Decision</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">NATS Core</td>
                  <td className="p-3 text-sm">
                    • High performance (M+ msg/sec)<br/>
                    • Built-in clustering<br/>
                    • Low latency (&lt;1ms)<br/>
                    • Simple deployment
                  </td>
                  <td className="p-3 text-sm">
                    • At-most-once delivery<br/>
                    • No persistence by default<br/>
                    • Limited ecosystem
                  </td>
                  <td className="p-3 text-center">
                    <CheckCircle2 className="text-green-500 mx-auto" size={20} />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Socket.IO</td>
                  <td className="p-3 text-sm">
                    • Real-time bidirectional<br/>
                    • Fallback mechanisms<br/>
                    • Rich ecosystem<br/>
                    • Browser compatibility
                  </td>
                  <td className="p-3 text-sm">
                    • No horizontal scaling<br/>
                    • Memory overhead<br/>
                    • Sticky sessions required<br/>
                    • Complex load balancing
                  </td>
                  <td className="p-3 text-center">
                    <AlertCircle className="text-red-500 mx-auto" size={20} />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">gRPC Streaming</td>
                  <td className="p-3 text-sm">
                    • HTTP/2 based<br/>
                    • Strong typing<br/>
                    • Load balancing<br/>
                    • Protobuf efficiency
                  </td>
                  <td className="p-3 text-sm">
                    • No native pub/sub<br/>
                    • Custom connection mgmt<br/>
                    • Higher protocol overhead<br/>
                    • Complex implementation
                  </td>
                  <td className="p-3 text-center">
                    <AlertCircle className="text-orange-500 mx-auto" size={20} />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">AWS IoT Core</td>
                  <td className="p-3 text-sm">
                    • Fully managed<br/>
                    • MQTT support<br/>
                    • Auto-scaling<br/>
                    • Security features
                  </td>
                  <td className="p-3 text-sm">
                    • Vendor lock-in<br/>
                    • High costs at scale<br/>
                    • Limited customization<br/>
                    • Regional constraints
                  </td>
                  <td className="p-3 text-center">
                    <AlertCircle className="text-red-500 mx-auto" size={20} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-600 dark:text-green-400" size={24} />
              Key Technology Decisions
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">NATS over RabbitMQ</h4>
                <p className="text-sm text-muted-foreground">
                  Better clustering with gossip protocol, lower resource usage, and simpler operational model
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">WebSocket over HTTP/2 Streaming</h4>
                <p className="text-sm text-muted-foreground">
                  Lower protocol overhead, better browser support, and simpler connection management
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold">Redis for Distributed State</h4>
                <p className="text-sm text-muted-foreground">
                  Enables stateless DCM design, provides persistence during restarts and failover
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Kafka for Event Processing</h4>
                <p className="text-sm text-muted-foreground">
                  Durable event processing, replay capabilities, and integration with existing systems
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Cpu className="text-purple-600 dark:text-purple-400" size={24} />
              Implementation Trade-offs
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Latency vs Durability</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Choice:</strong> NATS for routing, Kafka for persistence</p>
                  <p className="text-muted-foreground">Trade-off: Kafka provides better durability, NATS provides sub-ms latency</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Memory vs Network</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Choice:</strong> Stateless design with Redis state</p>
                  <p className="text-muted-foreground">Trade-off: Network latency for state calls vs horizontal scalability</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Complexity vs Performance</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Choice:</strong> Connection pooling and load balancing</p>
                  <p className="text-muted-foreground">Trade-off: Increased operational complexity for better resource utilization</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6">Protocol Comparison Matrix</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Protocol</th>
                  <th className="text-center p-3">Latency</th>
                  <th className="text-center p-3">Throughput</th>
                  <th className="text-center p-3">Scalability</th>
                  <th className="text-center p-3">Reliability</th>
                  <th className="text-center p-3">Complexity</th>
                  <th className="text-center p-3">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">NATS + WebSocket</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Excellent</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">High</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Excellent</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">Good</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">Medium</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Low</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Socket.IO</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">Good</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">Medium</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">Poor</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">Good</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Low</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">Medium</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">AWS API Gateway</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">Good</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">High</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Excellent</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Excellent</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Low</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">High</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}