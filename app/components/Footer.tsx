import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer
      className="w-full bg-black text-white"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      <div style={{ height: 1, background: "rgba(255,255,255,0.1)" }} />

      <div
        className="flex items-center justify-between"
        style={{
          paddingLeft: "clamp(24px,8vw,120px)",
          paddingRight: "clamp(24px,8vw,120px)",
          paddingTop: "clamp(36px,5vh,56px)",
          paddingBottom: "clamp(36px,5vh,56px)",
        }}
      >
        {/* Logo */}
        <img
          src="/logo-wave.svg"
          alt="AltaMedia"
          style={{ height: 32, width: "auto", filter: "brightness(0) invert(1)" }}
        />

        {/* Center: copyright + contact */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 400, margin: 0 }}>
            © {new Date().getFullYear()} AltaMedia. All rights reserved.
          </p>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}>·</span>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 400, margin: 0 }}>
            sales@altamedia.ai
          </p>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}>·</span>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 400, margin: 0 }}>
            +63 917 306 2211
          </p>
        </div>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/altamediaads"
          aria-label="AltaMedia on Facebook"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1, textDecoration: "none" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
