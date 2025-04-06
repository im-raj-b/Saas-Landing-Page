import React from "react";
import Brands from "./Brands";

export default function Testimonials() {
  return (
    <>
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          More than 25,000 teams use Collabs
        </h2>
        {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img
              src="https://placehold.co/120x40?text=Unsplash"
              alt="Unsplash"
              width={120}
              height={40}
            />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img
              src="https://placehold.co/120x40?text=Notion"
              alt="Notion"
              width={120}
              height={40}
            />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img
              src="https://placehold.co/120x40?text=Intercom"
              alt="Intercom"
              width={120}
              height={40}
            />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img
              src="https://placehold.co/120x40?text=Descript"
              alt="Descript"
              width={120}
              height={40}
            />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img
              src="https://placehold.co/120x40?text=Grammarly"
              alt="Grammarly"
              width={120}
              height={40}
            />
          </div>
        </div> */}
        <Brands />
      </section>
    </>
  );
}
