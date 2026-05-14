import React from "react";
import Link from "next/link";

export default function CTASection(): React.JSX.Element {
  return (
    <section
      className="w-full bg-white text-black"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      <div
        className="flex flex-col items-center text-center"
        style={{
          paddingTop: "clamp(64px,10vh,120px)",
          paddingBottom: "clamp(64px,10vh,120px)",
          paddingLeft: "clamp(24px,8vw,120px)",
          paddingRight: "clamp(24px,8vw,120px)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(36px,5.5vw,80px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(16px,2.5vh,28px)",
          }}
        >
          Ready to elevate your brand?
        </h2>

        <p
          style={{
            fontSize: "clamp(14px,1.3vw,18px)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "rgba(0,0,0,0.55)",
            marginBottom: "clamp(32px,5vh,56px)",
          }}
        >
          Get in touch and let&apos;s build something great.
        </p>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "#000000",
            border: "1px solid #000000",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
