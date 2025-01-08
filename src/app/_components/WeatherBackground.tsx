// components/VideoBackground.tsx
import React from 'react';

export const VideoBackground = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <video
      key={videoSrc}
      autoPlay
      muted
      playsInline
      loop
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src={videoSrc} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};
