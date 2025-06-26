interface BlogPostStructuredData {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  url: string;
  image?: string;
}

interface ProjectStructuredData {
  name: string;
  description: string;
  url: string;
  image?: string;
  githubUrl?: string;
  websiteUrl?: string;
}

export const createBlogPostStructuredData = ({
  title,
  description,
  author,
  publishedDate,
  url,
  image = '/avatar.jpg'
}: BlogPostStructuredData) => {
  const baseUrl = 'https://nexarithm.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
      url: baseUrl,
      sameAs: [
        'https://x.com/nexarithm',
        'https://github.com/nexarithm'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexarithm',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/avatar.jpg`
      }
    },
    datePublished: new Date(publishedDate).toISOString(),
    dateModified: new Date(publishedDate).toISOString(),
    url: `${baseUrl}${url}`,
    image: {
      '@type': 'ImageObject',
      url: image.startsWith('http') ? image : `${baseUrl}${image}`,
      alt: title
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${url}`
    }
  };
};

export const createProjectStructuredData = ({
  name,
  description,
  url,
  image,
  githubUrl,
  websiteUrl
}: ProjectStructuredData) => {
  const baseUrl = 'https://nexarithm.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    url: `${baseUrl}${url}`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    author: {
      '@type': 'Person',
      name: 'Nexarithm',
      url: baseUrl,
      sameAs: [
        'https://x.com/nexarithm',
        'https://github.com/nexarithm'
      ]
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${baseUrl}${image}`,
        alt: name
      }
    }),
    ...(githubUrl && {
      codeRepository: githubUrl
    }),
    ...(websiteUrl && {
      downloadUrl: websiteUrl
    })
  };
};

export const createWebsiteStructuredData = () => {
  const baseUrl = 'https://nexarithm.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: 'Nexarithm',
    description: 'AI Research Engineer by day, Indie Hacker by night. Building tools and sharing insights about AI, development, and technology.',
    url: baseUrl,
    author: {
      '@type': 'Person',
      name: 'Nexarithm',
      url: baseUrl,
      sameAs: [
        'https://x.com/nexarithm',
        'https://github.com/nexarithm'
      ]
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/blogs?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
};

export const createBreadcrumbStructuredData = (items: Array<{label: string, url?: string}>) => {
  const baseUrl = 'https://nexarithm.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.url && { item: `${baseUrl}${item.url}` })
      }))
    ]
  };
};