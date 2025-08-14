
'use client';

import { useState } from 'react';
import Section from '@/app/components/shared/Section';
import ProjectCard from '@/app/components/shared/ProjectCard';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/projects-data';

const INITIAL_VISIBLE_PROJECTS = 3;

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const projectsToShowInitially = projectsData.slice(0, INITIAL_VISIBLE_PROJECTS);
  const projectsBeyondInitial = projectsData.slice(INITIAL_VISIBLE_PROJECTS);
  const fadedPreviewProject = projectsBeyondInitial.length > 0 ? projectsBeyondInitial[0] : null;
  const remainingProjectsAfterFaded = projectsBeyondInitial.slice(1);

  const handleShowLess = () => {
    setShowAll(false);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="projects" title="My Projects">
      <div className="flex flex-col gap-8">
        {projectsToShowInitially.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}

        {!showAll && fadedPreviewProject && (
          <div className="relative mt-4"> {/* Container for the faded card and button */}
            <div className="opacity-30 pointer-events-none">
              <ProjectCard {...fadedPreviewProject} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background via-background/70 to-transparent">
              <Button onClick={() => setShowAll(true)} size="lg" className="shadow-lg">
                Show More Projects
              </Button>
            </div>
          </div>
        )}

        {showAll && (
          <>
            {fadedPreviewProject && <ProjectCard key={fadedPreviewProject.title} {...fadedPreviewProject} />}
            {remainingProjectsAfterFaded.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </>
        )}
        
        {showAll && projectsData.length > INITIAL_VISIBLE_PROJECTS && (
          <div className="mt-8 text-center">
            <Button onClick={handleShowLess} variant="outline" size="lg">
              Show Less
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
