"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Branding */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-2.5">
              <Logo />
              <div className="flex flex-col">
                <span className="font-display group-hover:text-accent-primary dark:group-hover:text-accent-primary text-base leading-none font-bold tracking-tight text-slate-900 transition-colors md:text-lg dark:text-zinc-50">
                  Nathan Shoemark
                </span>
                <span className="mt-0.5 text-[9px] font-semibold tracking-wider text-slate-500 uppercase transition-colors group-hover:text-slate-700 md:text-[10px] dark:text-zinc-400 dark:group-hover:text-zinc-300">
                  Senior Software Engineer
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden items-center space-x-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-accent-primary dark:text-accent-primary"
                    : "text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="bg-accent-primary absolute bottom-0 left-0 h-[2px] w-full rounded-full" />
                )}
              </Link>
            ))}

            <div className="h-6 border-l border-slate-200 pl-4 dark:border-zinc-800">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-hidden dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu hamburger icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${isOpen ? "animate-fadeIn block" : "hidden"} border-t border-slate-200 bg-slate-50/95 backdrop-blur-md md:hidden dark:border-zinc-800 dark:bg-zinc-950/95`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                isActive(link.href)
                  ? "text-accent-primary dark:text-accent-primary bg-slate-100 dark:bg-zinc-800"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
