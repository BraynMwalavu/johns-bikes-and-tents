import React from "react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About John’s Bikes & Tents
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We’re passionate about helping adventurers explore the wild with
            confidence. From rugged bikes to durable camping gear, our mission
            is to make your journey unforgettable.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded by outdoor enthusiast John Mwangi in 2018, John’s Bikes & Tents
            began as a small local shop in Naivasha catering to adventure seekers
            exploring Hell’s Gate National Park. Over the years, we’ve grown into a
            trusted name for quality bikes, tents, and guided adventure rentals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe every trip should be memorable — that’s why we provide
            reliable equipment and personalized recommendations tailored to your
            experience level and adventure goals.
          </p>
        </div>

        <img
          src="/assets/about-camping.jpg"
          alt="Camping gear display"
          className="rounded-2xl shadow-lg object-cover w-full h-80 md:h-96"
        />
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Adventure Spirit
              </h3>
              <p className="text-gray-600">
                We believe adventure connects people to nature — and themselves.
              </p>
            </div>
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Quality & Trust
              </h3>
              <p className="text-gray-600">
                Every product we offer is tested for durability, safety, and performance.
              </p>
            </div>
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Community Focus
              </h3>
              <p className="text-gray-600">
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
