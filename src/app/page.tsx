
import Header from '@/app/components/shared/Header';
import Footer from '@/app/components/shared/Footer';
import IntroSection from '@/app/components/sections/IntroSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import SkillsSection from '@/app/components/sections/SkillsSection';
import ExperienceSection from '@/app/components/sections/ExperienceSection';
import EducationSection from '@/app/components/sections/EducationSection';
import PublicationsSection from '@/app/components/sections/PublicationsSection';
import ContactSection from '@/app/components/sections/ContactSection';
import MobileFooterNav from '@/app/components/shared/MobileFooterNav';
import FloatingContactButton from '@/app/components/shared/FloatingContactButton';


interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  // "Home" is handled by the dedicated icon in the header
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header navItems={navItems} />
      
      <main className="flex-grow pt-16 pb-28 md:pb-0"> {/* Adjusted padding-bottom for mobile */}
        <IntroSection />
        <ProjectsSection />
        <ExperienceSection />
        <PublicationsSection />
        <SkillsSection className="bg-secondary/40"/>
        <EducationSection />
        <ContactSection className="bg-secondary/40"/>
      </main>
      <Footer />

      <MobileFooterNav />
      <FloatingContactButton />
    </div>
  );
}
