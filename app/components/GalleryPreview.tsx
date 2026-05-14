const photos = [
  { src: "/pics/bsa/1778579297095-tykjw5gl7kp.png", alt: "Food photography preview 1" },
  { src: "/pics/bsa/1778580247139-plk6v6g9h4.png",  alt: "Food photography preview 2" },
  { src: "/pics/bsa/1778578979189-lsz8kg7ast.png",  alt: "Food photography preview 3" },
];

export default function GalleryPreview() {
  return (
    <section
      className="w-full bg-black text-white"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      <div style={{ paddingLeft: "8vw", paddingRight: "5%", paddingTop: "clamp(48px,8vh,96px)", paddingBottom: "clamp(48px,8vh,96px)" }}>

        {/* Section label */}
        <p style={{ fontSize: "clamp(18px,2vw,26px)", letterSpacing: "0.08em", color: "rgba(255,255,255,0.85)", fontWeight: 700, marginBottom: "clamp(28px,4vh,48px)" }}>
          Portfolio — Food Photography
        </p>

        {/* 3-photo grid — 1 column on mobile, 3 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(6px,0.8vw,12px)", marginBottom: "clamp(24px,4vh,40px)" }}>
          {photos.map((photo) => (
            <div key={photo.src} style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="/foodphotography"
            style={{
              display: "inline-block",
              padding: "14px 40px",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#000000",
              background: "#ffffff",
              border: "1px solid #ffffff",
              textDecoration: "none",
            }}
          >
            View Gallery
          </a>
        </div>

      </div>
    </section>
  );
}
