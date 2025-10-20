import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "254702072990"; // ✅ John’s actual WhatsApp number
  const message = "Hi John! I’d like to know more about your bikes and tents.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 z-50"
    >
      <FaWhatsapp size={24} />
      <span className="font-semibold hidden md:inline">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
