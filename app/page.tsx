import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SystemsSection from '@/components/SystemsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationCertifications from '@/components/EducationCertifications';
import SkillsSection from '@/components/SkillsSection';
import TerminalCopilotSection from '@/components/TerminalCopilotSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SystemsSection />
      <ExperienceSection />
      <EducationCertifications />
      <SkillsSection />
      <TerminalCopilotSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
