import React from 'react';

function VideoList({ videos, onEdit, onDelete }) {
  
  const getEmbedUrl = (url) => {
    const videoId = extractVideoId(url);
    return `https://www.youtube.com/embed/${videoId}`;
  };

  
  const extractVideoId = (url) => {
    let videoId = null;
    
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    if (match) {
      videoId = match[1];
    }
    return videoId;
  };

  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          {}
          {video.url && (
            <iframe
              width="400"
              height="315"
              src={getEmbedUrl(video.url)}  
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <div className="actions">
            <button onClick={() => onEdit(video)}>Editar</button>
            <button onClick={() => onDelete(video.id)}>Deletar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
