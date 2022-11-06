import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

//PAGES
import Dashboard from './pages/Dashboard/dashboard';
import VideoCall from './pages/VideoCall/videoCall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/video-call" element={<VideoCall />} />
      </Routes>

    </Router>
  );
}

export default App;
