import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Work_Sans, Arapey, Caveat, EB_Garamond } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
import { TailwindIndicator } from "@/components/TailwindIndicator";
import SmoothScroll from "@/components/providers/smooth-scroll";
import CustomCursor from "@/components/custom-cursor";
import LandingNavbar from "@/components/bar/landing-navbar";
import Footer from "@/components/footer";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const arapey = Arapey({
  variable: "--font-arapey",
  subsets: ["latin"],
  weight: ["400"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// public layout

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 right-0 z-50 p-2">
          <LandingNavbar />
        </nav>
      </header>
      <main>
        {/* enablesystem desativado para manter apenas o whitetheme na aplicacao */}
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>

        <Toaster />
        <TailwindIndicator />
      </main>

      <footer className="relative z-30 bg-offwhite-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto p-4">
          <Footer />
        </div>
      </footer>
    </>
  );
}
