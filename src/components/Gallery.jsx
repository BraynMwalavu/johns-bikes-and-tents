import React from "react";

// ✅ Import all images explicitly from /src/assets
import visitorsGate from "../assets/visitors infront of gate.jpg";
import womenTent from "../assets/two-women-in-a-tent.jpg";
import groupBikes from "../assets/group of bikes.jpg";
import johnBikes from "../assets/John next to bikes.jpg";
import campFire from "../assets/camp-fire-close-up.jpg";
import campingTents from "../assets/camping-tents.jpg";
import redBike from "../assets/red bike.jpg";
import cyclistYouths from "../assets/cyclist youths.jpg";
import tentEdge from "../assets/tent-at-fields-edge.jpg";
import johnTourist from "../assets/John with tourist.jpg";

const galleryImages = [
  { src: visitorsGate, alt: "Visitors in front of Hell’s Gate" },
  { src: womenTent, alt: "Two women relaxing in a tent" },
  { src: groupBikes, alt: "Group of cyclists exploring Naivasha" },
  { src: johnBikes, alt: "John standing next to bikes" },
  { src: campFire, alt: "Campfire close-up during the evening" },
  { src: campingTents, alt: "Row of camping tents near Lake Naivasha" },
  { src: redBike, alt: "Red mountain bike ready for an adventure" },
  { src: cyclistYouths, alt: "Cyclist youths preparing for a ride" },
  { src: tentEdge, alt: "Tent setup at the field’s edge" },
  { src: johnTourist, alt: "John with a tourist before a bike ride" },
];

const Gallery = () => {
  return (
    <main className="bg-primary text-neutral-dark py-20 px-6">
      <section className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-h1 font-heading text-primary-dark mb-6">
          Adventure Moments
        </h1>

        <p className="text-base text-neutral-dark/80 mb-12 max-w-2xl mx-auto">
          Explore some of the most memorable moments from our biking, camping, and
          adventure tours around Naivasha and Hell’s Gate National Park.
        </p>

        {/* ✅ Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="object-cover w-full h-64 md:h-72"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
