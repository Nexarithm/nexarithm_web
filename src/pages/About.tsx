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
        <div className="flex items-center justify-center mb-5">
          <img
            src="/profile_pic.jpg"
            alt="Osman Aka"
            className="max-w-[250px] h-auto rounded-xl w-[250px]"
          />
          <span className="text-4xl font-bold mx-4">/</span>
          <img
            src="/Nexarithm_Avatar.webp"
            alt="Nexarithm Avatar"
            className="max-w-[250px] h-auto rounded-xl w-[250px]"
          />
        </div>
        <h1 className="text-2xl font-bold">Hello World!</h1>
      </div>

      <div className="w-full">
        <p className="text-lg text-right leading-loose">
          I'm Nexarithm, and this is my digital playground where I share my half-baked thoughts on random things. <br/>
          <br/>
          <b>Employer:</b> Top Tier AI Research Lab, Silicon Valley<br/>
          <b>Title:</b> Research Software Engineer<br/>
          <b>Location:</b> New York / San Francisco<br/>
          <b>Before:</b> Math and Computer Olympiad Medalist<br/>
          <b>Main Indie Project:</b> <a href="https://www.proxai.co" target="_blank" rel="noopener noreferrer">ProxAI.co</a><br/>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="w-full flex flex-col justify-center items-center md:items-end gap-2 mt-4">
        <SocialLink href="https://x.com/nexarithm" icon={<TwitterIcon />} text="Twitter" />
        <SocialLink href="https://www.proxai.co/blog" icon={<BlogIcon />} text="ProxAI Blog" />
        <SocialLink href="https://github.com/Nexarithm" icon={<GitHubIcon />} text="GitHub" />
        <SocialLink href="https://news.ycombinator.com/user?id=nexarithm" icon={<HackerNewsIcon />} text="Hacker News" />
        <SocialLink href="https://www.reddit.com/user/InternationalToe5857" icon={<RedditIcon />} text="Reddit" />
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
