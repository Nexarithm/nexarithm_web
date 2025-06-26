import { AboutSection } from './About';
import SEO from '../components/SEO';
import { createWebsiteStructuredData } from '../utils/structuredData';

export default function Home() {
  const websiteStructuredData = createWebsiteStructuredData();
  
  return (
    <>
      <SEO
        title="Nexarithm"
        description="AI Research Engineer by day, Indie Hacker by night. Building tools and sharing insights about AI, development, and technology."
        url="/"
        type="website"
        tags={['AI', 'research', 'development', 'indie hacker', 'technology']}
        structuredData={websiteStructuredData}
      />
      <main className="w-full flex justify-center p-5">
        <AboutSection />
      </main>
    </>
  );
}
