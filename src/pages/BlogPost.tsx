import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const post = blogs.find(blog => blog.id === blogId);

  if (!post) {
    navigate('/blogs');
    return null;
  }

  return (
    <main className="flex flex-col items-center p-5">
      <article className="prose prose-slate max-w-[800px] w-full bg-white p-8 rounded-lg shadow">
        <h1>{post.title}</h1>
        <p className="text-gray-600">Posted on {post.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
}
