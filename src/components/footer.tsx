import { MailIcon } from "./icons/mail";
import { LinkedinIcon } from "./icons/linkedin";
import { GtihubIcon } from "./icons/github";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-slate-200/60 bg-slate-50/50 py-12 transition-colors dark:border-zinc-800/60 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-sm font-bold tracking-wide text-slate-800 dark:text-zinc-200">
              Nathan Shoemark
            </span>
            <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
              &copy; {currentYear}. All rights reserved.
            </p>
          </div>

          {/* Social Links & Mail */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:n.shoemark@gmail.com"
              className="hover:text-accent-primary dark:hover:text-accent-primary flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors dark:text-zinc-300"
              title="Send email"
            >
              <MailIcon />
              <span className="hidden sm:inline">n.shoemark@gmail.com</span>
            </a>
            <div className="h-4 border-l border-slate-200 dark:border-zinc-800" />
            <div className="flex items-center gap-4 text-slate-600 dark:text-zinc-300">
              <a
                href="https://www.linkedin.com/in/nathanshoemark/"
                className="hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
                title="LinkedIn Profile"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-5 w-5 items-center justify-center">
                  <LinkedinIcon />
                </div>
              </a>
              <a
                href="https://github.com/shoeyn"
                className="hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
                title="GitHub Profile"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-5 w-5 items-center justify-center">
                  <GtihubIcon />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
