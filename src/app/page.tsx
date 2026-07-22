
import InsideProject from "@/components/inside-project";
import Navbar from "@/components/bar/navbar";
import LandingMain from "@/components/landing-main";
import Plans from "@/components/plans";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="bg-offwhite-50 max-w-6xl mx-auto">
      <nav className="fixed top-0 left-0 right-0 z-50 p-2">
        <Navbar />
      </nav>

      {/* Hero */}
      <section className="sticky top-0 h-screen z-0">
        <LandingMain />
      </section>

      {/* Conteúdo */}
      <main className="relative z-10 bg-offwhite-50">
        <div className="min-h-screen p-4">
          <InsideProject />
        </div>

        <div className="p-4">
          <Plans />
        </div>

        <Footer />
      </main>
    </div>
  );
}