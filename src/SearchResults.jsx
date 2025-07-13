import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';

const API_KEY = 'AIzaSyDqNUyKQ8uIt8VKk0PtQZO8fGLYBqww3bY';

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=12&key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [query]);

  return (
    <div className="search-results" style={{ padding: '1rem' }}>
      <h2>Results for "{query}"</h2>
      <div className="video-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
      <div className="video-grid" style={{
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'flex-start',
       gap: '1rem'
          }}>
       {videos.map((video) => (
       <VideoCard key={video.id.videoId || video.id} video={video} />
  ))}
</div>

    </div>
  );
};

export default SearchResults;
