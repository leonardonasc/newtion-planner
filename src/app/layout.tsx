import type { Metadata } from "next";
import { Geist, Work_Sans, EB_Garamond, Crimson_Text, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
import { TailwindIndicator } from "@/components/TailwindIndicator";
import SmoothScroll from "@/components/providers/smooth-scroll";
import CustomCursor from "@/components/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
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
      className={cn("h-full", "antialiased", geistSans.variable, workSans.variable, caveat.variable, "font-work-sans", ebGaramond.variable, "font-eb-garamond", crimsonText.variable, "font-crimson-text")}
      suppressHydrationWarning
    >

      <body className="min-h-full flex flex-col bg-offwhite-50">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>

        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  );
}
