import { Card, CardContent } from '@/components/ui/card';
import { Users, Settings, Shield, Globe } from 'lucide-react';

export default function RealtimeEventPushActors() {
  return (
    <section id="actors-usage">
      <h2 className="text-3xl font-bold mb-6">2. Actors & Usage Patterns</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="text-blue-600 dark:text-blue-400" size={24} />
              Human Actors
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">End Users</h4>
                <p className="text-sm text-muted-foreground">Receive real-time notifications within mobile and web applications</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">System Administrators</h4>
                <p className="text-sm text-muted-foreground">Monitor system health, manage configurations, and handle operational tasks</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold">Operations Team</h4>
                <p className="text-sm text-muted-foreground">Handle incident response and system maintenance procedures</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Tenant Administrators</h4>
                <p className="text-sm text-muted-foreground">Manage tenant-specific configurations and user permissions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="text-green-600 dark:text-green-400" size={24} />
              System Actors
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Upstream Services</h4>
                <p className="text-sm text-muted-foreground">Generate notification events and publish to Kafka topics</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Client Applications</h4>
                <p className="text-sm text-muted-foreground">iOS, Android, and web applications maintaining persistent connections</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold">Authentication Service</h4>
                <p className="text-sm text-muted-foreground">Validates JWT tokens for secure connection establishment</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Load Balancers</h4>
                <p className="text-sm text-muted-foreground">Distribute traffic across DCM instances for optimal performance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Globe className="text-purple-600 dark:text-purple-400" size={24} />
            Usage Patterns & Scale Requirements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50K</div>
              <div className="text-sm text-muted-foreground">Peak Concurrent Users</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">10K/sec</div>
              <div className="text-sm text-muted-foreground">Message Ingestion Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1,000+</div>
              <div className="text-sm text-muted-foreground">Multi-tenant Support</div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="text-red-600 dark:text-red-400" size={16} />
                Notification Types
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>System Alerts:</strong> Maintenance notifications, service disruptions</li>
                <li>• <strong>Service Events:</strong> Order updates, payment confirmations, status changes</li>
                <li>• <strong>Promotional:</strong> Marketing messages with targeting capabilities</li>
                <li>• <strong>Priority Levels:</strong> HIGH, MEDIUM, LOW with smart routing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quality Requirements</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Latency:</strong> &lt;300ms P95 end-to-end delivery</li>
                <li>• <strong>Availability:</strong> 99.9% uptime with fault tolerance</li>
                <li>• <strong>Consistency:</strong> At-least-once delivery guarantee</li>
                <li>• <strong>Scale:</strong> 200% year-over-year growth projection</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}