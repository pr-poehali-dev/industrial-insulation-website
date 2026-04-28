import SiteHeader from "./t1/SiteHeader";
import { HeroSection, AboutSection, CatalogSection, IndustriesSection, CertificatesSection, ProcessSection } from "./t1/SiteSections";
import { CtaSection, ContactsSection, SiteFooter } from "./t1/SiteConversions";

const Index = () => (
  <div className="min-h-screen bg-white text-gray-900">
    <SiteHeader />
    <HeroSection />
    <AboutSection />
    <CatalogSection />
    <IndustriesSection />
    <CertificatesSection />
    <ProcessSection />
    <CtaSection />
    <ContactsSection />
    <SiteFooter />
  </div>
);

export default Index;