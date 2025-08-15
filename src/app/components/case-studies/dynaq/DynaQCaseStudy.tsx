import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import DynaQOverview from './DynaQOverview';
import DynaQActors from './DynaQActors';
import DynaQArchitecture from './DynaQArchitecture';
import DynaQTechnology from './DynaQTechnology';
import DynaQCostAnalysis from './DynaQCostAnalysis';
import DynaQSecurity from './DynaQSecurity';
import DynaQDeployment from './DynaQDeployment';

interface DynaQCaseStudyProps {
  project: any;
  getProjectSvg: (slug: string) => string;
}

export default function DynaQCaseStudy({ project, getProjectSvg }: DynaQCaseStudyProps) {
  return (
    <div className="space-y-12">
      {/* Hero Architecture Image - Above everything */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">DynaQ Distributed Task Scheduling Platform</h2>
          <p className="text-muted-foreground">
            Multi-tenant, serverless task scheduling architecture with dual-path optimization
          </p>
        </div>
        <DynaQArchitecture project={project} getProjectSvg={getProjectSvg} isHeroImage={true} />
      </div>

      {/* Table of Contents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="text-primary" />
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
            <a href="#security-considerations" className="block text-primary hover:underline">6. Security & Compliance</a>
            <a href="#deployment-strategy" className="block text-primary hover:underline">7. Deployment Strategy</a>
          </nav>
        </CardContent>
      </Card>

      <DynaQOverview />
      <DynaQActors />
      <DynaQArchitecture project={project} getProjectSvg={getProjectSvg} />
      <DynaQTechnology />
      <DynaQCostAnalysis />
      <DynaQSecurity />
      <DynaQDeployment />
    </div>
  );
}