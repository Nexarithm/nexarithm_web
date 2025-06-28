import { FC } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { createWebsiteStructuredData } from '../utils/structuredData';
import { blogs } from '../data/blogs';

const Blogs: FC = () => {
  const websiteStructuredData = createWebsiteStructuredData();
  
  const microblogs = blogs.filter(blog => blog.type === 'microblog');
  const normalBlogs = blogs.filter(blog => blog.type === 'blog');

  return (
    <>
      <SEO
        title="Blogs"
        description="Read insights and thoughts about AI, development, and technology from an AI research engineer turned indie hacker."
        url="/blogs"
        type="website"
        tags={['blog', 'AI', 'development', 'technology', 'microblogs']}
        structuredData={websiteStructuredData}
      />
      <main className="flex flex-col items-center p-2 md:p-5">
        <div className="w-full max-w-[800px] px-2 md:px-4">
          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-5">Blogs</h1>

          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-5">Microblogs</h2>
          <ul className="space-y-3 md:space-y-4 mb-5">
            {microblogs.map((blog) => (
              <li key={blog.id} className="bg-white p-3 md:p-4 rounded-lg shadow">
                {blog.externalLink ? (
                  <a href={blog.externalLink} target="_blank" rel="noopener noreferrer" className="block">
                    <h2 className="text-lg md:text-xl font-bold hover:text-gray-600">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Posted on {blog.date}</p>
                  </a>
                ) : (
                  <Link to={`/blog/${blog.id}`} className="block">
                    <h2 className="text-lg md:text-xl font-bold hover:text-gray-600">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Posted on {blog.date}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-5">Blogs</h2>
          <ul className="space-y-3 md:space-y-4">
            {normalBlogs.map((blog) => (
              <li key={blog.id} className="bg-white p-3 md:p-4 rounded-lg shadow">
                {blog.externalLink ? (
                  <a href={blog.externalLink} target="_blank" rel="noopener noreferrer" className="block">
                    <h2 className="text-lg md:text-xl font-bold hover:text-gray-600">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Posted on {blog.date}</p>
                  </a>
                ) : (
                  <Link to={`/blog/${blog.id}`} className="block">
                    <h2 className="text-lg md:text-xl font-bold hover:text-gray-600">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">Posted on {blog.date}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Blogs;
