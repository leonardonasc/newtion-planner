
import InsideProject from "@/components/inside-project";
import Navbar from "@/components/bar/navbar";
import LandingMain from "@/components/landing-main";
import Plans from "@/components/plans";
import About from "@/components/about";

export default async function Home() {

  return (
    <div className="flex flex-col w-90% lg:w-80%">
      <nav className="fixed p-2 top-0 left-0 right-0 z-50">
        <Navbar />
      </nav>
      <main className="lg:max-w-6xl lg:mx-auto">
        <div>
          <LandingMain />
        </div>
        <div className="min-h-screen flex flex-col p-4">
          <InsideProject />
          <div className="h-px my-6 bg-gray-200"></div>
        </div>
        <div className="flex flex-col p-4">
          <Plans />
          <div className="h-px my-6 bg-gray-200"></div>
        </div>
        <div className="p-4">
          <About />
        </div>
      </main>
    </div>
  );
}
