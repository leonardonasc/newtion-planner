import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Work_Sans, Arapey, Caveat, EB_Garamond } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Newtion — Organize suas tarefas e gerencie seus gastos",
  description: "Organize suas tarefas, acompanhe seus projetos e gerencie seus gastos de forma eficiente com o Newtion Planner. Nossa plataforma intuitiva e fácil de usar ajuda você a alcançar seus objetivos e manter o controle de suas atividades diárias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable, workSans.variable, "font-work-sans", arapey.variable, "font-arapey", caveat.variable, "font-caveat", ebGaramond.variable, "font-eb-garamond")}
      suppressHydrationWarning
    >

      <body className="min-h-full flex flex-col bg-offwhite-50">
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
      </body>
    </html>
  );
}
