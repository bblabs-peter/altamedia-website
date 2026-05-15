import ServicesSection from "./components/ServicesSection";
import GalleryPreview from "./components/GalleryPreview";
import PropertyPreview from "./components/PropertyPreview";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <main
      className="relative w-screen h-screen bg-black text-white overflow-hidden"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/pics/bsa/1778580247139-plk6v6g9h4.png"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/vids/hero.webm" type="video/webm" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      {/* Bottom fade to black */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "20%",
          background: "linear-gradient(to bottom, transparent, #000)",
          zIndex: 2,
        }}
      />

      {/* Logo — always top-left */}
      <div className="absolute top-6 left-5 md:top-8 md:left-8 z-10">
        <img
          src="/logo-wave.svg"
          alt="AltaMedia"
          style={{ height: 44, width: "auto", filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* ════════════════════════════
          MOBILE  (hidden on md+)
      ════════════════════════════ */}
      {/* paddingTop: 100px clears the absolute logo (top:24px + height:44px = 68px) with room to breathe */}
      <div
        className="relative flex flex-col h-full md:hidden"
        style={{ paddingTop: 100, paddingBottom: 40, paddingLeft: 28, paddingRight: 28, zIndex: 10 }}
      >
        <h1
          className="font-extrabold leading-[0.92] tracking-tight"
          style={{ letterSpacing: "-0.02em", textShadow: "0 2px 16px rgba(0,0,0,0.8)" }}
        >
          <span style={{ display: "block", fontSize: "clamp(48px, 12vw, 72px)" }}>AltaMedia</span>
          <span style={{ display: "block", fontSize: "clamp(28px, 7vw, 44px)", fontWeight: 500, color: "rgba(255,255,255,0.75)", marginTop: "0.15em" }}>Digital Marketing</span>
        </h1>

        {/* larger top spacer pushes middle content further down */}
        <div className="flex-[2]" />

        <div className="flex flex-col items-center text-center">
          <p className="font-bold leading-snug" style={{ fontSize: 17, textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
            We create impactful
            <br />
            automated marketing.
          </p>
          <p
            className="leading-relaxed mt-4"
            style={{ fontSize: 13, color: "rgba(255,255,255,0.68)", fontWeight: 400 }}
          >
            AltaMedia transforms businesses with creative design and automated
            marketing solutions, driving long-term growth.
          </p>
        </div>

        <div className="flex-1" />

        <div className="flex gap-4">
          <div style={{ width: 1, background: "rgba(255,255,255,0.45)", flexShrink: 0 }} />
          <div className="flex flex-col gap-5">
            <div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", marginBottom: 6 }}>01</p>
              <p style={{ fontSize: 16 }}>Creative brand design</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", marginBottom: 6 }}>02</p>
              <p style={{ fontSize: 16 }}>Automated marketing</p>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════
          DESKTOP  (hidden below md)
      ════════════════════════════ */}
      <div className="relative hidden md:flex h-full" style={{ zIndex: 10 }}>

        {/* PORTFOLIO sidebar */}
        <div className="flex-shrink-0 w-14 flex items-center justify-center">
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: 9,
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.42)",
              fontWeight: 400,
            }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* Main content column */}
        <div className="flex flex-col flex-1" style={{ paddingLeft: "8vw" }}>
          {/* 28vh spacer — headline always starts below logo */}
          <div style={{ height: "28vh" }} />

          <h1
            style={{
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 16px rgba(0,0,0,0.8)",
            }}
          >
            <span style={{ display: "block", fontSize: "clamp(72px, 9.2vw, 134px)" }}>AltaMedia</span>
            <span style={{ display: "block", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 500, color: "rgba(255,255,255,0.72)", marginTop: "0.15em" }}>Digital Marketing</span>
          </h1>

          {/* fills remaining space, pushes bottom group down */}
          <div className="flex-1" />

          <div style={{ paddingBottom: "8vh" }}>
            <div
              style={{
                width: 1,
                height: 72,
                background: "rgba(255,255,255,0.45)",
                marginBottom: 20,
              }}
            />
            <p
              style={{
                fontSize: "clamp(15px, 1.4vw, 21px)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "clamp(28px, 3.5vh, 48px)",
                textShadow: "0 1px 8px rgba(0,0,0,0.7)",
              }}
            >
              We create impactful
              <br />
              automated marketing.
            </p>
            <div style={{ display: "flex", gap: "clamp(32px, 5vw, 100px)" }}>
              <div>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", marginBottom: 7 }}>01</p>
                <p style={{ fontSize: 13 }}>Creative brand design</p>
              </div>
              <div>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", marginBottom: 7 }}>02</p>
                <p style={{ fontSize: 13 }}>Automated marketing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body text column — aligns top with headline via same 28vh offset */}
        <div
          className="flex-shrink-0"
          style={{
            width: "clamp(200px, 20vw, 280px)",
            paddingTop: "28vh",
            paddingRight: "5%",
          }}
        >
          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 400,
            }}
          >
            AltaMedia transforms businesses with creative design and automated
            marketing solutions, driving long-term growth.
          </p>
        </div>

        {/* SCROLL DOWN sidebar */}
        <div className="flex-shrink-0 w-14 flex items-center justify-center">
          <span
            style={{
              writingMode: "vertical-lr",
              fontSize: 9,
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.42)",
              fontWeight: 400,
            }}
          >
            SCROLL DOWN
          </span>
        </div>

      </div>
    </main>
    <GalleryPreview />
    <PropertyPreview />
    <ServicesSection />
    <CTASection />
    <Footer />
</>
  );
}
