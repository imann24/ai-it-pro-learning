"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Technologies", href: "/technologies" },
  { name: "Certifications", href: "/certifications" },
  { name: "Tools", href: "/tools" },
  { name: "Skills", href: "/skills" },
  { name: "Resources", href: "/resources" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Fix hydration issues by ensuring component is mounted before rendering interactive elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-10 border-b">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">IT Pro Development</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              IT Pro Development
            </h1>
          </Link>
        </div>
        {isMounted && (
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>

      {/* Mobile menu */}
      {isMounted && (
        <div
          className={`relative inset-0 z-50 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
          data-testid="mobile-menu"
        >
          {/* Backdrop */}
          <div
            className="relative inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Menu panel */}
          <div className="relative inset-y-0 right-0 z-50 w-full max-w-sm bg-background p-6 shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              {" "}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 px-3 text-base font-medium rounded-md text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
