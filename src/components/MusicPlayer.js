import React, { useState, useEffect, useRef } from 'react';
import '../styles/MusicPlayer.css';

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = song.url;

    const updateProgress = () => setProgress((audio.currentTime / audio.duration) * 100);

    audio.addEventListener('timeupdate', updateProgress);

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [isPlaying, song]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} />
      <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} className="cover-img" />
      <div className="controls">
        <button onClick={() => { /* handle previous */ }} className="control-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button onClick={handlePlayPause} className="control-btn">
          {isPlaying ? (
            <i className="fas fa-pause-tilt"></i> // Custom pause button
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
        <button onClick={() => { /* handle next */ }} className="control-btn">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        min="0"
        max="100"
      />
    </div>
  );
};

export default MusicPlayer;
