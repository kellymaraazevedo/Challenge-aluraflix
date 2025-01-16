
import React, { useState } from 'react';
import './App.css';

import VideoList from './components/VideoList';
import VideoForm from './components/VideoForm';
import Footer from './components/Footer';  // Importando o Footer

function App() {
  const [videos, setVideos] = useState([
    { id: 1, title: 'Vídeo 1', description: 'Descrição do vídeo 1' },
    { id: 2, title: 'Vídeo 2', description: 'Descrição do vídeo 2' },
  ]);
  const [videoToEdit, setVideoToEdit] = useState(null);

  const handleAddVideo = (newVideo) => {
    setVideos([...videos, { id: Date.now(), ...newVideo }]);
  };

  const handleEditVideo = (video) => {
    setVideoToEdit(video);
  };

  const handleUpdateVideo = (updatedVideo) => {
    setVideos(
      videos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
    setVideoToEdit(null);
  };

  const handleDeleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <div className="App">
      <h1>AluraFlix</h1>
      <VideoForm
        onSubmit={videoToEdit ? handleUpdateVideo : handleAddVideo}
        videoToEdit={videoToEdit}
      />
      <VideoList
        videos={videos}
        onEdit={handleEditVideo}
        onDelete={handleDeleteVideo}
      />
      <Footer /> {/* Adicionando o Footer aqui */}
    </div>
  );
}

export default App;
