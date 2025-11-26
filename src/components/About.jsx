import React from "react";
import johnWithTourist from "../assets/John with tourist.jpg";

const About = () => {
  return (
    <>
      {/* =======================
          HERO SECTION
      ========================== */}
      <section className="bg-primary text-neutral-light py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-h1 font-heading text-primary-dark mb-4">
            About John’s Bikes & Tents
          </h1>

          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-neutral-dark/90">
            Since 2016, we’ve helped adventurers explore Naivasha and Hell’s Gate 
            with confidence — offering trusted gear, friendly guidance, and unforgettable outdoor experiences.
          </p>
        </div>
      </section>

      {/* =======================
          OUR STORY
      ========================== */}
      <section className="bg-neutral-light py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

          {/* Text Content */}
          <div>
            <h2 className="text-h2 font-heading text-primary-dark mb-4">
              Our Story
            </h2>

            <p className="text-base leading-relaxed text-neutral-dark/90 mb-4">
              John’s Bikes & Tents began in 2016 when
              <span className="text-accent font-semibold"> John Gachucha</span>, an avid explorer 
              with an unmatched passion for outdoor experiences, started with a single bicycle 
              and a vision — to help visitors discover the beauty of Naivasha in a genuine, memorable way.
            </p>

            <p className="text-base leading-relaxed text-neutral-dark/90 mb-4">
              Over the years, that small idea has grown into a trusted service recognized by both 
              local and international tourists. John's warm hospitality, professionalism, and 
              deep knowledge of local trails have created an experience that visitors consistently return for.
            </p>

            <p className="text-base leading-relaxed text-neutral-dark/90">
              Today, we continue to provide high-quality bikes, tents, and guided adventures — 
              all tailored to make every journey safe, exciting, and truly unforgettable.
            </p>
          </div>

          {/* Image */}
          <img
            src={johnWithTourist}
            alt="Founder John Gachucha with a tourist in Naivasha"
            loading="lazy"
            className="rounded-2xl shadow-medium object-cover w-full h-80 md:h-96 hover:scale-[1.02] transition duration-300"
          />
        </div>
      </section>

      {/* =======================
          MISSION SECTION
      ========================== */}
      <section className="bg-primary-light py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-h2 font-heading text-primary-dark mb-6">
            Our Mission
          </h2>

        <p className="text-base md:text-lg leading-relaxed text-neutral-dark/90 max-w-3xl mx-auto">
          To make outdoor exploration accessible, safe, and deeply enjoyable by offering 
          dependable equipment, genuine guidance, and exceptional service that helps every 
          adventurer connect with nature confidently.
        </p>
        </div>
      </section>

      {/* =======================
          VALUES SECTION
      ========================== */}
      <section className="bg-neutral-light py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-h2 font-heading text-primary-dark mb-10">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

            {/* Value 1 */}
            <div className="p-6 bg-white rounded-xl shadow-soft">
              <h3 className="font-heading text-lg mb-2 text-primary-dark">Reliability</h3>
              <p className="text-neutral-dark/80 text-sm">
                Our gear is carefully maintained and tested for real outdoor conditions — ensuring 
                comfort and safety in every adventure.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-6 bg-white rounded-xl shadow-soft">
              <h3 className="font-heading text-lg mb-2 text-primary-dark">Genuine Hospitality</h3>
              <p className="text-neutral-dark/80 text-sm">
                We serve every customer with kindness, honesty, and personalized care.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-6 bg-white rounded-xl shadow-soft">
              <h3 className="font-heading text-lg mb-2 text-primary-dark">Adventure for Everyone</h3>
              <p className="text-neutral-dark/80 text-sm">
                Whether you’re a first-time rider or an experienced explorer, we ensure your journey is enjoyable.
              </p>
            </div>

            {/* Value 4 */}
            <div className="p-6 bg-white rounded-xl shadow-soft">
              <h3 className="font-heading text-lg mb-2 text-primary-dark">Professionalism</h3>
              <p className="text-neutral-dark/80 text-sm">
                Clear communication, transparent pricing, and dependable service — always.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          FOUNDER SECTION
      ========================== */}
      <section className="bg-primary text-neutral-light py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-h2 font-heading text-primary-dark mb-4">
            Meet the Founder
          </h2>

          <p className="max-w-3xl mx-auto text-neutral-dark/90 text-base md:text-lg leading-relaxed">
            John is the heart of this business — charismatic, hardworking, and deeply passionate 
            about helping visitors enjoy Naivasha to the fullest. His professionalism and 
            personal touch set the service apart, creating an experience guests always remember.
          </p>
        </div>
      </section>

      {/* =======================
          LOCATION SECTION
      ========================== */}
      <section className="bg-neutral-light py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-lg font-heading text-primary-dark mb-2">
            📍 Location
          </h3>
          <p className="text-base text-neutral-dark/80">
            Fisherman’s Camp, Naivasha — right next to Hell’s Gate National Park.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
