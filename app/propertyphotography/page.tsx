import GalleryGrid, { type Photo } from "../components/GalleryGrid";
import Footer from "../components/Footer";
interface Property { name: string; photos: Photo[] }

const properties: Property[] = [
  {
    name: "Rosebert Suites",
    photos: [
      { src: "/pics/rosebert/Rosebert Suites_006.webp", alt: "Rosebert Suites — guest suite" },
      { src: "/pics/rosebert/1779446838569-1s5q0l2wqa9.webp", alt: "Rosebert Suites — property interior" },
      { src: "/pics/rosebert/Rosebert Suites_015.webp", alt: "Rosebert Suites — suite detail" },
      { src: "/pics/rosebert/4a511c28fdf0c325a8187e8caf49057a_c8c03aa9f3114c69b84fe6d95d4f209a.webp", alt: "Rosebert Suites — furnished interior" },
      { src: "/pics/rosebert/Rosebert Suites_002.webp", alt: "Rosebert Suites — bedroom" },
      { src: "/pics/rosebert/Rosebert Suites_021.webp", alt: "Rosebert Suites — lounge area" },
      { src: "/pics/rosebert/f03020293ed39273c4c315f1c13e1158_1_1779446750_6814.webp", alt: "Rosebert Suites — room detail" },
      { src: "/pics/rosebert/Rosebert Suites_008.webp", alt: "Rosebert Suites — suite interior" },
      { src: "/pics/rosebert/Rosebert Suites_001.webp", alt: "Rosebert Suites — room interior" },
      { src: "/pics/rosebert/1779446770803-alrw91oik4l.webp", alt: "Rosebert Suites — property detail" },
      { src: "/pics/rosebert/Rosebert Suites_018.webp", alt: "Rosebert Suites — furnished suite" },
      { src: "/pics/rosebert/Rosebert Suites_004.webp", alt: "Rosebert Suites — guest room" },
      { src: "/pics/rosebert/Rosebert Suites_013.webp", alt: "Rosebert Suites — suite amenity" },
      { src: "/pics/rosebert/Rosebert Suites_005.webp", alt: "Rosebert Suites — property room" },
    ],
  },
  {
    name: "Empress Palace Pension",
    photos: [
      { src: "/pics/empress/Empress - WEBP_001.webp", alt: "Empress Palace Pension — interior 1" },
      { src: "/pics/empress/Empress - WEBP_002.webp", alt: "Empress Palace Pension — interior 2" },
      { src: "/pics/empress/Empress - WEBP_003.webp", alt: "Empress Palace Pension — interior 3" },
      { src: "/pics/empress/Empress - WEBP_004.webp", alt: "Empress Palace Pension — interior 4" },
      { src: "/pics/empress/Empress - WEBP_005.webp", alt: "Empress Palace Pension — interior 5" },
      { src: "/pics/empress/Empress - WEBP_006.webp", alt: "Empress Palace Pension — interior 6" },
      { src: "/pics/empress/Empress - WEBP_007.webp", alt: "Empress Palace Pension — interior 7" },
      { src: "/pics/empress/Empress - WEBP_008.webp", alt: "Empress Palace Pension — interior 8" },
      { src: "/pics/empress/Empress - WEBP_009.webp", alt: "Empress Palace Pension — interior 9" },
      { src: "/pics/empress/Empress - WEBP_010.webp", alt: "Empress Palace Pension — interior 10" },
      { src: "/pics/empress/Empress - WEBP_011.webp", alt: "Empress Palace Pension — interior 11" },
      { src: "/pics/empress/Empress - WEBP_012.webp", alt: "Empress Palace Pension — interior 12" },
      { src: "/pics/empress/Empress - WEBP_013.webp", alt: "Empress Palace Pension — interior 13" },
      { src: "/pics/empress/Empress - WEBP_014.webp", alt: "Empress Palace Pension — interior 14" },
      { src: "/pics/empress/Empress - WEBP_015.webp", alt: "Empress Palace Pension — interior 15" },
      { src: "/pics/empress/Empress - WEBP_016.webp", alt: "Empress Palace Pension — interior 16" },
    ],
  },
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
    name: "Pitstop",
    photos: [
      { src: "/pics/pitstop/Pitstop - 208 35.webp", alt: "Pitstop — room 208" },
      { src: "/pics/pitstop/Pitstop - Executive 201 37.webp", alt: "Pitstop — executive room 201" },
      { src: "/pics/pitstop/Pitstop - Executive 304 29.webp", alt: "Pitstop — executive room 304" },
      { src: "/pics/pitstop/1776330800108-9tctn8zz6hf.webp", alt: "Pitstop — property interior detail" },
      { src: "/pics/pitstop/1776332618694-vuiu7d7t7fg.webp", alt: "Pitstop — property room interior" },
      { src: "/pics/pitstop/dfde59f93ab105d4dbb94370daaf1e621934846.webp", alt: "Pitstop — furnished room" },
    ],
  },
];


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

            <GalleryGrid photos={property.photos} />
          </div>
        ))}
      </div>
    </main>
    <Footer />
    </>
  );
}
