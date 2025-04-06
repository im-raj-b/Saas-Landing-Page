import React from "react";
import Brands from "./Brands";

export default function Testimonials() {
  return (
    <>
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          More than 25,000 teams use Collabs
        </h2>
        <Brands />
      </section>
    </>
  );
}
