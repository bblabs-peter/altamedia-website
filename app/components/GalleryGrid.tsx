"use client";

import { useEffect, useRef, useState } from "react";

export interface Photo { src: string; alt: string }

interface Props {
  photos: Photo[];
}

const SWIPE_THRESHOLD = 50;

function clampIndex(index: number, photos: Photo[]): number {
  return Math.min(Math.max(index, 0), Math.max(photos.length - 1, 0));
}

export default function GalleryGrid({ photos }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const gap = "clamp(6px,0.8vw,12px)";
  const active = activeIndex === null ? null : photos[activeIndex] ?? null;

  const close = () => setActiveIndex(null);

  const openPhoto = (photoIndex: number) => {
    setActiveIndex(clampIndex(photoIndex, photos));
  };

  const showPrevious = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return clampIndex(currentIndex - 1, photos);
    });
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return clampIndex(currentIndex + 1, photos);
    });
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, photos]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];

    if (!touch) {
      return;
    }

    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];

    touchStartRef.current = null;

    if (!start || !touch) {
      return;
    }

    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;

    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) {
      return;
    }

    if (dx > 0) {
      showPrevious();
      return;
    }

    showNext();
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap }}>
        {photos.map((photo, index) =>
          photo.src ? (
            <div
              key={`${photo.src}-${index}`}
              onClick={() => openPhoto(index)}
              style={{
                aspectRatio: "3 / 4",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  transition: "opacity 0.2s",
                }}
              />
            </div>
          ) : null
        )}
      </div>

      {/* Modal */}
      {active && activeIndex !== null && (
        <div
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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
            onClick={close}
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

          {activeIndex > 0 && (
            <button
              type="button"
              className="hidden md:flex"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
              style={{
                position: "absolute",
                left: "clamp(16px,3vw,48px)",
                top: "50%",
                transform: "translateY(-50%)",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.65)",
                fontSize: "clamp(42px,6vw,72px)",
                lineHeight: 1,
                cursor: "pointer",
                padding: 0,
              }}
            >
              ‹
            </button>
          )}

          {activeIndex < photos.length - 1 && (
            <button
              type="button"
              className="hidden md:flex"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              style={{
                position: "absolute",
                right: "clamp(16px,3vw,48px)",
                top: "50%",
                transform: "translateY(-50%)",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.65)",
                fontSize: "clamp(42px,6vw,72px)",
                lineHeight: 1,
                cursor: "pointer",
                padding: 0,
              }}
            >
              ›
            </button>
          )}

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
