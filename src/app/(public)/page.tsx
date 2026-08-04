import InsideProject from "@/components/inside-project";
import LandingMain from "@/components/landing-main";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="relative bg-offwhite-50">
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
            <Pricing />
          </div>
        </section>
      </main>
    </div>
  );
}