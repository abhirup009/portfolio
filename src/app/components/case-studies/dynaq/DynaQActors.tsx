import { Card, CardContent } from '@/components/ui/card';
import { Users, Server, Calendar, Workflow } from 'lucide-react';

export default function DynaQActors() {
  return (
    <section id="actors-usage">
      <h2 className="text-3xl font-bold mb-6">2. Actors & Usage Patterns</h2>
      
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="text-blue-600 dark:text-blue-400" size={24} />
              Human Actors
            </h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 rounded">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Application Developers</h4>
                <p className="text-sm text-muted-foreground">Create and integrate tenant applications with DynaQ scheduling APIs. Configure task destinations and manage scheduling workflows.</p>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950 rounded">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">System Administrators</h4>
                <p className="text-sm text-muted-foreground">Monitor system health, manage tenant configurations, and oversee platform operations and maintenance.</p>
              </div>
              
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950 rounded">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Operations Team</h4>
                <p className="text-sm text-muted-foreground">Handle incident response, capacity planning, performance optimization, and system maintenance activities.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950 rounded">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Business Stakeholders</h4>
                <p className="text-sm text-muted-foreground">Review usage patterns, analyze cost optimization opportunities, and drive business requirements.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Server className="text-green-600 dark:text-green-400" size={24} />
              System Actors
            </h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 rounded">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Tenant Applications</h4>
                <p className="text-sm text-muted-foreground">Jupiter ecosystem services that schedule and consume tasks through DynaQ APIs.</p>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950 rounded">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">AWS Lambda Functions</h4>
                <p className="text-sm text-muted-foreground">Automated processors for task migration, execution checking, and delivery mechanisms.</p>
              </div>
              
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950 rounded">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Storage Systems</h4>
                <p className="text-sm text-muted-foreground">DynamoDB for long-term tasks, SQS for short-term tasks, and DynamoDB Streams for event triggers.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950 rounded">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">External Systems</h4>
                <p className="text-sm text-muted-foreground">HTTP endpoints, Kafka topics, monitoring systems, and audit platforms for task delivery and observability.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Workflow className="text-purple-600 dark:text-purple-400" size={24} />
            Usage Patterns & Use Cases
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">High-Volume Transactional</h4>
                <ul className="text-sm space-y-1">
                  <li>• E-commerce order reminders and notifications</li>
                  <li>• Payment processing and settlement tasks</li>
                  <li>• Real-time fraud detection follow-ups</li>
                  <li>• Transaction status update broadcasts</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Administrative & Reporting</h4>
                <ul className="text-sm space-y-1">
                  <li>• Monthly and quarterly report generation</li>
                  <li>• Data archival and cleanup processes</li>
                  <li>• Regulatory compliance reporting</li>
                  <li>• System health check notifications</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Event-Driven Workflows</h4>
                <ul className="text-sm space-y-1">
                  <li>• User action follow-ups and reminders</li>
                  <li>• Workflow continuation after delays</li>
                  <li>• Marketing campaign trigger scheduling</li>
                  <li>• Customer engagement automation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Compliance & Regulatory</h4>
                <ul className="text-sm space-y-1">
                  <li>• Data retention policy enforcement</li>
                  <li>• Audit trail generation and reporting</li>
                  <li>• Regulatory deadline reminders</li>
                  <li>• Compliance validation scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="text-red-600 dark:text-red-400" size={24} />
            Scheduling Patterns & Characteristics
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <strong>Immediate Execution (0-1 hour):</strong> High-priority notifications, fraud alerts, and time-sensitive business events
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <strong>Short-term Scheduling (1-48 hours):</strong> Payment reminders, follow-up notifications, and workflow continuations
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <strong>Long-term Scheduling (48+ hours):</strong> Monthly reports, quarterly reviews, annual compliance tasks, and data archival
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <strong>Variable Load Patterns:</strong> Peak periods during month-end, quarter-end, and special business events requiring burst handling
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}