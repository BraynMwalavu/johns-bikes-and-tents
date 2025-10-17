import React from "react";
import johnWithTourist from "../assets/John with tourist.jpg"; // ✅ Import your new image

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
            Founded by outdoor enthusiast <span className="text-accent font-semibold">John Mwangi</span> in 2018,
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

        {/* ✅ Updated Image */}
        <img
          src={johnWithTourist}
          alt="John Mwangi with a tourist in Naivasha"
          loading="lazy"
          className="rounded-2xl shadow-medium object-cover w-full h-80 md:h-96 transform hover:scale-[1.02] transition-transform duration-300"
        />
      </section>

      {/* Values Section */}
      <section className="bg-primary-light py-20 text-neutral-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-h2 font-heading text-primary-dark mb-10">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-neutral-light shadow-soft rounded-2xl p-6 hover:shadow-medium transition">
              <h3 className="font-heading text-xl mb-3 text-primary-dark">
                Adventure Spirit
              </h3>
              <p className="text-base text-neutral-dark/80">
                We believe adventure connects people to nature — and themselves.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-light shadow-soft rounded-2xl p-6 hover:shadow-medium transition">
              <h3 className="font-heading text-xl mb-3 text-primary-dark">
                Quality & Trust
              </h3>
              <p className="text-base text-neutral-dark/80">
                Every product we offer is tested for durability, safety, and performance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-light shadow-soft rounded-2xl p-6 hover:shadow-medium transition">
              <h3 className="font-heading text-xl mb-3 text-primary-dark">
                Community Focus
              </h3>
              <p className="text-base text-neutral-dark/80">
                We’re proud to partner with local guides and support eco-tourism in Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
