"use client";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Benefits from "./_components/Benefits";
import HowItWorks from "./_components/HowItWorks";
import Testimonials from "./_components/Testimonials";
import Pricing from "./_components/Pricing";
import About from "./_components/About";
import FAQ from "./_components/FAQ";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import ScrollProgress from "./_components/ScrollProgress";
import BackgroundEffects from "./_components/BackgroundEffects";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-900">
      <ScrollProgress />
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
