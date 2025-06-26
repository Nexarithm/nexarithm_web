import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Projects from './pages/Projects';
import ProxAI from './pages/ProxAI';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <div className="bg-gray-400 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:blogId" element={<BlogPost />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/proxai" element={<ProxAI />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
