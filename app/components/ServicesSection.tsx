import React from "react";

interface PricingTier {
  id: "starter" | "core" | "premium";
  name: string;
  price: number;
  currency: "₱";
  highlighted: boolean;
  highlightLabel?: string;
  inclusions: string[];
  ctaLabel: string;
  ctaHref: string;
}

const tiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 4500,
    currency: "₱",
    highlighted: false,
    inclusions: [
      "Up to 2 hours shoot time",
      "Up to 8 dishes/products",
      "15 edited high-resolution photos",
      "Social media and menu usage",
      "Delivery within 5–7 working days",
    ],
    ctaLabel: "Book Now",
    ctaHref: "#contact",
  },
  {
    id: "core",
    name: "Food Photography Package",
    price: 8500,
    currency: "₱",
    highlighted: true,
    highlightLabel: "Most Popular",
    inclusions: [
      "Up to 4 hours shoot time",
      "Up to 15 dishes/products",
      "30 edited high-resolution photos",
      "Basic styling guidance",
      "Social media and menu usage",
      "Delivery within 5–7 working days",
    ],
    ctaLabel: "Book Now",
    ctaHref: "#contact",
  },
  {
    id: "premium",
    name: "Premium",
    price: 14000,
    currency: "₱",
    highlighted: false,
    inclusions: [
      "Full day shoot",
      "30+ dishes/products",
      "60 edited high-resolution photos",
      "Advanced styling guidance",
      "Commercial usage included",
      "Delivery within 3–5 working days",
    ],
    ctaLabel: "Book Now",
    ctaHref: "#contact",
  },
];

function PricingCard(props: { tier: PricingTier }): React.JSX.Element {
  const { tier } = props;

  if (tier.highlighted) {
    return (
      <div
        data-tier-id={tier.id}
        data-highlighted={tier.highlighted}
        className="relative flex flex-col w-full rounded-2xl border border-white p-8 scale-[1.03] z-10"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        {/* Most Popular badge — top center */}
        {tier.highlightLabel && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
              {tier.highlightLabel}
            </span>
          </div>
        )}

        <h3 className="text-xl font-bold text-white leading-snug mb-3">
          {tier.name}
        </h3>

        <p className="text-3xl font-extrabold text-white mb-6">
          {tier.currency}
          {tier.price.toLocaleString()}
        </p>

        <ul className="flex flex-col gap-2 mb-8 flex-1">
          {tier.inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white leading-relaxed">
              <span className="mt-0.5 shrink-0 text-white">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={tier.ctaHref}
          className="block w-full text-center bg-white text-black font-semibold text-sm py-3 px-6 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:bg-white/90 transition-colors"
        >
          {tier.ctaLabel}
        </a>
      </div>
    );
  }

  return (
    <div
      data-tier-id={tier.id}
      data-highlighted={tier.highlighted}
      className="flex flex-col w-full rounded-2xl border border-white/[0.08] p-8"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      <h3 className="text-xl font-bold text-white leading-snug mb-3">
        {tier.name}
      </h3>

      <p className="text-3xl font-extrabold text-white mb-6">
        {tier.currency}
        {tier.price.toLocaleString()}
      </p>

      <ul className="flex flex-col gap-2 mb-8 flex-1">
        {tier.inclusions.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white leading-relaxed">
            <span className="mt-0.5 shrink-0 text-white">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={tier.ctaHref}
        className="block w-full text-center bg-transparent border border-white text-white font-semibold text-sm py-3 px-6 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:bg-white/10 transition-colors"
      >
        {tier.ctaLabel}
      </a>
    </div>
  );
}

export default function ServicesSection(): React.JSX.Element {
  return (
    <section
      className="w-full px-6 py-20 md:px-12 lg:px-20"
      style={{ backgroundColor: "#111111", fontFamily: "var(--font-bricolage)" }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-14">
        Food Photography
      </h2>

      {/* Card grid: single column on mobile, 3-column on md+ */}
      <div className="flex flex-col md:flex-row items-stretch gap-6 md:items-center max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.id} className="w-full md:flex-1">
            <PricingCard tier={tier} />
          </div>
        ))}
      </div>

      <p className="text-white/45 text-sm text-center mt-12 max-w-xl mx-auto leading-relaxed">
        Additional edited photos: ₱250/photo. Commercial advertising usage
        quoted separately.
      </p>
    </section>
  );
}
