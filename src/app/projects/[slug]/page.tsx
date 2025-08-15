import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projectsData } from '@/lib/projects-data'; 
import Section from '@/app/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, TrendingUp, Cpu, Database, Network } from 'lucide-react';
import Header from '@/app/components/shared/Header';
import Footer from '@/app/components/shared/Footer';
import ZoomableImage from '@/app/components/shared/ZoomableImage';
import RealtimeEventPushCaseStudy from '@/app/components/case-studies/realtime-event-push/RealtimeEventPushCaseStudy';
import DynaQCaseStudy from '@/app/components/case-studies/dynaq/DynaQCaseStudy';
import { navItems } from '@/app/page';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }
  
  const hasCategorizedTech = project.frameworks || project.primaryProtocols || project.databases || project.pubSub;
  const isDistributedTaskScheduler = project.slug === 'dynaq-distributed-event-scheduler';
  const isRealtimeEventPush = project.slug === 'realtime-event-push-platform';
  
  // SVG mapping for projects
  const getProjectSvg = (slug: string) => {
    const svgMap: Record<string, string> = {
      'dynaq-distributed-event-scheduler': '/projects/distributed-event-scheduler-system-design.svg',
      'realtime-event-push-platform': '/projects/realtime-event-push-platform-system-design.svg',
    };
    return svgMap[slug] || '/projects/realtime-event-push-platform-system-design.svg'; // fallback
  };

  // Use the refactored DynaQCaseStudy component
  const DynaQCaseStudyComponent = () => (
    <DynaQCaseStudy project={project} getProjectSvg={getProjectSvg} />
  );

  // Use the refactored RealtimeEventPushCaseStudy component
  const RealtimeEventPushCaseStudyComponent = () => (
    <RealtimeEventPushCaseStudy project={project} getProjectSvg={getProjectSvg} />
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header navItems={navItems} />
      <main className="flex-grow pt-16">
        <Section id="project-detail" className="pt-12 md:pt-16">
          <div className="mb-8">
            <Link href="/#projects" className="inline-flex items-center text-sm text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
          </div>
          
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{project.shortDescription}</p>
          </header>

          {isDistributedTaskScheduler ? (
            <DynaQCaseStudyComponent />
          ) : isRealtimeEventPush ? (
            <RealtimeEventPushCaseStudyComponent />
          ) : (
            <div className="space-y-12">
              <div className="mb-12">
                <ZoomableImage
                  src={getProjectSvg(project.slug)}
                  alt={`${project.title} System Design`}
                  width={1200}
                  height={700}
                  className="rounded-lg shadow-2xl w-full h-auto object-contain mx-auto border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><TrendingUp className="text-primary"/>Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.impact.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/>Key Contributions</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.keyContributions.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Implementation Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </pre>
                </CardContent>
              </Card>
              
              {hasCategorizedTech && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Technologies & Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
                      {project.frameworks && project.frameworks.length > 0 && (
                        <div>
                          <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Cpu />Frameworks:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.frameworks.map((fw) => <Badge key={fw}>{fw}</Badge>)}
                          </div>
                        </div>
                      )}
                      {project.primaryProtocols && project.primaryProtocols.length > 0 && (
                        <div>
                          <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Network />Primary Protocols:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.primaryProtocols.map((protocol) => <Badge key={protocol}>{protocol}</Badge>)}
                          </div>
                        </div>
                      )}
                      {project.databases && project.databases.length > 0 && (
                        <div>
                          <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Database />Databases:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.databases.map((db) => <Badge key={db}>{db}</Badge>)}
                          </div>
                        </div>
                      )}
                      {project.pubSub && project.pubSub.length > 0 && (
                        <div>
                          <h5 className="text-md font-semibold mb-2 flex items-center gap-2"><Network />PubSub:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.pubSub.map((ps) => <Badge key={ps}>{ps}</Badge>)}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {!hasCategorizedTech && project.technologies && project.technologies.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Technologies & Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

        </Section>
      </main>
      <Footer />
    </div>
  );
}