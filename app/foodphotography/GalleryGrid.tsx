"use client";

import { useState } from "react";

interface Photo { src: string; alt: string; forcedRatio?: string }

interface Props {
  columns: Photo[][];
}

export default function GalleryGrid({ columns }: Props) {
  const [active, setActive] = useState<Photo | null>(null);
  const gap = "clamp(6px,0.8vw,12px)";

  return (
    <>
      <div style={{ display: "flex", gap, alignItems: "flex-start" }}>
        {columns.map((col, ci) => (
          <div key={ci} style={{ flex: 1, display: "flex", flexDirection: "column", gap }}>
            {col.filter(Boolean).map((photo, pi) =>
              photo.src ? (
                <div
                  key={pi}
                  onClick={() => setActive(photo)}
                  style={{
                    overflow: "hidden",
                    cursor: "pointer",
                    ...(photo.forcedRatio ? { aspectRatio: photo.forcedRatio } : {}),
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      display: "block",
                      height: photo.forcedRatio ? "100%" : undefined,
                      objectFit: photo.forcedRatio ? "cover" : undefined,
                      transition: "opacity 0.2s",
                    }}
                  />
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "clamp(24px,5vw,80px)",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setActive(null)}
            style={{
              position: "absolute",
              top: 24,
              right: 28,
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              fontSize: 28,
              lineHeight: 1,
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Image — stop click from bubbling to overlay */}
          <img
            src={active.src}
            alt={active.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      )}
    </>
  );
}
