import type { Metadata } from "next";
import "./globals.css";
import { PersonalInfo } from "@/components/personalInfo";
import { Bento } from "@/components/bento";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    template: "%s | Nathan Shoemark",
    default: "Personal Development Blog",
  },
  description:
    "Personal development blog and CV related information for Nathan Shoemark",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-3 lg:gap-8 lg:p-16">
          <PersonalInfo />
          <main className="space-y-4 lg:col-span-2 lg:space-y-8">
            <Bento>
              <div className="flex items-center gap-4">
                <Image
                  src="/icon.svg"
                  alt="Vercel Logo"
                  width={60}
                  height={60}
                  priority
                />
                <div>
                  <h2>Personal blog showing development of languages.</h2>
                  <p>Current journey: React/Next.js, Ruby on Rails</p>
                </div>
              </div>
            </Bento>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
