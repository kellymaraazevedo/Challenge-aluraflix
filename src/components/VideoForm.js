import React, { useState, useEffect } from 'react';

function VideoForm({ onSubmit, videoToEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  
  useEffect(() => {
    if (videoToEdit) {
      setTitle(videoToEdit.title);
      setDescription(videoToEdit.description);
      setUrl(videoToEdit.url || ''); 
    } else {
      setTitle('');
      setDescription('');
      setUrl('');
    }
  }, [videoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && url) {
      onSubmit({ title, description, url });
      setTitle('');
      setDescription('');
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título do vídeo"
        />
      </div>
      <div>
        <label>Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do vídeo"
        />
      </div>
      <div>
        <label>URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL do vídeo"
        />
      </div>
      <button type="submit">
        {videoToEdit ? 'Atualizar Vídeo' : 'Adicionar Vídeo'}
      </button>
    </form>
  );
}

export default VideoForm;
