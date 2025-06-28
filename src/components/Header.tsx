import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-gray-800">
      <header className="w-full max-w-[1200px] p-2 flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <div className="flex items-center">
            <img src="/Nexarithm_Avatar.webp" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
            <span className="text-white text-lg md:text-xl font-bold ml-3">/ Nexarithm</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6`}>
          <Link to="/blogs" className="text-white hover:text-gray-300 block" onClick={handleLinkClick}>BLOGS</Link>
          <Link to="/projects" className="text-white hover:text-gray-300 block" onClick={handleLinkClick}>PROJECTS</Link>
          <Link to="/about" className="text-white hover:text-gray-300 block" onClick={handleLinkClick}>ABOUT</Link>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6`}>
          <a href="https://x.com/nexarithm" className="text-white hover:text-gray-300 block" onClick={handleLinkClick}>Twitter</a>
          <a href="https://github.com/Nexarithm" className="text-white hover:text-gray-300 block" onClick={handleLinkClick}>GitHub</a>
        </div>
      </header>
    </div>
  );
}
