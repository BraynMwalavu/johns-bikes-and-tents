import React from "react";
import Button from "./Button";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does John’s Bikes & Tents offer?",
      answer:
        "We provide high-quality bike rentals, tents, and camping gear for outdoor enthusiasts. Whether you’re exploring Naivasha or visiting Hell’s Gate National Park, we’ve got you covered.",
    },
    {
      question: "Where are you located?",
      answer:
        "We’re based in Naivasha, near Fisherman’s Camp — just a short ride away from Hell’s Gate National Park.",
    },
    {
      question: "How can I make a booking or inquiry?",
      answer:
        "Simply visit our Contact page and fill out the form. John or our team will get back to you within 24 hours.",
    },
    {
      question: "Do you provide helmets and safety gear?",
      answer:
        "Yes, helmets are available with every bike rental to ensure your safety and comfort during the ride.",
    },
  ];

  return (
    <main className="bg-primary text-neutral-dark py-20 px-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-h1 font-heading text-center text-primary-dark mb-10">
          Frequently Asked Questions
        </h1>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-light p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <h2 className="text-h3 font-heading text-primary-dark mb-3">
                {faq.question}
              </h2>
              <p className="text-base text-neutral-dark/80 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-base text-neutral-dark/70 mb-6">
            Still have questions? We’re here to help.
          </p>

          {/* ✅ Use Button Component */}
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
