import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye } from 'lucide-react';
import TickerOverview from './TickerOverview';
import TickerActors from './TickerActors';
import TickerArchitecture from './TickerArchitecture';
import TickerTechnology from './TickerTechnology';
import TickerCostAnalysis from './TickerCostAnalysis';
import TickerPerformance from './TickerPerformance';
import TickerSecurity from './TickerSecurity';
import TickerDeployment from './TickerDeployment';

interface TickerCaseStudyProps {
  project: any;
  getProjectSvg: (slug: string) => string;
}

export default function TickerCaseStudy({ project, getProjectSvg }: TickerCaseStudyProps) {
  return (
    <div className="space-y-12">
      {/* Hero Architecture Image - Above everything */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ticker Real-Time Push Infrastructure</h2>
          <p className="text-muted-foreground">
            High-level system architecture overview
          </p>
        </div>
        <TickerArchitecture project={project} getProjectSvg={getProjectSvg} isHeroImage={true} />
      </div>

      {/* Table of Contents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="text-primary" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <a href="#system-overview" className="block text-primary hover:underline">1. System Overview</a>
            <a href="#actors-usage" className="block text-primary hover:underline">2. Actors & Usage Patterns</a>
            <a href="#architecture" className="block text-primary hover:underline">3. Architecture Design</a>
            <a href="#technology-decisions" className="block text-primary hover:underline">4. Technology Decisions & Trade-offs</a>
            <a href="#cost-analysis" className="block text-primary hover:underline">5. Cost Analysis & Comparison</a>
            <a href="#performance-metrics" className="block text-primary hover:underline">6. Performance & Scale</a>
            <a href="#security-considerations" className="block text-primary hover:underline">7. Security & PII Handling</a>
            <a href="#deployment-strategy" className="block text-primary hover:underline">8. Deployment Strategy</a>
          </nav>
        </CardContent>
      </Card>

      <TickerOverview />
      <TickerActors />
      <TickerArchitecture project={project} getProjectSvg={getProjectSvg} />
      <TickerTechnology />
      <TickerCostAnalysis />
      <TickerPerformance />
      <TickerSecurity />
      <TickerDeployment />
    </div>
  );
}