import GalleryGrid from "./GalleryGrid";
import Footer from "../components/Footer";

interface Photo { src: string; alt: string; forcedRatio?: string }
interface Property { name: string; photos: Photo[] }

const properties: Property[] = [
  {
    name: "BHive Hotel",
    photos: [
      { src: "/pics/bhive/5-11-26 BHive Hotel - Common Area 1.webp", alt: "BHive Hotel — common area" },
      { src: "/pics/bhive/5-11-26 BHive Hotel - Family Room 01 1.webp", alt: "BHive Hotel — family room" },
      { src: "/pics/bhive/5-11-26 BHive Hotel - Suite Room 01 1.webp", alt: "BHive Hotel — suite room" },
      { src: "/pics/bhive/5-11-26 BHive Hotel - Room 203 1.webp", alt: "BHive Hotel — room 203" },
      { src: "/pics/bhive/5-11-26 BHive Hotel - Room 305 2.webp", alt: "BHive Hotel — room 305" },
      { src: "/pics/bhive/5-11-26 BHive Hotel - Room 306 3.webp", alt: "BHive Hotel — room 306" },
    ],
  },
  {
    name: "Placeholder Property 02",
    photos: [
      { src: "", alt: "Placeholder Property 02 — photo 1" },
      { src: "", alt: "Placeholder Property 02 — photo 2" },
      { src: "", alt: "Placeholder Property 02 — photo 3" },
      { src: "", alt: "Placeholder Property 02 — photo 4" },
      { src: "", alt: "Placeholder Property 02 — photo 5" },
      { src: "", alt: "Placeholder Property 02 — photo 6" },
      { src: "", alt: "Placeholder Property 02 — photo 7" },
      { src: "", alt: "Placeholder Property 02 — photo 8" },
      { src: "", alt: "Placeholder Property 02 — photo 9" },
    ],
  },
];

function buildColumns(photos: Photo[]): Photo[][] {
  if (photos.length === 9) {
    return [
      [photos[0], photos[3], photos[6]],
      [photos[1], photos[4], photos[7]],
      [photos[2], photos[5], photos[8]],
    ];
  }
  return [
    [photos[0], photos[4]],
    [photos[1], photos[5]],
    [photos[2], photos[6]],
    [photos[7], { ...photos[3], forcedRatio: "2752/1536" }],
  ];
}

export default function PropertyPhotographyPage() {
  return (
    <>
    <main
      className="relative min-h-screen w-full bg-black text-white"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      {/* Back */}
      <div className="absolute top-6 left-5 md:top-8 md:left-8 z-10">
        <a
          href="/"
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
          }}
        >
          ← Back
        </a>
      </div>

      {/* Page header */}
      <div style={{ paddingLeft: "8vw", paddingRight: "5%", paddingTop: "clamp(40px,6vh,72px)" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.42)",
            fontWeight: 400,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            fontSize: "clamp(38px,5vw,72px)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(48px,8vh,96px)",
          }}
        >
          Property
          <br />
          Photography
        </h1>
      </div>

      {/* Property galleries */}
      <div className="flex flex-col" style={{ paddingBottom: "clamp(64px,10vh,120px)" }}>
        {properties.map((property, ri) => (
          <div
            key={property.name}
            style={{
              paddingLeft: "8vw",
              paddingRight: "5%",
              marginBottom: ri < properties.length - 1 ? "clamp(64px,10vh,120px)" : 0,
            }}
          >
            {/* Property label */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: "clamp(20px,3vh,32px)" }}>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.32)", letterSpacing: "0.15em", fontWeight: 400 }}>
                0{ri + 1}
              </p>
              <p style={{ fontSize: "clamp(16px,1.6vw,22px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
                {property.name}
              </p>
            </div>

            {/* Thin rule */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: "clamp(20px,3vh,32px)" }} />

            <GalleryGrid columns={buildColumns(property.photos)} />
          </div>
        ))}
      </div>
    </main>
    <Footer />
    </>
  );
}
