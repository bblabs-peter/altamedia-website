import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact — AltaMedia",
  description: "Get in touch with AltaMedia.",
};

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const contacts = [
  {
    label: "Email",
    value: "sales@altamedia.ai",
    href: null,
    icon: null,
  },
  {
    label: "Phone",
    value: "+63 917 306 2211",
    href: null,
    icon: null,
  },
  {
    label: "Facebook",
    value: "AltaMedia",
    href: "https://www.facebook.com/altamediaads",
    icon: <FacebookIcon />,
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col h-screen bg-black" style={{ fontFamily: "var(--font-bricolage)" }}>
    <main
      className="flex-1 text-white relative overflow-hidden"
    >
      <div className="absolute top-6 left-5 md:top-8 md:left-8 z-10">
        <Link
          href="/"
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          ← Back
        </Link>
      </div>

      <div
        style={{
          paddingTop: "clamp(100px,16vh,160px)",
          paddingBottom: "clamp(64px,10vh,120px)",
          paddingLeft: "clamp(28px,10vw,160px)",
          paddingRight: "clamp(28px,10vw,160px)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px,6vw,88px)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(48px,8vh,96px)",
          }}
        >
          Get in
          <br />
          touch.
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "clamp(2px,0.3vw,4px)",
          }}
        >
          {contacts.map(({ label, value, href, icon }: { label: string; value: string; href: string | null; icon: React.ReactNode }) => (
            <div
              key={label}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "clamp(24px,3vw,40px)",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.32)",
                  marginBottom: 10,
                }}
              >
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "clamp(14px,1.3vw,20px)",
                    fontWeight: 600,
                    color: "#ffffff",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {icon}
                  {value}
                </a>
              ) : (
                <span
                  style={{
                    fontSize: "clamp(14px,1.3vw,20px)",
                    fontWeight: 600,
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                    display: "block",
                  }}
                >
                  {value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </div>
  );
}
