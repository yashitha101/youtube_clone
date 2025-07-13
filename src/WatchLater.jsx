import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const API_KEY = 'AIzaSyDqNUyKQ8uIt8VKk0PtQZO8fGLYBqww3bY';

const WatchLater = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=how%20to&type=video&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setVideos(data.items || []));
  }, []);

  return (
    <div className="watch-later-page" style={{ padding: '1rem' }}>
      <h2>Watch Later Suggestions</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {videos.map(video => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
