import InsideProject from "@/components/inside-project";
import Navbar from "@/components/bar/navbar";
import LandingMain from "@/components/landing-main";
import Plans from "@/components/plans";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative bg-offwhite-50">
      <nav className="fixed top-0 left-0 right-0 z-50 p-2">
        <Navbar />
      </nav>

      <main className="relative isolate">
        <section className="sticky top-0 h-screen z-0 bg-offwhite-50" id="inicio">
          <div className="h-full max-w-6xl mx-auto">
            <LandingMain />
          </div>
        </section>

        <section className="relative z-10 min-h-screen bg-neutral-100 shadow-2xl" id="inside-project">
          <div className="max-w-6xl mx-auto p-4">
            <InsideProject />
          </div>
        </section>

        <section className="relative z-20 bg-offwhite-50 ">
          <div className="max-w-6xl mx-auto p-4">
            <Plans />
          </div>
        </section>

        <footer className="relative z-30 bg-offwhite-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto p-4">
            <Footer />
          </div>
        </footer>
      </main>
    </div>
  );
}