import React from 'react';
import '../styles/SongList.css';

const SongList = ({ songs, onSongSelect }) => (
  <div className="song-list">
    {songs.map(song => (
      <div key={song.id} className="song-item" onClick={() => onSongSelect(song)}>
        <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} />
        <div className="song-details">
          <p>{song.title}</p>
          <p>{song.artist}</p>
        </div>
      </div>
    ))}
  </div>
);

export default SongList;
