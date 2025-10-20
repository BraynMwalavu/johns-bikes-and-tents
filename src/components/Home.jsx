import React, { useEffect, useState } from "react";
import Button from "./Button";

// ✅ Import your actual hero images in correct order
import hero1 from "../assets/hero image.jpg";
import hero2 from "../assets/cyclist youths.jpg";
import hero3 from "../assets/row-of-camping-tents.jpg";

export default function Home() {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  // 🔁 Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center text-neutral-light overflow-hidden">
      {/* 🔁 Background Slideshow */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero background ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* ✅ Very light global tint for overall balance */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* ✅ Seamless text contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none"></div>

      {/* ✅ Text Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-h1 font-heading text-neutral-light mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
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

        {/* CTA Button */}
        <Button href="/contact" variant="primary">
          Get in Touch
        </Button>
      </div>

      {/* Subtext */}
      <p className="relative z-10 mt-10 text-small text-neutral-light/80">
        Based in Naivasha • Near Hell’s Gate National Park
      </p>
    </section>
  );
}
