import { Card, CardContent } from '@/components/ui/card';
import { Clock, TrendingUp } from 'lucide-react';

export default function DynaQOverview() {
  return (
    <section id="system-overview">
      <h2 className="text-3xl font-bold mb-6">1. System Overview</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg mb-6">
            <strong>DynaQ</strong> is a multi-tenant, distributed task scheduling platform designed to abstract away the complexities 
            of time-based task execution for applications within the Jupiter ecosystem. The system provides a reliable, scalable, 
            and event-driven alternative to traditional cron-job based scheduling solutions with support for both short-term and 
            long-term task scheduling optimizations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="text-blue-600 dark:text-blue-400" size={20} />
                Core Capabilities
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Multi-tenant Isolation:</strong> Complete resource isolation with configurable storage and consumer patterns</li>
                <li>• <strong>Dual Scheduling Architecture:</strong> Optimized for short-term (&lt;48h) and long-term (&gt;48h) tasks</li>
                <li>• <strong>Multiple Destinations:</strong> SQS, HTTP endpoints, and Kafka topics for flexible delivery</li>
                <li>• <strong>At-least-once Delivery:</strong> Guaranteed delivery with comprehensive retry mechanisms</li>
                <li>• <strong>Complete Audit Trail:</strong> Full task lifecycle tracking for compliance and debugging</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="text-green-600 dark:text-green-400" size={20} />
                Impact Metrics
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>300k+ tasks/day</strong> processed reliably across multiple tenants</li>
                <li>• <strong>99.9% uptime</strong> with fault-tolerant design and auto-recovery</li>
                <li>• <strong>60% reduction</strong> in operational overhead through automation</li>
                <li>• <strong>10+ tenants</strong> supported with complete isolation</li>
                <li>• <strong>Zero downtime</strong> incidents with self-healing mechanisms</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-6 rounded-xl">
            <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">System Boundaries & Scope</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold mb-2">In Scope:</h5>
                <ul className="space-y-1">
                  <li>• Multi-tenant task scheduling with resource isolation</li>
                  <li>• REST APIs for task management and monitoring</li>
                  <li>• Dual architecture for short/long-term optimization</li>
                  <li>• Multiple destination types (SQS, HTTP, Kafka)</li>
                  <li>• Complete audit trail and lifecycle tracking</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Out of Scope:</h5>
                <ul className="space-y-1">
                  <li>• Cron-style recurring tasks (future release)</li>
                  <li>• Real-time streaming data processing</li>
                  <li>• Complex workflow orchestration</li>
                  <li>• Direct database query scheduling</li>
                  <li>• File system or object storage triggers</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}