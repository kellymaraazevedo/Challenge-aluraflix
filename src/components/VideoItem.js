import React from 'react';

function VideoItem({ video, onEdit, onDelete }) {
  return (
    <div className="video-item">
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <button onClick={() => onEdit(video)}>Editar</button>
      <button onClick={() => onDelete(video.id)}>Excluir</button>
    </div>
  );
}

export default VideoItem;
