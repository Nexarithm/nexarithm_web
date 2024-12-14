import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-center items-center bg-gray-800">
      <header className="w-[1200px] p-2 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img src="/Nexarithm_Avatar.webp" alt="Logo" className="w-16 h-16 rounded-full" />
            <span className="text-white text-xl font-bold ml-3">/ Nexarithm</span>
          </div>
        </Link>

        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-6 text-white">
            <li><Link to="/blogs" className="hover:text-gray-300">MICROBLOGS</Link></li>
            <li><Link to="/projects" className="hover:text-gray-300">PROJECTS</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">ABOUT</Link></li>
          </ul>
        </nav>

        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="https://x.com/nexarithm" className="hover:text-gray-300">Twitter</a>
            </li>
            <li>
              <a href="https://bsky.app/profile/nexarithm.bsky.social" className="hover:text-gray-300">BlueSky</a>
            </li>
            <li>
              <a href="https://github.com/Nexarithm" className="hover:text-gray-300">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
