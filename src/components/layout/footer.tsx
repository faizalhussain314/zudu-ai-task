import Link from "next/link";
import { MountainIcon } from "lucide-react";
import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">
            AetherSite
          </span>
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} AetherSite. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
