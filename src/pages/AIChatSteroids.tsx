import { FC } from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { createProjectStructuredData, createBreadcrumbStructuredData } from '../utils/structuredData';

const AIChatSteroids: FC = () => {
  const title = "AI Chat on Steroids! 🚀";
  const description = "A multi-model AI chat application that queries 10+ AI models in parallel and provides both consensus answers and unique insights from each model. Built entirely through 'vibe coding' with Claude Code and ProxAI.";
  
  // Create structured data
  const projectStructuredData = createProjectStructuredData({
    name: "AI Chat on Steroids",
    description,
    url: "/projects/ai-chat-steroids",
    image: "/ai_chat_on_steroids.png",
    githubUrl: "https://github.com/Nexarithm/multi_model_chat"
  });
  
  const breadcrumbStructuredData = createBreadcrumbStructuredData([
    { label: 'Projects', url: '/projects' },
    { label: 'AI Chat on Steroids' }
  ]);
  
  const combinedStructuredData = [projectStructuredData, breadcrumbStructuredData];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url="/projects/ai-chat-steroids"
        type="website"
        image="/ai_chat_on_steroids.png"
        tags={['AI', 'chat', 'multi-model', 'development', 'tools']}
        structuredData={combinedStructuredData}
      />
      <main className="flex flex-col items-center p-2 md:p-5">
      <article className="prose prose-sm md:prose prose-slate w-full max-w-[800px] bg-white p-4 md:p-8 rounded-lg shadow">
        <Breadcrumbs items={[
          { label: 'Projects', path: '/projects' },
          { label: 'AI Chat on Steroids' }
        ]} />
        <h1 className="text-2xl md:text-4xl">AI Chat on Steroids! 🚀</h1>

        <div className="flex justify-center mb-1">
          <img
            src="/ai_chat_on_steroids.png"
            alt="AI Chat on Steroids Project"
            className="w-1/2 rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <a
            href="https://www.proxai.co/blog/archive/multi-model-ai-chat-app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm no-underline"
          >
            Read Blog Post
          </a>
          <a
            href="https://github.com/Nexarithm/multi_model_chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 text-sm no-underline"
          >
            GitHub Repository
          </a>
        </div>

        <div className="text-sm md:text-base">
          <p>
            I realized I was asking the same questions to Gemini, OpenAI, Claude, and sometimes
            DeepSeek and Grok simultaneously, then continuing conversations from whichever tab
            gave the best answer. Instead of investigating why I do this, I decided to automate
            the workflow. This app queries 10+ AI models in parallel and gives you two types of
            responses: the consensus answer that most models agree on, and unique contributions
            from each model that others missed.
          </p>

          <p>
            Built entirely through "vibe coding" with Claude Code and ProxAI - zero manual code
            changes made! It's become my go-to for 80% of my AI queries now. The experience feels
            like having a panel of AI experts discuss your question and present both their
            collective wisdom and individual insights, all in real-time with progress tracking.
          </p>

          <div className="mt-6">
            Follow me on: <br/>
            <a href="https://nexarithm.com" className="text-blue-500 hover:text-blue-600">nexarithm.com</a> <br/>
            <a href="https://x.com/nexarithm" className="text-blue-500 hover:text-blue-600">x.com/nexarithm</a> <br/>
            <a href="https://www.proxai.co/blog" className="text-blue-500 hover:text-blue-600">proxai.co/blog</a>
          </div>
        </div>
      </article>
      </main>
    </>
  );
};

export default AIChatSteroids;
