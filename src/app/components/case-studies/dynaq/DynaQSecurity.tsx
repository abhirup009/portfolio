import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function DynaQSecurity() {
  return (
    <section id="security-considerations">
      <h2 className="text-3xl font-bold mb-6">6. Security & Compliance</h2>
      
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
                  Authentication & Authorization
                </h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• JWT-based authentication with tenant-specific claims</li>
                  <li>• API rate limiting per tenant (1000 requests/minute)</li>
                  <li>• Resource isolation preventing cross-tenant access</li>
                  <li>• Role-based access for administrative functions</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950 rounded">
                <h4 className="font-semibold flex items-center gap-2 text-green-700 dark:text-green-300">
                  <Shield size={16} />
                  Data Encryption
                </h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• TLS 1.3 for all API communications</li>
                  <li>• AES-256 encryption for DynamoDB tables</li>
                  <li>• Tenant-specific KMS keys for payload encryption</li>
                  <li>• Encrypted SQS queues with managed keys</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950 rounded">
                <h4 className="font-semibold flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <Eye size={16} />
                  Network Security
                </h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• VPC isolation for all Lambda functions</li>
                  <li>• API Gateway with WAF protection</li>
                  <li>• Private subnets for internal communications</li>
                  <li>• Security groups with least-privilege rules</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950 rounded">
                <h4 className="font-semibold flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <AlertTriangle size={16} />
                  Access Control
                </h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• IAM roles with least-privilege access</li>
                  <li>• Cross-account role assumptions for multi-tenancy</li>
                  <li>• API Gateway resource policies</li>
                  <li>• CloudTrail for all administrative actions</li>
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
              PII Data Handling (Category 3)
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Sensitive Data Types</h4>
                <ul className="text-sm space-y-1">
                  <li>• Task payloads with user identifiers</li>
                  <li>• Transaction data and payment information</li>
                  <li>• User behavioral patterns and preferences</li>
                  <li>• Business-critical scheduling metadata</li>
                </ul>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Protection Measures</h4>
                <ul className="text-sm space-y-1">
                  <li>• Field-level encryption for sensitive payload data</li>
                  <li>• PII anonymization in system logs and metrics</li>
                  <li>• Data masking for development environments</li>
                  <li>• Automated PII detection and classification</li>
                </ul>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Compliance & Retention</h4>
                <ul className="text-sm space-y-1">
                  <li>• Tenant-defined retention policies (default 1 year)</li>
                  <li>• Right to erasure implementation</li>
                  <li>• Data portability and export capabilities</li>
                  <li>• Regular compliance audits and reporting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />
              Threat Model & Mitigations
            </h3>
            <div className="space-y-4">
              <div className="p-3 border rounded">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Unauthorized Task Access</h4>
                <p className="text-sm text-muted-foreground mb-2">Risk: Cross-tenant data access or task manipulation</p>
                <div className="text-sm">
                  <strong>Mitigations:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>JWT token validation with tenant-specific claims</li>
                    <li>Resource-level access controls in DynamoDB</li>
                    <li>Tenant isolation at storage and compute levels</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-3 border rounded">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Data Breaches</h4>
                <p className="text-sm text-muted-foreground mb-2">Risk: Unauthorized access to task payloads and metadata</p>
                <div className="text-sm">
                  <strong>Mitigations:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>End-to-end encryption with tenant-specific keys</li>
                    <li>VPC isolation and private networking</li>
                    <li>Regular security assessments and penetration testing</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-3 border rounded">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">DoS Attacks</h4>
                <p className="text-sm text-muted-foreground mb-2">Risk: System overload and service disruption</p>
                <div className="text-sm">
                  <strong>Mitigations:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>API Gateway rate limiting and throttling</li>
                    <li>AWS WAF protection against common attacks</li>
                    <li>Lambda concurrency limits and auto-scaling</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6">Security Controls & Compliance Matrix</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-gray-50 dark:bg-gray-900">
                  <th className="text-left p-3 font-semibold">Control Category</th>
                  <th className="text-left p-3 font-semibold">Implementation</th>
                  <th className="text-center p-3 font-semibold">Status</th>
                  <th className="text-left p-3 font-semibold">Compliance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Identity & Access Management</td>
                  <td className="p-3">JWT authentication, RBAC, tenant isolation</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">✓ Implemented</span>
                  </td>
                  <td className="p-3">SOC 2, ISO 27001</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Data Encryption</td>
                  <td className="p-3">TLS 1.3, AES-256, tenant-specific KMS keys</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">✓ Implemented</span>
                  </td>
                  <td className="p-3">GDPR, HIPAA ready</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Network Security</td>
                  <td className="p-3">VPC isolation, WAF, security groups</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">✓ Implemented</span>
                  </td>
                  <td className="p-3">NIST Framework</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Audit & Monitoring</td>
                  <td className="p-3">CloudTrail, CloudWatch, audit tables</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">✓ Implemented</span>
                  </td>
                  <td className="p-3">SOC 2, PCI DSS</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Data Privacy</td>
                  <td className="p-3">Tenant retention policies, right to erasure</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">✓ Implemented</span>
                  </td>
                  <td className="p-3">GDPR, CCPA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6">Governance & Risk Management</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Continuous Monitoring</h4>
              <ul className="space-y-2 text-sm">
                <li>• Real-time security event correlation</li>
                <li>• Automated threat detection and response</li>
                <li>• API access pattern analysis</li>
                <li>• Anomaly detection for unusual task patterns</li>
                <li>• Failed authentication tracking</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Compliance Management</h4>
              <ul className="space-y-2 text-sm">
                <li>• Automated compliance reporting</li>
                <li>• Regular security assessment schedules</li>
                <li>• Data retention policy enforcement</li>
                <li>• Audit trail integrity verification</li>
                <li>• Regulatory requirement mapping</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Incident Response</h4>
              <ul className="space-y-2 text-sm">
                <li>• Automated incident detection playbooks</li>
                <li>• Security event escalation procedures</li>
                <li>• Forensic data collection capabilities</li>
                <li>• Business continuity and recovery plans</li>
                <li>• Post-incident analysis and improvement</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}