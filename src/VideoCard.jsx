import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const videoId = typeof video.id === 'string' ? video.id : video.id.videoId;
  const snippet = video.snippet;

  if (!snippet || !snippet.thumbnails) return null;

  return (
    <Link to={`/video/${video.id?.videoId || video.id}`} className="video-card" style={{
      width: '300px',
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <img
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <div className="video-info" style={{
        paddingTop: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <h4 style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: 'bold',
          lineHeight: '1.2',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {snippet.title}
        </h4>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#555'
        }}>
          {snippet.channelTitle}
        </p>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#888'
        }}>
          {new Date(snippet.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

export default VideoCard;
