
"use client";

import { useEffect, useRef } from "react";

type FilmVideoProps = {
  src: string;
};

// Keeps track of the video the visitor last clicked.
let activeVideo: HTMLVideoElement | null = null;

export default function FilmVideo({ src }: FilmVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (activeVideo !== video) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          video.muted = false;
        } else {
          video.muted = true;
        }
      },
      { threshold: [0, 0.5] }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    // Mute the previously selected video.
    if (activeVideo && activeVideo !== video) {
      activeVideo.muted = true;
    }

    // Make this the active video.
    activeVideo = video;

    video.controls = true;
    video.muted = false;
    video.play().catch(() => {});
  };

  return (
    <video
      ref={videoRef}
      className="aspect-video w-full bg-black object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controlsList="nofullscreen"
      disablePictureInPicture
      onClick={handleClick}
    >
      Your browser does not support video playback.
    </video>
  );
}
