"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  animationDelay: string;
}

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is AetherSite?",
    answer:
      "AetherSite is a modern, elegant single-page website solution designed to provide a seamless user experience with high performance and beautiful design. It leverages Next.js for optimal speed and interactivity.",
    animationDelay: "0.1s",
  },
  {
    id: "faq-2",
    question: "How customizable is AetherSite?",
    answer:
      "AetherSite is built with flexibility in mind. While this demo showcases specific features, the underlying structure allows for extensive customization to fit your brand and requirements.",
    animationDelay: "0.2s",
  },
  {
    id: "faq-3",
    question: "Can I integrate this with a CMS like WordPress?",
    answer:
      "Yes! While this demo is a standalone Next.js application, it can be adapted to fetch content from a headless CMS like WordPress using WPGraphQL or the WordPress REST API.",
    animationDelay: "0.3s",
  },
  {
    id: "faq-4",
    question: "What technologies are used?",
    answer:
      "AetherSite is built using Next.js, React, TypeScript, and Tailwind CSS for styling. Interactive components are powered by React, and animations can be enhanced with libraries like GSAP or Framer Motion.",
    animationDelay: "0.4s",
  },
  {
    id: "faq-5",
    question: "Is AetherSite mobile-friendly?",
    answer:
      "Absolutely. AetherSite is designed to be fully responsive, ensuring a consistent and optimal experience across all devices, including desktops, tablets, and smartphones.",
    animationDelay: "0.5s",
  },
];

export function FaqAccordion() {
  return (
    <section id="faq" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fadeInDown">
            Frequently Asked Questions
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground md:text-xl animate-fadeInDown"
            style={{ animationDelay: "0.2s" }}
          >
            Find answers to common questions about AetherSite.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="animate-fadeInUp"
                style={{ animationDelay: item.animationDelay }}
              >
                <AccordionItem
                  value={item.id}
                  className="bg-card shadow-md rounded-lg"
                >
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
