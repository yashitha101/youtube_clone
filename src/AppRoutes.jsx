import { Routes, Route } from 'react-router-dom';
import VideoFeed from './VideoFeed';
import VideoDetail from './VideoDetail';
import SearchResults from './SearchResults';
import Shorts from './Shorts';
import Subscriptions from './Subscriptions';
import History from './History';
import Playlists from './Playlists';
import Liked from './Liked';
import WatchLater from './WatchLater';
import Settings from './Settings';
import ReportHistory from './ReportHistory';
import Help from './Help';
import Feedback from './Feedback';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<VideoFeed />} />
    <Route path="/video/:id" element={<VideoDetail />} />
    <Route path="/search/:query" element={<SearchResults />} />
    <Route path="/shorts" element={<Shorts />} />
    <Route path="/subscriptions" element={<Subscriptions />} />
    <Route path="/history" element={<History />} />
    <Route path="/playlists" element={<Playlists />} />
    <Route path="/liked" element={<Liked />} />
    <Route path="/watch-later" element={<WatchLater />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/report-history" element={<ReportHistory />} />
    <Route path="/help" element={<Help />} />
    <Route path="/feedback" element={<Feedback />} />
  </Routes>
);

export default AppRoutes;
