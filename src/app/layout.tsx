import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/toggle-mode";
import Link from "next/link";
import { TailwindIndicator } from "@/components/TailwindIndicator";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Newtion Planner",
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
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-offwhite-50">
        {/* enablesystem desativado para manter apenas o whitetheme na aplicacao */}
          {children}
          <Toaster />
          <TailwindIndicator />
      </body>
    </html>
  );
}
