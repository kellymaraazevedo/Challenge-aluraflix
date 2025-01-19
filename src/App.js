import React, { useState } from 'react';
import './App.css';

import VideoList from './components/VideoList';
import VideoForm from './components/VideoForm';
import Footer from './components/Footer';

function App() {
  const [videos, setVideos] = useState([
    { id: 1, title: 'Vídeo 1', description: 'Criação de um formulário', url: 'https://youtu.be/m4ORMy802r8' },
    { id: 2, title: 'Vídeo 2', description: 'Front-End para iniciantes', url: 'https://youtu.be/I6xTDxkjjqk' },
    { id: 3, title: 'Vídeo 3', description: 'O que faz uma desenvolvedora front-end?', url: 'https://youtu.be/ZY3-MFxVdEw' },
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
      <Footer />
    </div>
  );
}

export default App;
