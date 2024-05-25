// components/BackgroundVideo.js

import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="bg.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default BackgroundVideo;
