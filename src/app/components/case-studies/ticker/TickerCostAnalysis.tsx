import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, DollarSign, BarChart3, Calculator } from 'lucide-react';

export default function TickerCostAnalysis() {
  return (
    <section id="cost-analysis">
      <h2 className="text-3xl font-bold mb-6">5. Cost Analysis & Comparison</h2>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Calculator className="text-blue-600 dark:text-blue-400" size={24} />
            Usage Metrics (400K DAU Realistic Load)
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30K</div>
              <div className="text-sm text-muted-foreground">Peak Concurrent Users</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">510M</div>
              <div className="text-sm text-muted-foreground">Messages/Month</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">180M</div>
              <div className="text-sm text-muted-foreground">Connection Minutes/Month</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1TB</div>
              <div className="text-sm text-muted-foreground">Data Transfer/Month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <DollarSign className="text-green-600 dark:text-green-400" size={24} />
            Cost Comparison Table
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 dark:bg-gray-900">
                  <th className="text-left p-4 font-semibold">Solution</th>
                  <th className="text-right p-4 font-semibold">Monthly Cost</th>
                  <th className="text-right p-4 font-semibold">Annual Cost</th>
                  <th className="text-center p-4 font-semibold">vs NATS</th>
                  <th className="text-left p-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50 dark:bg-green-950">
                  <td className="p-4 font-medium">Self-hosted NATS</td>
                  <td className="p-4 text-right font-bold text-green-600">$340</td>
                  <td className="p-4 text-right font-bold text-green-600">$4,080</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Baseline</span>
                  </td>
                  <td className="p-4 text-sm">Cheapest; needs DevOps expertise</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">AWS API Gateway WebSocket</td>
                  <td className="p-4 text-right font-bold">$555</td>
                  <td className="p-4 text-right font-bold">$6,660</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">+63%</span>
                  </td>
                  <td className="p-4 text-sm">Fully managed; AWS-native</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Ably Real-time Platform</td>
                  <td className="p-4 text-right font-bold">$727-1,200+</td>
                  <td className="p-4 text-right font-bold">$8,724-14,400+</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">+114-253%</span>
                  </td>
                  <td className="p-4 text-sm">Feature-rich but expensive at scale</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Synadia NATS Cloud</td>
                  <td className="p-4 text-right font-bold">$2,000+</td>
                  <td className="p-4 text-right font-bold">$24,000+</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">+488%+</span>
                  </td>
                  <td className="p-4 text-sm">Enterprise managed NATS</td>
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
              <TrendingDown className="text-green-600 dark:text-green-400" size={24} />
              Self-hosted NATS Breakdown
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <span className="font-medium">NATS Core Cluster (3x m5.large)</span>
                <span className="font-bold">$210/month</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded">
                <span className="font-medium">Network Load Balancer</span>
                <span className="font-bold">$20/month</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950 rounded">
                <span className="font-medium">Data Transfer Out (1TB)</span>
                <span className="font-bold">$90/month</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <span className="font-medium">Monitoring/Logging/Backup</span>
                <span className="font-bold">$20/month</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 rounded border-t-2 border-green-500">
                <span className="font-bold text-lg">Total Self-hosted NATS</span>
                <span className="font-bold text-lg text-green-600 dark:text-green-400">$340/month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-purple-600 dark:text-purple-400" size={24} />
              Break-even Analysis
            </h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold text-green-700 dark:text-green-300">vs AWS API Gateway</h4>
                <p className="text-sm">Save $215/month (39% cheaper)</p>
                <p className="text-xs text-muted-foreground">Annual savings: $2,580</p>
              </div>
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">vs Ably Pro Plan</h4>
                <p className="text-sm">Save $387-860/month (53-72% cheaper)</p>
                <p className="text-xs text-muted-foreground">Annual savings: $4,644-10,320</p>
              </div>
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300">Cost Advantage Grows</h4>
                <p className="text-sm">Higher traffic makes self-hosted even more economical</p>
                <p className="text-xs text-muted-foreground">Linear vs exponential cost scaling</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6">Cost Sensitivity Analysis</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">2x Message Volume Impact (1.02B messages/month)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>AWS API Gateway</span>
                  <span className="text-red-600 dark:text-red-400 font-bold">+$510/month</span>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>Ably</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">+$0/month</span>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>Self-hosted NATS</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">+$30/month</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-green-600 dark:text-green-400">2x Connection Scale Impact (60k peak users)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>AWS API Gateway</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">+$45/month</span>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>Ably</span>
                  <span className="text-red-600 dark:text-red-400 font-bold">+$328/month</span>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>Self-hosted NATS</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">+$140/month</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">Final Recommendation: Self-hosted NATS</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Why NATS Wins</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>63% cheaper</strong> than AWS API Gateway</li>
                <li>• <strong>114% cheaper</strong> than Ably Pro Plan</li>
                <li>• <strong>Full control</strong> over infrastructure</li>
                <li>• <strong>No vendor lock-in</strong> or dependency risks</li>
                <li>• <strong>Scales economically</strong> with growth</li>
                <li>• <strong>Existing expertise</strong> in NATS operations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Cost Optimization Strategy</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Reserved Instances:</strong> 30-40% savings on predictable workloads</li>
                <li>• <strong>Spot Instances:</strong> 60-70% savings for non-critical workers</li>
                <li>• <strong>Regional optimization:</strong> ap-south-1 already cost-effective</li>
                <li>• <strong>Auto-scaling:</strong> Pay only for actual usage</li>
                <li>• <strong>Connection pooling:</strong> Optimize resource utilization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}