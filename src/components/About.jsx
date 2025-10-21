import React from "react";
import johnWithTourist from "../assets/John with tourist.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-neutral-dark py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-h1 font-heading text-primary-dark mb-6">
            About John’s Bikes & Tents
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We’re passionate about helping adventurers explore the wild with confidence.
            From rugged bikes to durable camping gear, our mission is to make your
            journey <span className="text-accent font-semibold">unforgettable.</span>
          </p>
        </div>
      </section>

      {/* Story / Mission Section */}
      <section className="bg-neutral-light text-neutral-dark max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-h2 font-heading text-primary-dark mb-4">
            Our Story
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Founded by outdoor enthusiast <span className="text-accent font-semibold">John Gachucha</span> in 2018,
            John’s Bikes & Tents began as a small local shop in Naivasha catering to
            adventure seekers exploring Hell’s Gate National Park. Over the years, we’ve
            grown into a trusted name for quality bikes, tents, and guided adventure rentals.
          </p>
          <p className="text-base leading-relaxed">
            We believe every trip should be memorable — that’s why we provide reliable
            equipment and personalized recommendations tailored to your experience level
            and adventure goals.
          </p>
        </div>

        {/* Image */}
        <img
          src={johnWithTourist}
          alt="John Gachucha with a tourist in Naivasha"
          loading="lazy"
          className="rounded-2xl shadow-medium object-cover w-full h-80 md:h-96 transform hover:scale-[1.02] transition-transform duration-300"
        />
      </section>

      {/* ✅ Services Section */}
      <section className="bg-primary-light py-20 text-neutral-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-h2 font-heading text-primary-dark mb-10">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Service 1: Bike Rentals */}
            <div className="bg-neutral-light shadow-soft rounded-2xl p-6 hover:shadow-medium transition">
              <h3 className="font-heading text-xl mb-3 text-primary-dark">
                🚲 Bike Rentals
              </h3>
              <p className="text-base text-neutral-dark/80 mb-3">
                Explore Naivasha and Hell’s Gate National Park with our top-quality bikes.
              </p>
              <ul className="text-sm text-neutral-dark/80 leading-relaxed">
                <li><strong>Rate:</strong> 800 Ksh per day</li>
                <li><strong>Helmets:</strong> 200 Ksh</li>
              </ul>

              <h4 className="font-semibold text-primary-dark mt-4 mb-2">Bike Sizes:</h4>
              <ul className="text-sm text-neutral-dark/80 space-y-1">
                <li>20” — Ages 6–7</li>
                <li>24” — Ages 8–10</li>
                <li>26” — Ages 11–15</li>
                <li>29” — Ages 16 and above</li>
              </ul>
            </div>

            {/* Service 2: Tents & Camping Gear */}
            <div className="bg-neutral-light shadow-soft rounded-2xl p-6 hover:shadow-medium transition">
              <h3 className="font-heading text-xl mb-3 text-primary-dark">
                ⛺ Tent Rentals
              </h3>
              <p className="text-base text-neutral-dark/80 mb-3">
                Stay comfortable under the stars with a variety of tent sizes.
              </p>
              <ul className="text-sm text-neutral-dark/80 leading-relaxed">
                <li>2-man tent</li>
                <li>3-man tent</li>
                <li>4-man tent</li>
                <li>8-man tent</li>
                <li>10-man tent</li>
              </ul>
              <p className="mt-3 text-sm text-neutral-dark/70">
                Available in small, medium, and large sizes — ideal for groups or solo travelers.
              </p>
            </div>

            {/* Service 3: Boat Riding */}
            <div className="bg-neutral-light shadow-soft rounded-2xl p-6 hover:shadow-medium transition">
              <h3 className="font-heading text-xl mb-3 text-primary-dark">
                🚤 Boat Riding
              </h3>
              <p className="text-base text-neutral-dark/80 mb-3">
                Enjoy breathtaking lake views and wildlife experiences on the water.
              </p>
              <ul className="text-sm text-neutral-dark/80 leading-relaxed">
                <li><strong>1 Hour Ride:</strong> 3,500 Ksh</li>
              </ul>
              <p className="mt-3 text-sm text-neutral-dark/70">
                Perfect for sightseeing, photography, or simply relaxing by Lake Naivasha.
              </p>
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-heading text-primary-dark mb-2">
              📍 Location
            </h3>
            <p className="text-base text-neutral-dark/80">
              Fisherman’s Camp, Naivasha — near Hell’s Gate National Park
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
