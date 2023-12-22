import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const Clips = ({ clip, imgsrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <div className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300">
        {!isPlaying && (
          <>
            <img
              src={imgsrc}
              alt="img/clips"
              className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500"
            />
            <div
              className="bg-white blur-effect-theme absolute top-0 left-0 right-0 opacity-100 z-20 w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full cursor-pointer"
              onClick={handlePlayClick}
            >
              <PlayIcon className="icon-style text-slate-900" />
            </div>
          </>
        )}
        {isPlaying && (
          <video
            autoPlay
            loop
            muted
            playsInline
            onClick={() => setIsPlaying(false)} // Click video to stop
            className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-100 z-0"
          >
            <source type="video/mp4" src={clip} />
          </video>
        )}
      </div>
    </>
  );
};

export default Clips;
