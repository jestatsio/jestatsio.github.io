import { Attention } from "@/components/Attention";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LocalWeb } from "@/components/LocalWeb";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Attention />
      <Services />
      <About />
      <Process />
      <LocalWeb />
      <Contact />
      <Footer />
    </main>
  );
}
