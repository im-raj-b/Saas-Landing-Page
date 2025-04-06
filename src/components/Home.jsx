import React from "react";
import Testimonials from "./homepage/Testimonials";
import HeroSection from "./homepage/HeroSection";
import Support from "./homepage/Support";
import Features from "./homepage/Features";
import Benifits from "./homepage/Benifits";
import Pricing from "./homepage/Pricing";

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
