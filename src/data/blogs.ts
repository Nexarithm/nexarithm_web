interface BlogPost {
  id: string;
  internalId: number;
  title: string;
  date: string;
  content: string;
}

export const blogs: BlogPost[] = [
  {
    id: "intentions-of-this-site",
    internalId: 1,
    title: "Intentions of this site",
    date: "December 13, 2024",
    content: `
By day, I'm a 9-to-5 AI research engineer at some big, fancy tech company you've probably heard of.
I put on my good employee hat and conduct AI experiments to provide ammunition in the AI battles.
But when night falls, I transform into an indie hacking math geek and try to satisfy my desire to build better tools.


I build tools; I share tools. I hack stuff that works for me, and I want to share it with those who find it useful.


I am opinionated. I want to share my opinions on some topics, especially regarding API designs and the developer experience in the Machine Learning / Artificial Intelligence tech stack.
But mostly, I have opinions about everything.


If you're still reading this, congrats! Especially in this hyper casual era...


So there you have it - just a glimpse into my world as an AI research warrior by day and indie hacker by night.
Just an honest look at what drives me to keep building and sharing.
If any of this resonates with you, feel free to dive into my upcoming posts, follow me on X etc., or reach out.
Always happy to connect with fellow geeks and tool enthusiasts.
    `
  },
  // Add more blog posts here
];
