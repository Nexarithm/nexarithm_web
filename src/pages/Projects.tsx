import { FC } from 'react';
import { Link } from 'react-router-dom';

const Projects: FC = () => {
  return (
    <main className="flex flex-col items-center p-2 md:p-5">
      <div className="w-full max-w-[800px] px-2 md:px-4">
        <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-5">Projects</h1>
        <ul className="space-y-3 md:space-y-4">
          <li className="bg-white p-3 md:p-4 rounded-lg shadow">
            <Link to="/projects/proxai" className="block">
              <h2 className="text-lg md:text-xl font-bold hover:text-gray-600">
                ProxAI: Unified AI provider API for Developers
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Main Project</p>
            </Link>
          </li>
          <li className="bg-white p-3 md:p-4 rounded-lg shadow">
            <Link to="/projects/ai-chat-steroids" className="block">
              <h2 className="text-lg md:text-xl font-bold hover:text-gray-600">
                AI Chat on Steroids! 🚀
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Side Project</p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Projects;
