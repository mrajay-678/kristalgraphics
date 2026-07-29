"use client";

import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 900;
const MAX_WAIT_MS = 4500;

export default function AssetPreloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = performance.now();

    let cancelled = false;
    let imageProgress = 0;
    let fontsLoaded = !document.fonts;
    let displayedProgress = 0;
    let hasCompleted = false;
    let fallbackTimer = 0;
    let cleanupImages = () => {};

    const finish = () => {
      if (hasCompleted) {
        return;
      }

      hasCompleted = true;
      displayedProgress = 100;
      setProgress(100);

      const elapsed = performance.now() - startedAt.current;
      window.setTimeout(
        () => {
          if (!cancelled) {
            setIsExiting(true);
            window.setTimeout(() => {
              if (!cancelled) {
                setIsDone(true);
                document.documentElement.classList.remove(
                  "asset-preloader-active",
                );
              }
            }, 720);
          }
        },
        Math.max(0, MIN_VISIBLE_MS - elapsed),
      );
    };

    const updateProgress = () => {
      const targetBeforeDone = Math.min(
        99,
        Math.round(imageProgress * 84 + (fontsLoaded ? 15 : 0)),
      );

      const target =
        imageProgress === 1 && fontsLoaded ? 100 : targetBeforeDone;

      displayedProgress = Math.max(displayedProgress, target);
      setProgress(displayedProgress);

      if (target === 100) {
        finish();
      }
    };

    const watchImages = () => {
      const images = Array.from(document.images);

      if (images.length === 0) {
        imageProgress = 1;
        updateProgress();
        return;
      }

      let loadedImages = images.filter((image) => image.complete).length;
      imageProgress = loadedImages / images.length;
      updateProgress();

      const markLoaded = () => {
        loadedImages += 1;
        imageProgress = Math.min(1, loadedImages / images.length);
        updateProgress();
      };

      images
        .filter((image) => !image.complete)
        .forEach((image) => {
          image.addEventListener("load", markLoaded, { once: true });
          image.addEventListener("error", markLoaded, { once: true });
        });

      cleanupImages = () => {
        images.forEach((image) => {
          image.removeEventListener("load", markLoaded);
          image.removeEventListener("error", markLoaded);
        });
      };
    };

    document.documentElement.classList.add("asset-preloader-active");
    fallbackTimer = window.setTimeout(finish, MAX_WAIT_MS);

    if (document.fonts) {
      document.fonts.ready
        .then(() => {
          fontsLoaded = true;
          updateProgress();
        })
        .catch(() => {
          fontsLoaded = true;
          updateProgress();
        });
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) {
          watchImages();
          updateProgress();
        }
      });
    });

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      document.documentElement.classList.remove("asset-preloader-active");
      cleanupImages();
    };
  }, []);

  if (isDone) {
    return null;
  }

  return (
    <div
      className={`kg-preloader${isExiting ? " kg-preloader--done" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      {/* <div className="kg-preloader__grain" /> */}
      <div className="kg-preloader__content">
        <div className="kg-preloader__bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <div className="kg-preloader__count">
          <span>{progress}</span>
          <small>%</small>
        </div>
      </div>
    </div>
  );
}
