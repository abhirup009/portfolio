
import Section from '@/app/components/shared/Section';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { GraduationCap, SchoolIcon, CalendarDays, Percent, Award } from 'lucide-react'; 

interface EducationEntry {
  institution: string;
  degree: string;
  field?: string; 
  duration: string;
  grade?: string;
  cgpa?: string;
  icon: React.ElementType;
}

const educationData: EducationEntry[] = [
  {
    institution: "National Institute of Technology Rourkela",
    degree: "Bachelor of Technology",
    field: "Electronics and Communications Engineering",
    duration: "2016 - 2020",
    cgpa: "9.0",
    icon: GraduationCap,
  },
  {
    institution: "St. Xavier's High School",
    degree: "Higher Secondary",
    field: "Science",
    duration: "2013 - 2015",
    grade: "94.6%",
    icon: SchoolIcon,
  },
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <Card key={index} className="shadow-md hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <edu.icon className="h-10 w-10 text-primary mt-1 group-hover:text-accent transition-colors" />
                <div>
                  <CardTitle className="text-xl font-semibold">{edu.institution}</CardTitle>
                  <CardDescription className="text-md text-muted-foreground mt-1">
                    {edu.degree}
                    {edu.field && <span className="block sm:inline">, {edu.field}</span>}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-16 space-y-2"> {/* Aligns content with title text */}
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="mr-2 h-4 w-4 text-primary/80 hover:text-primary transition-colors" />
                {edu.duration}
              </div>
              {edu.grade && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Percent className="mr-2 h-4 w-4 text-primary/80 hover:text-primary transition-colors" />
                  Grade: {edu.grade}
                </div>
              )}
              {edu.cgpa && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Award className="mr-2 h-4 w-4 text-primary/80 hover:text-primary transition-colors" />
                  CGPA: {edu.cgpa}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
