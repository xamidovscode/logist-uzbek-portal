import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { MembersSection } from '@/components/sections/members';
import { DocumentsSection } from '@/components/sections/documents';
import { NewsSection } from '@/components/sections/news';
import { ContactCTASection } from '@/components/sections/contact-cta';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <MembersSection />
        <DocumentsSection />
        <NewsSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
