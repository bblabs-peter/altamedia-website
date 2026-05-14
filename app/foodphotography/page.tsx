import GalleryGrid from "./GalleryGrid";
import Footer from "../components/Footer";

interface Photo { src: string; alt: string; forcedRatio?: string }
interface Restaurant { name: string; photos: Photo[] }

const restaurants: Restaurant[] = [
  {
    name: "Balay Sang Amo",
    photos: [
      { src: "/pics/bsa/1778579297095-tykjw5gl7kp.png", alt: "Balay Sang Amo — photo 1" },
      { src: "/pics/bsa/1778578969424-va2kcb09chq.png", alt: "Balay Sang Amo — photo 2" },
      { src: "/pics/bsa/1778580247139-plk6v6g9h4.png", alt: "Balay Sang Amo — photo 3" },
      { src: "/pics/bsa/Gemini_Generated_Image_8zbw5u8zbw5u8zbw.png", alt: "Balay Sang Amo — photo 4" },
      { src: "/pics/bsa/1778579788339-r7azlh2emsj.png", alt: "Balay Sang Amo — photo 5" },
      { src: "/pics/bsa/1778578332590-683r8j3h61o.png", alt: "Balay Sang Amo — photo 6" },
      { src: "/pics/bsa/1778580698696-3w3tuz1nlix.png", alt: "Balay Sang Amo — photo 7" },
      { src: "/pics/bsa/1778578979189-lsz8kg7ast.png", alt: "Balay Sang Amo — photo 8" },
    ],
  },
  {
    name: "Space Bar",
    photos: [
      { src: "/pics/space/bbfd4730-90d7-411a-bfa4-0ddd532a0479.png", alt: "Space Bar — photo 1" },
      { src: "/pics/space/1778651417812-03le3kth04z9.png", alt: "Space Bar — photo 2" },
      { src: "/pics/space/1778652211486-oonmd9d7ez.png", alt: "Space Bar — photo 3" },
      { src: "/pics/space/Gemini_Generated_Image_xvoinpxvoinpxvoi (1).png", alt: "Space Bar — photo 4" },
      { src: "/pics/space/1778655124430-7isbx6dpsmg.png", alt: "Space Bar — photo 5" },
      { src: "/pics/space/1778652818331-s9dxtq4820h.png", alt: "Space Bar — photo 6" },
      { src: "/pics/space/Gemini_Generated_Image_v4fc2sv4fc2sv4fc.png", alt: "Space Bar — photo 7" },
      { src: "/pics/space/Gemini_Generated_Image_ys11m1ys11m1ys11.png", alt: "Space Bar — photo 8" },
      { src: "/pics/space/Gemini_Generated_Image_9kuuvt9kuuvt9kuu.png", alt: "Space Bar — photo 9" },
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

export default function FoodPhotographyPage() {
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
          Food
          <br />
          Photography
        </h1>
      </div>

      {/* Restaurant galleries */}
      <div className="flex flex-col" style={{ paddingBottom: "clamp(64px,10vh,120px)" }}>
        {restaurants.map((restaurant, ri) => (
          <div
            key={restaurant.name}
            style={{
              paddingLeft: "8vw",
              paddingRight: "5%",
              marginBottom: ri < restaurants.length - 1 ? "clamp(64px,10vh,120px)" : 0,
            }}
          >
            {/* Restaurant label */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: "clamp(20px,3vh,32px)" }}>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.32)", letterSpacing: "0.15em", fontWeight: 400 }}>
                0{ri + 1}
              </p>
              <p style={{ fontSize: "clamp(16px,1.6vw,22px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
                {restaurant.name}
              </p>
            </div>

            {/* Thin rule */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: "clamp(20px,3vh,32px)" }} />

            <GalleryGrid columns={buildColumns(restaurant.photos)} />
          </div>
        ))}
      </div>
    </main>
    <Footer />
    </>
  );
}
