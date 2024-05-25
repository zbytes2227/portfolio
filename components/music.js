"use client"
import React, { useEffect, useRef } from 'react'

const BackgroundMusic = () => {
    const audioRef = useRef(null);

	useEffect(() => {
	  const playAudio = () => {
		if (audioRef.current) {
		  audioRef.current.play().catch(error => {
			console.error("Failed to play audio:", error);
		  });
		}
	  };
  
	  // Listen for user interaction to start playing the audio
	  document.addEventListener('click', playAudio);
  
	  return () => {
		document.removeEventListener('click', playAudio);
	  };
	}, []);
  return (
    <audio ref={audioRef} src="bg_music.mp3" loop />
  )
}

export default BackgroundMusic