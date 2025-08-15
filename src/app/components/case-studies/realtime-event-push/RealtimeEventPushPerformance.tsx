import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Zap, Target, Activity } from 'lucide-react';

export default function RealtimeEventPushPerformance() {
  return (
    <section id="performance-metrics">
      <h2 className="text-3xl font-bold mb-6">6. Performance & Scale</h2>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Target className="text-blue-600 dark:text-blue-400" size={24} />
            Performance Targets & Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">&lt;300ms</div>
              <div className="text-sm text-muted-foreground">P95 End-to-End Latency</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Target Met</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">50K/sec</div>
              <div className="text-sm text-muted-foreground">Notification Delivery</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Target Achieved</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">99.9%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">✓ SLA Met</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10K/sec</div>
              <div className="text-sm text-muted-foreground">Message Ingestion</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Capacity Available</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="text-yellow-600 dark:text-yellow-400" size={24} />
              Latency Breakdown
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <span className="font-medium">Connection Establishment</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">&lt;100ms P95</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded">
                <span className="font-medium">Health Ping Response</span>
                <span className="font-bold text-green-600 dark:text-green-400">&lt;50ms P95</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950 rounded">
                <span className="font-medium">Database Write Operations</span>
                <span className="font-bold text-orange-600 dark:text-orange-400">&lt;10ms P95</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <span className="font-medium">NATS Message Routing</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">&lt;1ms Average</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
              Throughput Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <span className="font-medium">Kafka Message Consumption</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">10K msg/sec</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded">
                <span className="font-medium">WebSocket Delivery Rate</span>
                <span className="font-bold text-green-600 dark:text-green-400">50K msg/sec</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950 rounded">
                <span className="font-medium">Health Ping Processing</span>
                <span className="font-bold text-orange-600 dark:text-orange-400">1,667 pings/sec</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <span className="font-medium">Acknowledgment Processing</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">40K acks/sec</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Activity className="text-red-600 dark:text-red-400" size={24} />
            Scale & Growth Projections
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 dark:bg-gray-900">
                  <th className="text-left p-4 font-semibold">Metric</th>
                  <th className="text-center p-4 font-semibold">Current</th>
                  <th className="text-center p-4 font-semibold">1 Year</th>
                  <th className="text-center p-4 font-semibold">2 Year</th>
                  <th className="text-left p-4 font-semibold">Infrastructure Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Concurrent Connections</td>
                  <td className="p-4 text-center">50,000</td>
                  <td className="p-4 text-center text-yellow-600 dark:text-yellow-400 font-bold">100,000</td>
                  <td className="p-4 text-center text-red-600 dark:text-red-400 font-bold">150,000</td>
                  <td className="p-4 text-sm">Scale DCM instances to 6-9 nodes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Message Volume/Month</td>
                  <td className="p-4 text-center">510M</td>
                  <td className="p-4 text-center text-yellow-600 dark:text-yellow-400 font-bold">1.02B</td>
                  <td className="p-4 text-center text-red-600 dark:text-red-400 font-bold">1.53B</td>
                  <td className="p-4 text-sm">Increase worker pool capacity</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Tenant Count</td>
                  <td className="p-4 text-center">1,000</td>
                  <td className="p-4 text-center text-yellow-600 dark:text-yellow-400 font-bold">3,000</td>
                  <td className="p-4 text-center text-red-600 dark:text-red-400 font-bold">10,000</td>
                  <td className="p-4 text-sm">Database sharding consideration</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Data Storage Growth</td>
                  <td className="p-4 text-center">5GB</td>
                  <td className="p-4 text-center text-yellow-600 dark:text-yellow-400 font-bold">25GB</td>
                  <td className="p-4 text-center text-red-600 dark:text-red-400 font-bold">50GB</td>
                  <td className="p-4 text-sm">Implement automated archival</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Load Testing Results</h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold text-green-700 dark:text-green-300">Peak Load Test</h4>
                <p className="text-sm">Successfully handled 75K concurrent connections</p>
                <p className="text-xs text-muted-foreground">150% of target capacity validated</p>
              </div>
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Burst Traffic</h4>
                <p className="text-sm">Handled 5x message spike with &lt;500ms latency</p>
                <p className="text-xs text-muted-foreground">Auto-scaling response time: 30 seconds</p>
              </div>
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300">Failure Recovery</h4>
                <p className="text-sm">Node failure recovered in &lt;10 seconds</p>
                <p className="text-xs text-muted-foreground">Zero message loss during failover</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Optimization Opportunities</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <span className="font-medium">Connection Pooling:</span>
                  <span className="text-sm text-muted-foreground ml-2">Reduce memory usage by 30%</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <span className="font-medium">Message Batching:</span>
                  <span className="text-sm text-muted-foreground ml-2">Improve throughput by 40%</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div>
                  <span className="font-medium">Compression:</span>
                  <span className="text-sm text-muted-foreground ml-2">Reduce bandwidth by 60%</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <span className="font-medium">Edge Deployment:</span>
                  <span className="text-sm text-muted-foreground ml-2">Reduce latency by 50%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}