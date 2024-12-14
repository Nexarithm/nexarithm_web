import {
  SocialLink,
  TwitterIcon,
  BlueskyIcon,
  MediumIcon,
  SubstackIcon,
  HackerNewsIcon,
  RedditIcon,
  GitHubIcon,
  EmailIcon,
} from '../components/SocialLinks';
import { AboutSection } from './About';

export default function Home() {
  return (
    <main className="w-full flex justify-center p-5">
      <AboutSection />
    </main>
  );
}
