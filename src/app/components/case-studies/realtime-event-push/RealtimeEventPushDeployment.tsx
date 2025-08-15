import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Database, Globe, Settings } from 'lucide-react';

export default function RealtimeEventPushDeployment() {
  return (
    <section id="deployment-strategy">
      <h2 className="text-3xl font-bold mb-6">8. Deployment Strategy</h2>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Globe className="text-blue-600 dark:text-blue-400" size={24} />
            Infrastructure Topology
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Load Balancer Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• HAProxy/NGINX for connection distribution</li>
                  <li>• Health check configuration for DCM instances</li>
                  <li>• SSL termination and certificate management</li>
                  <li>• Geographic routing for latency optimization</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Application Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• 3-node NATS cluster for high availability</li>
                  <li>• Auto-scaling Kubernetes pods for workers</li>
                  <li>• Service mesh for inter-service communication</li>
                  <li>• Rolling deployment with zero downtime</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Data Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• PostgreSQL cluster with read replicas</li>
                  <li>• Redis cluster with sentinel configuration</li>
                  <li>• Automated backup and disaster recovery</li>
                  <li>• Data encryption at rest and in transit</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Monitoring Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• Prometheus/Grafana stack for observability</li>
                  <li>• ELK stack for centralized logging</li>
                  <li>• Distributed tracing with Jaeger</li>
                  <li>• Alert manager for incident notifications</li>
                </ul>
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
                  <li>• Blue-green deployment for zero downtime</li>
                  <li>• Canary releases for gradual rollout</li>
                  <li>• Feature flags for controlled feature activation</li>
                  <li>• Automated rollback on health check failures</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Monitoring & Alerting</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Real-time dashboard for system health</li>
                  <li>• SLA-based alerting (latency, availability)</li>
                  <li>• Capacity planning and scaling alerts</li>
                  <li>• Security incident detection and response</li>
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
                <h4 className="font-semibold mb-2">Cost Optimization</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Reserved instances for predictable workloads</li>
                  <li>• Spot instances for batch processing</li>
                  <li>• Auto-scaling based on demand patterns</li>
                  <li>• Regular cost analysis and optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

    </section>
  );
}