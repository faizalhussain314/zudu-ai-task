import React from "react";
import { Header } from "@/components/layout/header";
import { HeroBanner } from "@/components/sections/hero-banner";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { PricingTable } from "@/components/sections/pricing-table";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturesGrid />
        <PricingTable />
        <FaqAccordion />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
