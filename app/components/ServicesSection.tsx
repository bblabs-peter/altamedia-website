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
  return (
    <div data-tier-id={tier.id} data-highlighted={tier.highlighted}>
      {tier.highlighted && tier.highlightLabel && (
        <span>{tier.highlightLabel}</span>
      )}
      <h3>{tier.name}</h3>
      <p>
        {tier.currency}
        {tier.price.toLocaleString()}
      </p>
      <ul>
        {tier.inclusions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={tier.ctaHref}>{tier.ctaLabel}</a>
    </div>
  );
}

export default function ServicesSection(): React.JSX.Element {
  return (
    <section>
      <h2>Food Photography</h2>
      <div>
        {tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
      <p>
        Additional edited photos: ₱250/photo. Commercial advertising usage
        quoted separately.
      </p>
    </section>
  );
}
