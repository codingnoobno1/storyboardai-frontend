import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Features />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
