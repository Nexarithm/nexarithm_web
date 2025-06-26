import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  type = 'website',
  image = '/avatar.jpg',
  author = 'Nexarithm',
  publishedTime,
  modifiedTime,
  tags = [],
  structuredData
}) => {
  const siteName = 'Nexarithm';
  const baseUrl = 'https://nexarithm.com';
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo]');
    existingMetas.forEach(meta => meta.remove());

    // Remove existing JSON-LD
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    // Create meta tags
    const metaTags: Array<
      | { name: string; content: string }
      | { property: string; content: string }
      | { rel: string; href: string }
    > = [
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'author', content: author },
      { name: 'keywords', content: tags.join(', ') },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: type },
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:image:alt', content: title },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nexarithm' },
      { name: 'twitter:creator', content: '@nexarithm' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImageUrl },
      { name: 'twitter:image:alt', content: title },
      
      // Additional meta tags for articles
      ...(type === 'article' && publishedTime ? [
        { property: 'article:published_time', content: publishedTime },
        { property: 'article:author', content: author },
        ...(modifiedTime ? [{ property: 'article:modified_time', content: modifiedTime }] : []),
        ...tags.map(tag => ({ property: 'article:tag', content: tag }))
      ] : []),
      
      // Canonical URL
      { rel: 'canonical', href: fullUrl }
    ];

    // Add meta tags to head
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('data-seo', 'true');
      
      if ('name' in tag && tag.name && tag.content) {
        meta.name = tag.name;
        meta.content = tag.content;
      } else if ('property' in tag && tag.property && tag.content) {
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
      } else if ('rel' in tag && tag.rel && tag.href) {
        const link = document.createElement('link');
        link.setAttribute('data-seo', 'true');
        link.rel = tag.rel;
        link.href = tag.href;
        document.head.appendChild(link);
        return;
      }
      
      document.head.appendChild(meta);
    });

    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

  }, [fullTitle, description, fullUrl, type, fullImageUrl, author, publishedTime, modifiedTime, tags, structuredData, title]);

  return null;
};

export default SEO;