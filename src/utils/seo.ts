// SEO Utility Functions for JasNav IT Solutions

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
}

// Default SEO configuration
export const defaultSEO: SEOConfig = {
  title: 'JasNav IT Solutions - Leading IT Services Company in Bengaluru',
  description: 'Transform your business with cutting-edge technology solutions. Specializing in software development, cybersecurity, cloud solutions, and AI-powered applications.',
  keywords: ['IT services', 'software development', 'cybersecurity', 'cloud solutions', 'AI applications', 'technology consulting', 'web development', 'mobile apps', 'Bengaluru IT company', 'JasNav'],
  canonical: 'https://jasnav.co.in'
};

// Page-specific SEO configurations
export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: 'JasNav IT Solutions - Leading IT Services Company in Bengaluru',
    description: 'Transform your business with cutting-edge technology solutions. Specializing in software development, cybersecurity, cloud solutions, and AI-powered applications.',
    keywords: ['IT services', 'software development', 'cybersecurity', 'cloud solutions', 'AI applications', 'JasNav IT Solutions'],
    canonical: 'https://jasnav.co.in'
  },
  about: {
    title: 'About Us - JasNav IT Solutions | Expert IT Services Team',
    description: 'Learn about JasNav IT Solutions - our mission, vision, and expert team delivering innovative technology solutions to businesses across India.',
    keywords: ['about JasNav', 'IT company team', 'technology experts', 'company mission', 'IT services team'],
    canonical: 'https://jasnav.co.in/about'
  },
  services: {
    title: 'IT Services - Software Development, Cybersecurity & Cloud Solutions',
    description: 'Comprehensive IT services including custom software development, cybersecurity solutions, cloud migration, AI applications, and technology consulting.',
    keywords: ['IT services', 'software development', 'cybersecurity', 'cloud migration', 'AI development', 'technology consulting'],
    canonical: 'https://jasnav.co.in/services'
  },
  portfolio: {
    title: 'Portfolio - Our Successful IT Projects & Case Studies',
    description: 'Explore our portfolio of successful IT projects, case studies, and client testimonials showcasing our expertise in software development and technology solutions.',
    keywords: ['IT portfolio', 'case studies', 'successful projects', 'client testimonials', 'software projects'],
    canonical: 'https://jasnav.co.in/portfolio'
  },
  careers: {
    title: 'Careers - Join Our IT Team | Job Opportunities at JasNav',
    description: 'Explore career opportunities at JasNav IT Solutions. Join our dynamic team and grow your career in software development, cybersecurity, and emerging technologies.',
    keywords: ['IT careers', 'software developer jobs', 'technology careers', 'IT job opportunities', 'join JasNav team'],
    canonical: 'https://jasnav.co.in/careers'
  },
  contact: {
    title: 'Contact Us - Get in Touch with JasNav IT Solutions',
    description: 'Contact JasNav IT Solutions for your technology needs. Located in Devanahalli, Bengaluru. Get expert IT consulting and custom software development services.',
    keywords: ['contact JasNav', 'IT consulting', 'Bengaluru IT company', 'technology consultation', 'software development inquiry'],
    canonical: 'https://jasnav.co.in/contact'
  }
};

// Function to update document head with SEO meta tags
export const updateSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;
  
  // Update or create meta tags
  updateMetaTag('description', config.description);
  updateMetaTag('keywords', config.keywords.join(', '));
  
  // Update Open Graph tags
  updateMetaProperty('og:title', config.title);
  updateMetaProperty('og:description', config.description);
  
  // Update Twitter Card tags
  updateMetaTag('twitter:title', config.title);
  updateMetaTag('twitter:description', config.description);
  
  // Update canonical URL
  if (config.canonical) {
    updateCanonicalURL(config.canonical);
  }
  
  // Update images if provided
  if (config.ogImage) {
    updateMetaProperty('og:image', config.ogImage);
  }
  
  if (config.twitterImage) {
    updateMetaTag('twitter:image', config.twitterImage);
  }
};

// Helper function to update or create meta tags
const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  
  meta.content = content;
};

// Helper function to update or create meta property tags
const updateMetaProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
};

// Helper function to update canonical URL
const updateCanonicalURL = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = url;
};

// Function to generate structured data for different page types
export const generateStructuredData = (type: 'Organization' | 'WebPage' | 'Service', data: any) => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type
  };
  
  const structuredData = { ...baseStructure, ...data };
  
  // Remove existing structured data script
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData, null, 2);
  document.head.appendChild(script);
};

// Function to track page views (can be integrated with analytics)
export const trackPageView = (pageName: string) => {
  // This can be integrated with Google Analytics, Facebook Pixel, etc.
  console.log(`Page viewed: ${pageName}`);
  
  // Example Google Analytics 4 tracking (uncomment when GA4 is set up)
  // if (typeof gtag !== 'undefined') {
  //   gtag('config', 'GA_MEASUREMENT_ID', {
  //     page_title: document.title,
  //     page_location: window.location.href
  //   });
  // }
};

// Function to generate meta tags for social sharing
export const generateSocialMetaTags = (config: SEOConfig) => {
  const socialTags = [
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: config.canonical || window.location.href },
    { property: 'og:site_name', content: 'JasNav IT Solutions' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description }
  ];
  
  return socialTags;
};

// Export utility for React components to use SEO
export const useSEO = (pageName: keyof typeof pageSEO) => {
  const seoConfig = pageSEO[pageName] || defaultSEO;
  
  // Update SEO when component mounts
  React.useEffect(() => {
    updateSEO(seoConfig);
    trackPageView(pageName);
  }, [pageName]);
  
  return seoConfig;
};

// Import React for useEffect
import React from 'react';