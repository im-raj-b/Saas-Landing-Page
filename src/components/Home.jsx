import React from "react";
import Testimonials from "./Testimonials";
import HeroSection from "./HeroSection";
import Support from "./Support";
import Features from "./Features";
import Benifits from "./Benifits";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <Support />
      <Features />
      <Benifits />
      <Pricing />
    </>
  );
}
