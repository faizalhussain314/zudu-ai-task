"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CheckIcon } from "lucide-react";
import { fetchPricingPlans } from "@/services/pricingService";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
}

export function PricingTable() {
  const [isYearly, setIsYearly] = useState(false);
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlans = async () => {
      try {
        const fetchedPlans = await fetchPricingPlans();
        setPlans(fetchedPlans);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Error fetching pricing plans");
        setLoading(false);
      }
    };

    getPlans();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading pricing plans...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fadeInDown">
            Flexible Pricing Plans
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground md:text-xl animate-fadeInDown"
            style={{ animationDelay: "0.2s" }}
          >
            Choose the perfect plan for your needs. Get 2 months free with
            yearly billing!
          </p>
        </div>

        <div
          className="flex items-center justify-center space-x-3 mb-10 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <Label
            htmlFor="billing-cycle"
            className="text-muted-foreground font-medium"
          >
            Monthly
          </Label>
          <Switch
            id="billing-cycle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle billing cycle"
          />
          <Label
            htmlFor="billing-cycle"
            className="text-muted-foreground font-medium"
          >
            Yearly (Save ~17%)
          </Label>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp ${
                plan.isPopular
                  ? "border-2 border-primary ring-4 ring-primary/20"
                  : ""
              }`}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                  Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground pt-1">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-accent mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
