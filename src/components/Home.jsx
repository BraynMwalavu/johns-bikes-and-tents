export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-forest-green text-sand-beige text-center px-6">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-heading mb-4">
        Adventure begins where the road ends
      </h1>
      <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
        Discover Kenya’s outdoors with <span className="font-semibold text-accent-orange">John’s Bikes & Tents</span> — your trusted guide for camping, riding, and exploring nature the way it was meant to be: wild, free, and unforgettable.
      </p>

      {/* CTA Button */}
      <a
        href="/contact"
        className="px-8 py-3 bg-accent-orange text-white rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300"
      >
        Get in Touch
      </a>

      {/* Subtext */}
      <p className="mt-10 text-sm text-sand-beige/80">
        Based in Naivasha • Near Hell’s Gate National Park
      </p>
    </div>
  );
}
