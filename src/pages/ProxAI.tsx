import { FC } from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { createProjectStructuredData, createBreadcrumbStructuredData } from '../utils/structuredData';

const ProxAI: FC = () => {
  const title = "ProxAI: Unified AI provider API for Developers";
  const description = "The AI landscape is fragmented with dozens of providers, each with unique APIs. ProxAI solves this with a unified interface that lets you write code once and seamlessly switch between OpenAI, Anthropic, Google, and 15+ other providers.";
  
  // Create structured data
  const projectStructuredData = createProjectStructuredData({
    name: "ProxAI",
    description,
    url: "/projects/proxai",
    image: "/proxai.png",
    githubUrl: "https://github.com/proxai/proxai",
    websiteUrl: "https://proxai.co"
  });
  
  const breadcrumbStructuredData = createBreadcrumbStructuredData([
    { label: 'Projects', url: '/projects' },
    { label: 'ProxAI' }
  ]);
  
  const combinedStructuredData = [projectStructuredData, breadcrumbStructuredData];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url="/projects/proxai"
        type="website"
        image="/proxai.png"
        tags={['AI', 'API', 'development', 'tools', 'OpenAI', 'Anthropic']}
        structuredData={combinedStructuredData}
      />
      <main className="flex flex-col items-center p-2 md:p-5">
      <article className="prose prose-sm md:prose prose-slate w-full max-w-[800px] bg-white p-4 md:p-8 rounded-lg shadow">
        <Breadcrumbs items={[
          { label: 'Projects', path: '/projects' },
          { label: 'ProxAI' }
        ]} />
        <h1 className="text-2xl md:text-4xl">ProxAI: Unified AI provider API for Developers</h1>

        <div className="flex justify-center mb-1">
          <img
            src="/proxai.png"
            alt="ProxAI Project"
            className="w-1/2 rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <a
            href="https://proxai.co"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm no-underline"
          >
            Visit ProxAI.co
          </a>
          <a
            href="https://github.com/proxai/proxai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 text-sm no-underline"
          >
            GitHub Repository
          </a>
        </div>

        <div className="text-sm md:text-base">
          <p>
            The AI landscape is fragmented with dozens of providers, each with unique APIs.
            ProxAI solves this with a unified interface that lets you write code once and
            seamlessly switch between OpenAI, Anthropic, Google, and 15+ other providers.
          </p>

          <p>
            What started as a personal tool to avoid vendor lock-in has evolved into a
            comprehensive platform. The core library remains free and open-source, while
            ProxDash provides advanced monitoring, cost management, and experiment tracking
            for teams serious about AI development.
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

export default ProxAI;
