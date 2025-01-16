import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ videos, onEdit, onDelete }) {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default VideoList;
