import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export function HeroBanner() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-secondary"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animated-text">
            <span className="block">Elevate Your</span>
            <span className="block text-primary">Digital Presence</span>
            <span className="block">with AetherSite.</span>
          </h1>
          <p
            className="mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl animate-fadeInUp"
            style={{ animationDelay: "0.7s" }}
          >
            Experience seamless design, powerful features, and blazing-fast
            performance. AetherSite brings your vision to life with elegance and
            precision.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fadeInUp">
            <Button
              asChild
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href="#features">Discover Features</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 animate-fadeInUp">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Hero Banner Placeholder Image"
            width={1200}
            height={600}
            className="rounded-xl shadow-2xl object-cover mx-auto"
            data-ai-hint="modern abstract technology"
            priority
          />
        </div>
      </div>
    </section>
  );
}
