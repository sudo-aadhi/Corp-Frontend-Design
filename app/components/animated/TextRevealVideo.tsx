"use client";
import React from "react";

const heroSource = "/hero.mp4";

const TextRevealVideo = () => {
  return (
    <div className="flex items-center justify-center w-[1368px] h-[855px] relative top-[120px]">
      <video
        className="w-full h-full object-cover rounded-3xl"
        preload="none"
        autoPlay
        loop
        muted
      >
        <source src={heroSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TextRevealVideo;
