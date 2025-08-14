
import React from 'react';
import Section from '@/app/components/shared/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, TerminalSquare, Database, Cloud } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />,
    skills: ["Kotlin", "Java", "Python", "C", "C++"]
  },
  {
    category: "Frameworks",
    icon: <TerminalSquare className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />,
    skills: ["Spring", "Spring Boot", "Jersey", "Temporal", "Express.js"]
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />,
    skills: ["PostgreSQL", "Redis", "DynamoDB", "MongoDB", "MySQL", "ElasticSearch"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"]
  }
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {skillsData.map((skillCategory) => (
          <Card key={skillCategory.category} className="shadow-md hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-[1.03] group">
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              {React.cloneElement(skillCategory.icon, { className: `${skillCategory.icon.props.className} group-hover:text-accent transition-colors` })}
              <CardTitle className="text-lg">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="text-sm px-3 py-1 border-transparent bg-primary/70 text-primary-foreground hover:bg-accent/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
