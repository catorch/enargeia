import Cta from "@/components/Cta";
import Examples from "@/components/Examples";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Workflow />
      <Examples />
      <Pricing />
      <Cta />
      <Footer />
    </main>
  );
}
