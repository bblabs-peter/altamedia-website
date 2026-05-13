import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
    <main
      className="relative w-screen h-screen bg-black text-white overflow-hidden"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
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
      <div className="flex flex-col h-full px-6 pt-28 pb-10 md:hidden">
        <h1
          className="font-extrabold leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(58px, 15vw, 88px)", letterSpacing: "-0.02em" }}
        >
          Digital
          <br />
          Marketing
        </h1>

        <div className="mt-8 mb-8">
          <div
            style={{
              width: 1,
              height: 52,
              background: "rgba(255,255,255,0.45)",
              marginBottom: 16,
            }}
          />
          <p className="font-bold leading-snug" style={{ fontSize: 18 }}>
            We create impactful
            <br />
            automated marketing.
          </p>
        </div>

        <p
          className="leading-relaxed"
          style={{ fontSize: 13.5, color: "rgba(255,255,255,0.68)", fontWeight: 400 }}
        >
          AltaMedia transforms businesses with creative design and automated
          marketing solutions, driving long-term growth.
        </p>

        <div className="flex mt-auto gap-10">
          <div>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.32)", marginBottom: 6 }}>01</p>
            <p style={{ fontSize: 13 }}>Creative brand design</p>
          </div>
          <div>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.32)", marginBottom: 6 }}>02</p>
            <p style={{ fontSize: 13 }}>Automated marketing</p>
          </div>
        </div>
      </div>

      {/* ════════════════════════════
          DESKTOP  (hidden below md)
      ════════════════════════════ */}
      <div className="hidden md:flex h-full">

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
              fontSize: "clamp(72px, 9.2vw, 134px)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
            }}
          >
            Digital
            <br />
            Marketing
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
    <ServicesSection />
    </>
  );
}
