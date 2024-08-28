import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SongList from './components/SongList';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    axios.get('https://cms.samespace.com/items/songs')
      .then(response => {
        setSongs(response.data.data);
        setCurrentSong(response.data.data[0]); // Set the first song as default
      })
      .catch(error => console.error('Error fetching data', error));
  }, []);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <SongList songs={songs} onSongSelect={handleSongSelect} />
        {currentSong && <MusicPlayer song={currentSong} />}
      </div>
    </div>
  );
};

export default App;
