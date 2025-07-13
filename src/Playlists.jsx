import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const API_KEY = 'YOUR_API_KEY';

const Playlists = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=music%20playlist&type=video&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setVideos(data.items || []));
  }, []);

  return (
    <div className="playlists-page" style={{ padding: '1rem' }}>
      <h2>Music Playlists</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {videos.map(video => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
