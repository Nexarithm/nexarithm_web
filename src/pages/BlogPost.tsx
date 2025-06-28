import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { createBlogPostStructuredData, createBreadcrumbStructuredData } from '../utils/structuredData';

export default function BlogPost() {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const post = blogs.find(blog => blog.id === blogId);

  if (!post || post.externalLink) {
    navigate('/blogs');
    return null;
  }

  // Create description from content (first 160 characters)
  const description = post.content ? post.content.trim().substring(0, 160).replace(/\n/g, ' ') + '...' : '';
  
  // Format date for structured data
  const publishedDate = new Date(post.date).toISOString();
  
  // Create structured data
  const blogStructuredData = createBlogPostStructuredData({
    title: post.title,
    description,
    author: 'Nexarithm',
    publishedDate: post.date,
    url: `/blog/${post.id}`
  });
  
  const breadcrumbStructuredData = createBreadcrumbStructuredData([
    { label: 'Blogs', url: '/blogs' },
    { label: post.title }
  ]);
  
  // Combine structured data
  const combinedStructuredData = [blogStructuredData, breadcrumbStructuredData];

  return (
    <>
      <SEO
        title={post.title}
        description={description}
        url={`/blog/${post.id}`}
        type="article"
        author="Nexarithm"
        publishedTime={publishedDate}
        tags={['blog', 'technology', 'AI', 'development']}
        structuredData={combinedStructuredData}
      />
      <main className="flex flex-col items-center p-2 md:p-5">
        <article className="prose prose-sm md:prose prose-slate w-full max-w-[800px] bg-white p-4 md:p-8 rounded-lg shadow">
          <Breadcrumbs items={[
            { label: 'Blogs', path: '/blogs' },
            { label: post.title }
          ]} />
        <h1 className="text-2xl md:text-4xl">{post.title}</h1>
        <p className="text-gray-600 text-sm md:text-base">Posted on {post.date}</p>
        <ReactMarkdown className="text-sm md:text-base">{post.content}</ReactMarkdown>
        <div className="mt-4">
          Follow me on: <br/>
          <a href="https://nexarithm.com" className="text-blue-500 hover:text-blue-600">nexarithm.com</a> <br/>
          <a href="https://x.com/nexarithm" className="text-blue-500 hover:text-blue-600">x.com/nexarithm</a> <br/>
          <a href="https://www.proxai.co/blog" className="text-blue-500 hover:text-blue-600">proxai.co/blog</a>
        </div>
        </article>
      </main>
    </>
  );
}
