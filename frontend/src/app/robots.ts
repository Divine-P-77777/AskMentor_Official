import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.askmentor.online'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llm.txt', '/llms-full.txt'],
        disallow: ['/dashboard/', '/onboarding/', '/api/', '/_next/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'CCBot',
          'anthropic-ai',
          'Cohere-ai',
          'OAI-SearchBot',
        ],
        allow: ['/', '/llms.txt', '/llm.txt', '/llms-full.txt', '/explore', '/use-cases', '/about', '/billing'],
        disallow: ['/dashboard/', '/onboarding/', '/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/dashboard/', '/onboarding/', '/api/', '/_next/'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: '/',
        disallow: ['/dashboard/', '/onboarding/', '/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
