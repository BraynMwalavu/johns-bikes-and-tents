import React from "react";
import Button from "./Button";
import heroImage from "../assets/hero image.jpg"; // adjust extension if needed

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center text-neutral-light overflow-hidden">
      {/* Hero Background Image */}
      <img
        src={heroImage}
        alt="Cyclist exploring Naivasha trails"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/70 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-h1 font-heading text-neutral-light mb-6 drop-shadow-lg">
          Adventure begins where the road ends
        </h1>

        <p className="text-base md:text-lg leading-relaxed mb-10 text-neutral-light/90">
          Discover Kenya’s outdoors with{" "}
          <span className="font-semibold text-accent">
            John’s Bikes & Tents
          </span>{" "}
          — your trusted guide for camping, riding, and exploring nature the way
          it was meant to be: wild, free, and unforgettable.
        </p>

        {/* ✅ Reusable Button Component */}
        <Button href="/contact" variant="primary">
          Get in Touch
        </Button>
      </div>

      {/* Subtext */}
      <p className="relative z-10 mt-10 text-small text-neutral-light/80">
        Based in Naivasha • Near Hell’s Gate National Park
      </p>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
    </section>
  );
}
