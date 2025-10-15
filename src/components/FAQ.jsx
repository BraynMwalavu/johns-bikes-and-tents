import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "This is a demo web app showcasing navigation, routing, and layout using React and React Router.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach out via the contact form on the Contact page, and our team will respond within 24 hours.",
    },
    {
      question: "Can I contribute or give feedback?",
      answer:
        "Absolutely! We appreciate feedback and contributions to improve the app experience.",
    },
  ];

  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 hover:bg-gray-50 p-4 rounded-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
