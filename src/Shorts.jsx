
import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const API_KEY = 'AIzaSyDqNUyKQ8uIt8VKk0PtQZO8fGLYBqww3bY';

const Shorts = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=shorts&type=video&key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error('Failed to fetch shorts:', err);
      }
    };

    fetchShorts();
  }, []);

  return (
    <div className="shorts-page" style={{ padding: '1rem' }}>
      <h2>Shorts</h2>
      <div className="video-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Shorts;
