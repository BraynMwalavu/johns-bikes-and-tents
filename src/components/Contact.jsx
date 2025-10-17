import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <main className="bg-primary text-neutral-dark py-20 px-6">
      <section className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-h1 font-heading text-primary-dark mb-6">
          Get in Touch
        </h1>

        {/* Intro Text */}
        <p className="text-base md:text-lg text-neutral-dark/80 mb-10 max-w-2xl mx-auto">
          Have questions, suggestions, or just want to say hello?  
          We’d love to hear from you — your next adventure starts with a simple message.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 text-left max-w-md mx-auto bg-neutral-light p-8 rounded-2xl shadow-soft">
          {/* Name Field */}
          <div>
            <label className="block text-primary-dark font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-primary-dark/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-primary-dark font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-primary-dark/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-primary-dark font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-primary-dark/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>

          {/* ✅ Reusable Button (Centered) */}
          <div className="pt-6 flex justify-center">
            <Button variant="primary" className="w-full sm:w-auto px-10 py-3">
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
