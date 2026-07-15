import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanshoemark.com"),
  title: {
    template: "%s | Nathan Shoemark",
    default: "Nathan Shoemark | Senior Software Engineer",
  },
  description:
    "Senior Software Engineer portfolio and development blog for Nathan Shoemark, specializing in Ruby on Rails, Go, Java, and TypeScript/Serverless architectures.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nathan Shoemark | Senior Software Engineer",
    description:
      "Senior Software Engineer portfolio and development blog for Nathan Shoemark, specializing in Ruby on Rails, Go, Java, and TypeScript/Serverless architectures.",
    url: "https://nathanshoemark.com",
    siteName: "Nathan Shoemark Portfolio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Shoemark | Senior Software Engineer",
    description:
      "Senior Software Engineer portfolio and development blog for Nathan Shoemark, specializing in Ruby on Rails, Go, Java, and TypeScript/Serverless architectures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const themeScript = `
  (function() {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (_) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col transition-colors duration-300">
        <Navigation />
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
