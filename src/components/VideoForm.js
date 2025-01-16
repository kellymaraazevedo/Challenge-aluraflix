// import React, { useState, useEffect } from 'react';

// function VideoForm({ onSubmit, videoToEdit }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     if (videoToEdit) {
//       setTitle(videoToEdit.title);
//       setDescription(videoToEdit.description);
//     } else {
//       setTitle('');
//       setDescription('');
//     }
//   }, [videoToEdit]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, description });
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{videoToEdit ? 'Editar Vídeo' : 'Adicionar Vídeo'}</h2>
      
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Título do vídeo"
//       />
      
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Descrição do vídeo"
//       />

//       <button type="submit">{videoToEdit ? 'Atualizar' : 'Adicionar'}</button>
//     </form>
//   );
// }

// export default VideoForm;


import React, { useState, useEffect } from 'react';

function VideoForm({ onSubmit, videoToEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Quando o vídeo a ser editado mudar, ele atualiza o estado com os dados do vídeo
  useEffect(() => {
    if (videoToEdit) {
      setTitle(videoToEdit.title);  // Preenche o título do vídeo no formulário
      setDescription(videoToEdit.description);  // Preenche a descrição do vídeo
    } else {
      setTitle('');  // Limpa os campos quando não há vídeo para editar
      setDescription('');
    }
  }, [videoToEdit]); // Quando videoToEdit mudar, o formulário é preenchido com os dados

  // Função que é chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Se há um vídeo sendo editado, passa o id e os dados atualizados
    if (videoToEdit) {
      onSubmit({ id: videoToEdit.id, title, description });
    } else {
      onSubmit({ title, description });  // Caso contrário, chama a função de adicionar
    }

    // Limpa os campos após o envio
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{videoToEdit ? 'Editar Vídeo' : 'Adicionar Vídeo'}</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título do vídeo"
        required
      />
      
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição do vídeo"
        required
      />
      
      <button type="submit">{videoToEdit ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
}

export default VideoForm;
