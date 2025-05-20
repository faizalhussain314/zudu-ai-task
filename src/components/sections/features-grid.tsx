import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ZapIcon,
  LayoutGridIcon,
  BarChartIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  RocketIcon,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import React from "react";

interface Feature {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  animationDelay: string;
}

const features: Feature[] = [
  {
    icon: RocketIcon,
    title: "Blazing Fast",
    description:
      "Optimized for performance, ensuring your site loads in a flash.",
    animationDelay: "0.1s",
  },
  {
    icon: SmartphoneIcon,
    title: "Fully Responsive",
    description: "Looks great on all devices, from desktops to smartphones.",
    animationDelay: "0.2s",
  },
  {
    icon: LayoutGridIcon,
    title: "Modern Design",
    description: "Clean, elegant, and user-friendly interface that captivates.",
    animationDelay: "0.3s",
  },
  {
    icon: ZapIcon,
    title: "Interactive Elements",
    description: "Engage users with dynamic components and smooth animations.",
    animationDelay: "0.4s",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure & Reliable",
    description: "Built with best practices for security and dependability.",
    animationDelay: "0.5s",
  },
  {
    icon: BarChartIcon,
    title: "SEO Friendly",
    description: "Structured for search engines to improve visibility.",
    animationDelay: "0.6s",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fadeInDown">
            Core Features
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground md:text-xl animate-fadeInDown"
            style={{ animationDelay: "0.2s" }}
          >
            Everything you need to build an amazing online presence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: feature.animationDelay }}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
