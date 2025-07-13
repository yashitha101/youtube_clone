import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const API_KEY = 'AIzaSyDqNUyKQ8uIt8VKk0PtQZO8fGLYBqww3bY';

const VideoFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPopularVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=12&key=${API_KEY}`
        );
        const data = await response.json();
        console.log('Home Page Videos:', data);
        setVideos(data.items || []);
      } catch (err) {
        console.error('Error fetching popular videos:', err);
      }
    };

    fetchPopularVideos();
  }, []);

  return (
    <div className="video-feed" style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
