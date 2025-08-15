import { Card, CardContent } from '@/components/ui/card';
import { Activity, TrendingUp } from 'lucide-react';

export default function RealtimeEventPushOverview() {
  return (
    <section id="system-overview">
      <h2 className="text-3xl font-bold mb-6">1. System Overview</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg mb-6">
            <strong>Realtime Event Push Platform</strong> is a high-performance, real-time backend-to-frontend push infrastructure designed to eliminate polling and deliver 
            instant notifications to users. Built with NATS and WebSockets, it processes events for 50K+ concurrent connections with sub-300ms latency.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Activity className="text-blue-600 dark:text-blue-400" size={20} />
                Core Capabilities
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Multi-tenant Architecture:</strong> Complete tenant isolation with custom delivery modes</li>
                <li>• <strong>Real-time Event Push:</strong> Persistent WebSocket connections for instant delivery</li>
                <li>• <strong>Smart Delivery Modes:</strong> BLIND, WITHOUT_ACK, WITH_ACK based on criticality</li>
                <li>• <strong>Network-aware Prioritization:</strong> Intelligent routing based on network conditions</li>
                <li>• <strong>Graceful Reconnection:</strong> Session recovery with message replay capabilities</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="text-green-600 dark:text-green-400" size={20} />
                Impact Metrics
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>90% reduction</strong> in UPI transaction polling</li>
                <li>• <strong>85% reduction</strong> in balance API polling</li>
                <li>• <strong>$15K-20K/month</strong> projected network cost savings</li>
                <li>• <strong>300ms p95 latency</strong> for real-time event delivery</li>
                <li>• <strong>99.9% uptime</strong> with fault-tolerant design</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}