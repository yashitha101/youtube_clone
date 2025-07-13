import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const API_KEY = 'AIzaSyDqNUyKQ8uIt8VKk0PtQZO8fGLYBqww3bY';

const Liked = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=IN&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setVideos(data.items || []));
  }, []);

  return (
    <div className="liked-page" style={{ padding: '1rem' }}>
      <h2>Liked Videos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {videos.map(video => (
          <VideoCard key={video.id} video={{ id: { videoId: video.id }, snippet: video.snippet }} />
        ))}
      </div>
    </div>
  );
};

export default Liked;
