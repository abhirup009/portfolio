import { Card, CardContent } from '@/components/ui/card';
import { Network, Database, Cpu, Globe } from 'lucide-react';
import ZoomableImage from '@/app/components/shared/ZoomableImage';

interface RealtimeEventPushPlatformArchitectureProps {
  project: any;
  getProjectSvg: (slug: string) => string;
  isHeroImage?: boolean;
}

export default function RealtimeEventPushArchitecture({ project, getProjectSvg, isHeroImage = false }: RealtimeEventPushPlatformArchitectureProps) {
  // If this is the hero image, just render the image without section wrapper
  if (isHeroImage) {
    return (
      <div className="flex justify-center">
        <ZoomableImage
          src={getProjectSvg(project.slug)}
          alt="Realtime Event Push Platform System Architecture"
          width={1400}
          height={900}
          className="w-full max-w-7xl"
        />
      </div>
    );
  }

  return (
    <section id="architecture">
      <h2 className="text-3xl font-bold mb-6">3. Architecture Design</h2>
      
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <ZoomableImage
            src={getProjectSvg(project.slug)}
            alt="Realtime Event Push Platform System Architecture"
            width={1200}
            height={800}
            className="w-full max-w-6xl"
          />
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">High-Level System Architecture</h3>
          <p className="text-muted-foreground">
            Distributed real-time messaging infrastructure with NATS-based connection management
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Network className="text-blue-600 dark:text-blue-400" size={24} />
              Design Goals
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>High Availability:</strong> System remains operational during node failures with 99.9% uptime
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong>Horizontal Scalability:</strong> Add capacity by scaling out DCM instances seamlessly
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <strong>Multi-tenancy:</strong> Complete isolation between tenant data and configurations
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <strong>Low Latency:</strong> Sub-300ms delivery for 95% of notifications
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <strong>Fault Tolerance:</strong> Graceful degradation and automatic recovery mechanisms
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Database className="text-green-600 dark:text-green-400" size={24} />
              System Boundaries
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Input Boundary</h4>
                <p className="text-sm text-muted-foreground">Kafka topics receiving notification events from upstream services</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Processing Boundary</h4>
                <p className="text-sm text-muted-foreground">Internal workers, connection managers, and databases</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold">Output Boundary</h4>
                <p className="text-sm text-muted-foreground">Client applications via persistent WebSocket/NATS connections</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Management Boundary</h4>
                <p className="text-sm text-muted-foreground">Retool interfaces for operational tasks and monitoring</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Cpu className="text-purple-600 dark:text-purple-400" size={24} />
            Core Components
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Distributed Connection Manager (DCM)</h4>
              <ul className="space-y-2 text-sm">
                <li>• Maintains persistent WebSocket connections</li>
                <li>• Routes notifications to appropriate clients</li>
                <li>• Handles JWT authentication and authorization</li>
                <li>• Tracks connection health with 30s ping intervals</li>
                <li>• Provides graceful shutdown with connection migration</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Priority-Based Notification Worker</h4>
              <ul className="space-y-2 text-sm">
                <li>• Consumes notifications from Kafka with priority ordering</li>
                <li>• Validates tenant permissions and configurations</li>
                <li>• Routes notifications to appropriate DCM instances</li>
                <li>• Implements exponential backoff retry logic</li>
                <li>• Tracks delivery metrics and status reporting</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">NATS Core Cluster</h4>
              <ul className="space-y-2 text-sm">
                <li>• High-performance message routing backbone</li>
                <li>• 3-node cluster for high availability</li>
                <li>• Gossip protocol for cluster membership</li>
                <li>• Sub-millisecond message routing latency</li>
                <li>• Built-in clustering and load balancing</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Storage Layer</h4>
              <ul className="space-y-2 text-sm">
                <li>• PostgreSQL for persistent notification storage</li>
                <li>• Redis cluster for distributed connection state</li>
                <li>• AES-256 encryption for sensitive data at rest</li>
                <li>• Automated backup and disaster recovery</li>
                <li>• 90-day retention with automated archival</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Globe className="text-red-600 dark:text-red-400" size={24} />
            Data Flow & Message Routing
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <strong>Event Ingestion:</strong> Upstream services publish notification events to Kafka topics with priority classification
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <strong>Worker Processing:</strong> Priority-based workers consume events, validate tenants, and check client online status
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <strong>DCM Routing:</strong> Workers route notifications to appropriate DCM instances via NATS subjects
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <strong>Client Delivery:</strong> DCM delivers notifications to clients via persistent WebSocket connections
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <strong>Acknowledgment:</strong> Clients acknowledge receipt, DCM updates delivery status and metrics
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}