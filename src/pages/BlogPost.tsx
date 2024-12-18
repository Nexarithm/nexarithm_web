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
    <main className="flex flex-col items-center p-2 md:p-5">
      <article className="prose prose-sm md:prose prose-slate w-full max-w-[800px] bg-white p-4 md:p-8 rounded-lg shadow">
        <h1 className="text-2xl md:text-4xl">{post.title}</h1>
        <p className="text-gray-600 text-sm md:text-base">Posted on {post.date}</p>
        <ReactMarkdown className="text-sm md:text-base">{post.content}</ReactMarkdown>
        <div className="mt-4">
          Follow me on: <br/>
          <a href="https://nexarithm.com" className="text-blue-500 hover:text-blue-600">nexarithm.com</a> <br/>
          <a href="https://x.com/nexarithm" className="text-blue-500 hover:text-blue-600">x.com/nexarithm</a> <br/>
          <a href="https://substack.com/@nexarithm" className="text-blue-500 hover:text-blue-600">substack.com/@nexarithm</a>
        </div>
      </article>
    </main>
  );
}
