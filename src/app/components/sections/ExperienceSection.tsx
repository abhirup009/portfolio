
import Section from '@/app/components/shared/Section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Briefcase, CalendarDays, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const experienceData = [
  {
    title: "Software Development Engineer 3 (SDE III)",
    company: "Jupiter Money",
    duration: "Apr 2025 - Present",
    logoUrl: "/jupiter-logo-half.png",
    responsibilities: [
      "Led the design and development of the Jupiter Edge Platform (API Gateway & Service Mesh) using Go, gRPC, Kubernetes, and Istio, improving API discoverability, security, and traffic management.",
      "Architected and implemented a real-time fraud detection system leveraging Kafka, Flink, and Redis, reducing fraudulent transactions by 15%.",
      "Mentored and guided a team of 5 junior engineers, fostering a culture of best practices and high performance.",
      "Spearheaded initiatives for system performance optimization, reducing API latency by 20% across critical services."
    ],
  },
  {
    title: "Software Development Engineer 2 (SDE II)",
    company: "Jupiter Money",
    duration: "Apr 2022 - Apr 2025",
    logoUrl: "/jupiter-logo-half.png",
    responsibilities: [
      "Developed and maintained critical microservices for the core banking platform, including KYC, Onboarding, and an Omni-Channel Communication Platform (Email, SMS, WhatsApp).",
      "Contributed to the development of the Backend For Frontend (BFF) services for Jupiter’s mobile applications (Android/iOS) using Spring Boot and GraphQL.",
      "Actively participated in agile development processes, consistently delivering features and system improvements.",
      "Enhanced the KYC and Onboarding platform's workflow automation using Camunda BPM."
    ],
  },
  {
    title: "Software Development Engineer 1 (SDE I)",
    company: "Jupiter Money",
    duration: "Aug 2020 - Apr 2022",
    logoUrl: "/jupiter-logo-half.png",
    responsibilities: [
      "Contributed to the development of new features and resolved bugs for existing banking modules within the core platform.",
      "Gained foundational experience in enterprise-level software development practices at a fast-growing fintech company.",
      "Worked closely with senior engineers to learn and apply best coding standards and practices."
    ],
  },
];


export default function ExperienceSection() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative">
        {/* Vertical line for the timeline */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30 transform translate-x-[-50%]"></div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative md:pl-12 group"> {/* Added group class here */}
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-6 top-3 w-4 h-4 bg-primary rounded-full border-2 border-background transform -translate-x-1/2 transition-all duration-300 group-hover:bg-accent group-hover:scale-125"></div>

              <Card className="shadow-md hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                    <div className="flex items-start gap-3">
                      {exp.logoUrl && exp.company === "Jupiter Money" && (
                        <Image
                          src={exp.logoUrl}
                          alt={`${exp.company} logo`}
                          width={40}
                          height={40}
                          className="rounded-md mt-1 object-contain" 
                        />
                      )}
                       {!exp.logoUrl && exp.company !== "Jupiter Money" && ( 
                        <div className="h-10 w-10 bg-muted rounded-sm flex items-center justify-center mt-1">
                          <Briefcase className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                        <div className="flex items-center text-md text-primary font-medium mt-0.5">
                          <Briefcase className="mr-1.5 h-5 w-5 group-hover:text-accent transition-colors" />
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0 sm:ml-auto shrink-0">
                      <CalendarDays className="mr-1.5 h-4 w-4 hover:text-primary transition-colors" />
                      {exp.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-1">
                    {exp.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </CardContent>

                {/* Downward Arrow for mobile view (not shown for last item) */}
                {index < experienceData.length - 1 && (
                  <div className="md:hidden flex justify-center py-4">
                    <TrendingUp className="h-6 w-6 text-primary/70 transform rotate-90 hover:text-primary transition-colors" />
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
