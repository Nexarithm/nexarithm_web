import { FC } from 'react';
import { Link } from 'react-router-dom';

const Blogs: FC = () => {
  return (
    <main className="flex flex-col items-center p-5">
      <div className="max-w-[800px] w-full">
        <h1 className="text-2xl font-bold mb-5">Microblogs</h1>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow">
            <Link to="/blog/1" className="block">
              <h2 className="text-xl font-bold hover:text-gray-600">
                Intentions of this site
              </h2>
              <p className="text-gray-600 mt-2">Posted on December 13, 2024</p>
            </Link>
          </li>
          {/* Add more blog posts here */}
        </ul>
      </div>
    </main>
  );
};

export default Blogs;
