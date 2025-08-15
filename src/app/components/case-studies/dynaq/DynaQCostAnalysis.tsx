import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp, BarChart } from 'lucide-react';

export default function DynaQCostAnalysis() {
  return (
    <section id="cost-analysis">
      <h2 className="text-3xl font-bold mb-6">5. Cost Analysis & Comparison</h2>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <DollarSign className="text-green-600 dark:text-green-400" size={24} />
            AWS Serverless Infrastructure Costs
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400">Current Scale (100 tenants, 100M tasks/month)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Lambda Execution</span>
                  <span className="font-bold">$500/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded">
                  <span className="font-medium">DynamoDB</span>
                  <span className="font-bold">$800/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950 rounded">
                  <span className="font-medium">SQS</span>
                  <span className="font-bold">$200/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
                  <span className="font-medium">API Gateway</span>
                  <span className="font-bold">$175/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-950 rounded">
                  <span className="font-medium">CloudWatch & Others</span>
                  <span className="font-bold">$150/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-100 dark:bg-green-900 rounded border-2 border-green-500">
                  <span className="font-bold">Total Current</span>
                  <span className="font-bold text-lg">$1,825/month</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600 dark:text-green-400">Future Scale (1000 tenants, 1B tasks/month)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Lambda Execution</span>
                  <span className="font-bold">$5,000/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded">
                  <span className="font-medium">DynamoDB</span>
                  <span className="font-bold">$6,400/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950 rounded">
                  <span className="font-medium">SQS</span>
                  <span className="font-bold">$1,600/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
                  <span className="font-medium">API Gateway</span>
                  <span className="font-bold">$1,750/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-950 rounded">
                  <span className="font-medium">CloudWatch & Others</span>
                  <span className="font-bold">$1,200/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-100 dark:bg-green-900 rounded border-2 border-green-500">
                  <span className="font-bold">Total Future</span>
                  <span className="font-bold text-lg">$15,950/month</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BarChart className="text-purple-600 dark:text-purple-400" size={24} />
            Alternative Solution Cost Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-gray-50 dark:bg-gray-900">
                  <th className="text-left p-3 font-semibold">Solution</th>
                  <th className="text-center p-3 font-semibold">Current Scale</th>
                  <th className="text-center p-3 font-semibold">Future Scale</th>
                  <th className="text-left p-3 font-semibold">Pros</th>
                  <th className="text-left p-3 font-semibold">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50 dark:bg-green-950">
                  <td className="p-3 font-medium">AWS Serverless (DynaQ)</td>
                  <td className="p-3 text-center font-bold">$1,825/month</td>
                  <td className="p-3 text-center font-bold">$15,950/month</td>
                  <td className="p-3">Zero ops, auto-scale, pay-per-use</td>
                  <td className="p-3">Vendor lock-in, cold starts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Self-hosted (EKS)</td>
                  <td className="p-3 text-center font-bold">$1,698/month</td>
                  <td className="p-3 text-center font-bold">$8,500/month</td>
                  <td className="p-3">Control, customization</td>
                  <td className="p-3">High ops overhead, scaling complexity</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">SaaS Solution (Temporal)</td>
                  <td className="p-3 text-center font-bold">$2,500/month</td>
                  <td className="p-3 text-center font-bold">$20,000+/month</td>
                  <td className="p-3">Feature-rich, supported</td>
                  <td className="p-3">Expensive, limited customization</td>
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
              <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
              Cost Optimization Strategies
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Immediate Optimizations</h4>
                <ul className="text-sm space-y-1">
                  <li>• Reserved DynamoDB capacity (40% savings)</li>
                  <li>• S3 lifecycle policies for audit data (70% storage savings)</li>
                  <li>• API response caching to reduce DynamoDB reads</li>
                  <li>• Lambda provisioned concurrency for critical functions</li>
                </ul>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Growth Strategy</h4>
                <ul className="text-sm space-y-1">
                  <li>• Tiered pricing model based on tenant usage</li>
                  <li>• Resource pooling while maintaining isolation</li>
                  <li>• Regional optimization for development environments</li>
                  <li>• Spot pricing for non-critical batch workloads</li>
                </ul>
              </div>
              
              <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Long-term Strategy</h4>
                <ul className="text-sm space-y-1">
                  <li>• Hybrid architecture evaluation at scale</li>
                  <li>• Multi-cloud for pricing competition</li>
                  <li>• Edge deployments to reduce transfer costs</li>
                  <li>• Regular technology refresh assessments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Break-even Analysis</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Cost Crossover Points</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Self-hosted vs Serverless:</strong> Break-even at ~500 tenants</li>
                  <li>• <strong>Critical threshold:</strong> $10,000/month</li>
                  <li>• <strong>Evaluation trigger:</strong> 300+ tenant scale</li>
                  <li>• <strong>Decision point:</strong> 500M tasks/month sustained load</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Cost Monitoring</h4>
                <ul className="text-sm space-y-2">
                  <li>• Real-time per-tenant cost allocation</li>
                  <li>• Budget alerts at 80% and 100% thresholds</li>
                  <li>• Monthly optimization reviews</li>
                  <li>• Tenant chargeback based on actual usage</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Value Drivers</h4>
                <ul className="text-sm space-y-2">
                  <li>• Zero infrastructure management overhead</li>
                  <li>• Automatic scaling without capacity planning</li>
                  <li>• Faster time-to-market for new features</li>
                  <li>• Reduced operational risk and compliance burden</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6">Final Cost Recommendation</h3>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <div className="text-center mb-4">
              <h4 className="text-2xl font-bold text-green-700 dark:text-green-300">Winner: AWS Serverless Architecture</h4>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">$1,825/month (Current Scale)</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3 text-green-700 dark:text-green-300">Key Advantages</h5>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Operational Excellence:</strong> Zero infrastructure management</li>
                  <li>• <strong>Cost Efficiency:</strong> Pay-per-use aligns with variable usage</li>
                  <li>• <strong>Scalability:</strong> Automatic scaling without planning</li>
                  <li>• <strong>Time to Market:</strong> Faster development and deployment</li>
                  <li>• <strong>Risk Mitigation:</strong> Managed services reduce operational risks</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Decision Factors</h5>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Lower Initial Investment:</strong> No upfront infrastructure costs</li>
                  <li>• <strong>Reduced Risk:</strong> AWS manages underlying infrastructure</li>
                  <li>• <strong>Development Velocity:</strong> Focus on business logic vs ops</li>
                  <li>• <strong>Compliance:</strong> AWS certifications reduce audit overhead</li>
                  <li>• <strong>Future Flexibility:</strong> Easy migration path if needed</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <p className="text-sm font-medium text-center">
                <strong>Re-evaluation Trigger:</strong> Consider hybrid/self-hosted options when reaching 500+ tenants 
                or $10,000+ monthly costs with sustained high-volume usage patterns.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}