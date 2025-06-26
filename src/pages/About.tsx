import { FC } from 'react';
import {
  SocialLink,
  TwitterIcon,
  BlogIcon,
  HackerNewsIcon,
  RedditIcon,
  GitHubIcon,
  EmailIcon,
} from '../components/SocialLinks';

export const AboutSection: FC = () => {
  return (
    <div className="w-full max-w-[1200px] px-4">
      <div className="flex flex-col items-center w-full">
        <img
          src="/Nexarithm_Avatar.webp"
          alt="Nexarithm Avatar"
          className="max-w-[300px] h-auto mb-5 rounded-xl w-[300px]"
        />
        <h1 className="text-2xl font-bold">Hello World!</h1>
      </div>

      <div className="w-full">
        <p className="text-lg text-right leading-loose">
          I'm Nexarithm, and this is my new digital playground where I share my half-baked thoughts on random things. <br/>
          <br/>
          I have been hacking things for a long time. <br/>
          During the day, I work in the Artificial Intelligence research realm. <br/>
          At night, I work on my own projects.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="w-full flex flex-col justify-center items-center md:items-end gap-2 mt-4">
        <SocialLink href="https://x.com/nexarithm" icon={<TwitterIcon />} text="Twitter" />
        <SocialLink href="https://www.proxai.co/blog" icon={<BlogIcon />} text="Blog" />
        <SocialLink href="https://news.ycombinator.com/user?id=nexarithm" icon={<HackerNewsIcon />} text="Hacker News" />
        <SocialLink href="https://www.reddit.com/user/InternationalToe5857" icon={<RedditIcon />} text="Reddit" />
        <SocialLink href="https://github.com/Nexarithm" icon={<GitHubIcon />} text="GitHub" />
        <SocialLink href="mailto:nexarithm@gmail.com" icon={<EmailIcon />} text="Email" />
      </div>
    </div>
  );
};


const About: FC = () => {
  return (
    <main className="w-full flex justify-center p-5">
      <AboutSection />
    </main>
  );
};

export default About;
