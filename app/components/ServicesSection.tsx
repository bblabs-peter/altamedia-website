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

export default function ServicesSection(): React.JSX.Element {
  return (
    <section
      className="w-full bg-black text-white"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      {/* Top rule — same weight as hero separator */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.1)" }} />

      <div style={{ paddingLeft: "8vw", paddingRight: "5%", paddingTop: "clamp(48px,8vh,96px)", paddingBottom: "clamp(48px,8vh,96px)" }}>

        {/* Section label — matches hero "PORTFOLIO" / "SCROLL DOWN" style */}
        <p style={{ fontSize: "clamp(18px,2vw,26px)", letterSpacing: "0.08em", color: "rgba(255,255,255,0.85)", fontWeight: 700, marginBottom: "clamp(40px,6vh,72px)" }}>
          Services — Food Photography
        </p>

        {/* Three columns */}
        <div className="flex flex-col md:flex-row">
          {tiers.map((tier, i) => (
            <div
              key={tier.id}
              className="flex flex-col flex-1"
              style={{
                background: "rgba(255,255,255,0.13)",
                border: "1px solid rgba(255,255,255,0.18)",
                paddingLeft: "clamp(20px,2.5vw,36px)",
                paddingRight: "clamp(20px,2.5vw,36px)",
                paddingTop: "clamp(24px,3vh,36px)",
                paddingBottom: 0,
                marginRight: i < tiers.length - 1 ? "clamp(8px,1vw,16px)" : 0,
                marginBottom: "clamp(12px,2vw,0px)",
              }}
            >
              {/* Index */}
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.32)", letterSpacing: "0.15em", fontWeight: 400, marginBottom: 14 }}>
                0{i + 1}
              </p>

              {/* Name */}
              <p style={{ fontSize: 14, fontWeight: 600, color: "#ffffff", lineHeight: 1.35, marginBottom: 6 }}>
                {tier.name}
              </p>

              {/* Most Popular badge */}
              {tier.highlighted && tier.highlightLabel && (
                <p style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 400, marginBottom: 20 }}>
                  {tier.highlightLabel}
                </p>
              )}

              {/* Price */}
              <p
                style={{
                  fontSize: "clamp(38px,3.8vw,58px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  marginTop: tier.highlighted ? 0 : 26,
                  marginBottom: "clamp(24px,3.5vh,40px)",
                }}
              >
                {tier.currency}{tier.price.toLocaleString()}
              </p>

              {/* Thin divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.75)", marginBottom: "clamp(20px,2.5vh,32px)" }} />

              {/* Inclusions */}
              <div className="flex flex-col gap-2" style={{ marginBottom: "clamp(28px,4vh,48px)" }}>
                {tier.inclusions.map((item) => (
                  <p key={item} style={{ fontSize: 12.5, color: "rgba(255,255,255,0.68)", lineHeight: 1.65, fontWeight: 400 }}>
                    {item}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <a
                href={tier.ctaHref}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  marginTop: "auto",
                  marginBottom: "clamp(24px,3vh,36px)",
                  padding: "9px 20px",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: tier.highlighted ? "#000000" : "#ffffff",
                  background: tier.highlighted ? "#ffffff" : "transparent",
                  border: tier.highlighted ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  outline: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {tier.ctaLabel}
              </a>
            </div>
          ))}

        </div>

        {/* Footnote */}
        <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", marginTop: "clamp(28px,3.5vh,40px)", fontWeight: 400, lineHeight: 1.7 }}>
          Additional edited photos: ₱250/photo.&ensp;Commercial advertising usage quoted separately.
        </p>

      </div>
    </section>
  );
}
