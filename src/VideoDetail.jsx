import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'AIzaSyDqNUyKQ8uIt8VKk0PtQZO8fGLYBqww3bY';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [subscribed, setSubscribed] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${API_KEY}`
      );
      const data = await res.json();
      setVideo(data.items?.[0]);
    };

    fetchVideoDetails();
  }, [id]);

  if (!video) return <p style={{ padding: '1rem' }}>Loading video...</p>;

  const { title, channelTitle, description } = video.snippet;

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const toggleSubscribe = () => setSubscribed(!subscribed);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([{ text: commentInput, date: new Date() }, ...comments]);
      setCommentInput('');
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '960px', margin: '0 auto' }}>
      {}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          title={title}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {}
      <h2 style={{ marginTop: '1rem' }}>{title}</h2>

      {}
      <div style={{ display: 'flex', gap: '1rem', margin: '0.5rem 0' }}>
        <button onClick={handleLike}>👍 Like ({likes})</button>
        <button onClick={handleDislike}>👎 Dislike ({dislikes})</button>
        <button onClick={toggleSubscribe}>
          {subscribed ? '✔ Subscribed' : '🔴 Subscribe'}
        </button>
      </div>

      {}
      <p><strong>Channel:</strong> {channelTitle}</p>
      <p>{description}</p>

      {}
      <div style={{ marginTop: '2rem' }}>
        <h3>Comments ({comments.length})</h3>
        <form onSubmit={handleCommentSubmit} style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Add a public comment..."
            style={{ width: '100%', padding: '8px' }}
          />
        </form>
        {comments.map((comment, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <p style={{ marginBottom: 4 }}><strong>User:</strong></p>
            <p>{comment.text}</p>
            <small>{comment.date.toLocaleString()}</small>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;
