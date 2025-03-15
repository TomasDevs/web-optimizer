import React, { useState } from "react";

const LazyYoutubeEmbed = ({ videoId, isOptimized }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`youtube-container ${
        isOptimized ? "" : "youtube-container--unoptimized"
      }`}
      onClick={() => setIsLoaded(true)}>
      {isLoaded || !isOptimized ? (
        <iframe
          width="100%"
          height={isOptimized ? "100%" : "auto"}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading={isOptimized ? "lazy" : "eager"}></iframe>
      ) : (
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="YouTube video preview"
          className="youtube-preview"
        />
      )}
    </div>
  );
};

export default LazyYoutubeEmbed;
