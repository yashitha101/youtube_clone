import React from 'react';
import VideoCard from './VideoCard';

const RelatedVideos = ({ videos }) => (
  <div className="related-videos">
    <h3>Related Videos</h3>
    {videos.map(video => <VideoCard key={video.id} video={video} />)}
  </div>
);

export default RelatedVideos;
