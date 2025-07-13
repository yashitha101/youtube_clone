const API_KEY = 'AIzaSyDqNUyKQ8uIt8VKk0PtQZO8fGLYBqww3bY'; 

export const fetchVideos = async (query) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=12&key=${API_KEY}`
  );
  const data = await response.json();
  return data.items;
};
