import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function RealtimeEventPushSecurity() {
  return (
    <section id="security-considerations">
      <h2 className="text-3xl font-bold mb-6">7. Security & PII Handling</h2>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Shield className="text-blue-600 dark:text-blue-400" size={24} />
            Security Architecture Overview
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 rounded">
                <h4 className="font-semibold flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <Lock size={16} />
                  Authentication Layer
                </h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• JWT-based authentication with configurable expiration</li>
                  <li>• Token validation on every connection establishment</li>
                  <li>• Multi-tenant isolation through JWT claims</li>
                  <li>• Automatic token refresh mechanisms</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950 rounded">
                <h4 className="font-semibold flex items-center gap-2 text-green-700 dark:text-green-300">
                  <Shield size={16} />
                  Transport Security
                </h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• TLS 1.3 for all client connections</li>
                  <li>• Certificate pinning for mobile applications</li>
                  <li>• HSTS headers for web clients</li>
                  <li>• Perfect Forward Secrecy (PFS) enabled</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950 rounded">
                <h4 className="font-semibold flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <Eye size={16} />
                  Data Protection
                </h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• AES-256 encryption for sensitive data at rest</li>
                  <li>• Field-level encryption for PII data</li>
                  <li>• Encrypted backup storage with key rotation</li>
                  <li>• Secure key management with HSM integration</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950 rounded">
                <h4 className="font-semibold flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <AlertTriangle size={16} />
                  Access Control
                </h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Role-Based Access Control (RBAC) implementation</li>
                  <li>• Tenant-based data isolation and permissions</li>
                  <li>• API rate limiting and DDoS protection</li>
                  <li>• Administrative access logging and monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lock className="text-green-600 dark:text-green-400" size={24} />
              PII Data Handling (Category 2)
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Sensitive Data Types</h4>
                <ul className="text-sm space-y-1">
                  <li>• User identifiers and session tokens</li>
                  <li>• Notification content with personal information</li>
                  <li>• Connection metadata and usage patterns</li>
                  <li>• Device identifiers and network information</li>
                </ul>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Protection Measures</h4>
                <ul className="text-sm space-y-1">
                  <li>• End-to-end encryption for sensitive payloads</li>
                  <li>• PII anonymization in logs and metrics</li>
                  <li>• Data masking for development environments</li>
                  <li>• Regular security audits and compliance checks</li>
                </ul>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Compliance & Retention</h4>
                <ul className="text-sm space-y-1">
                  <li>• GDPR-compliant data handling procedures</li>
                  <li>• 90-day retention with automated purging</li>
                  <li>• Right to erasure implementation</li>
                  <li>• Data portability and export capabilities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}