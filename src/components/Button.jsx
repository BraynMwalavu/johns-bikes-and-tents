import React from "react";

const Button = ({ children, href, variant = "primary", onClick }) => {
  const base =
    "inline-block font-semibold rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-accent text-white px-8 py-3 shadow-md hover:bg-accent-hover hover:text-white hover:scale-[1.03] hover:shadow-lg focus:ring-accent focus:ring-offset-primary",
    secondary:
      "bg-neutral-light text-primary-dark border border-primary-dark px-6 py-2 hover:bg-primary-dark hover:text-neutral-light hover:scale-[1.02]",
    outline:
      "border-2 border-accent text-accent px-6 py-2 hover:bg-accent hover:text-white hover:scale-[1.02]",
  };

  const classNames = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
