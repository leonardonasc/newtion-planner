
import "../globals.css";
import { Toaster } from "@/components/ui/sonner"
import { TailwindIndicator } from "@/components/TailwindIndicator";
import SmoothScroll from "@/components/providers/smooth-scroll";
import CustomCursor from "@/components/custom-cursor";
import LandingNavbar from "@/components/bar/landing-navbar";
import Footer from "@/components/footer";

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
