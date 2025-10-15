import React from "react";

const Contact = () => {
  return (
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have questions, suggestions, or just want to say hello?  
        We'd love to hear from you!
      </p>

      <form className="space-y-4 text-left max-w-md mx-auto">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
