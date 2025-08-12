// SEO Utilities for LinkedIn Authority Builder Platform

export const generateMetaTags = (page: string) => {
  const baseTags = {
    title: "LinkedIn Authority Builder for AI Founders | Boost Score™",
    description: "Transform your LinkedIn into a powerful business growth engine. AI startup founders using Boost Score see 3x more investor meetings, 5x enterprise leads.",
    keywords: "LinkedIn authority building, AI startup founders, LinkedIn for founders, startup fundraising LinkedIn, enterprise sales LinkedIn",
  };

  const pageTags: Record<string, typeof baseTags> = {
    home: baseTags,
    about: {
      title: "About Boost Score - LinkedIn Authority Platform for AI Founders",
      description: "Learn how Boost Score helps 500+ AI startup founders build LinkedIn authority that drives real business results. Our story, mission, and team.",
      keywords: "about Boost Score, LinkedIn authority team, AI founder success stories, LinkedIn growth platform",
    },
    assessment: {
      title: "Free LinkedIn Authority Assessment for AI Founders | Boost Score",
      description: "Get your LinkedIn Authority Score in 5 minutes. Personalized roadmap for AI founders to attract investors and enterprise clients.",
      keywords: "LinkedIn assessment, authority score, LinkedIn audit, founder assessment, LinkedIn analysis",
    },
    pricing: {
      title: "LinkedIn Authority Building Pricing - Plans for Every AI Founder | Boost Score",
      description: "Affordable LinkedIn authority building plans starting at $29/month. Choose Foundation Pack or Authority Accelerator. 90-day money-back guarantee.",
      keywords: "LinkedIn authority pricing, Boost Score plans, LinkedIn growth pricing, founder marketing cost",
    },
    templates: {
      title: "50+ LinkedIn Post Templates for AI Founders | Boost Score",
      description: "Proven LinkedIn templates that generated 10M+ impressions. Hook formulas, story structures, and insight frameworks for technical founders.",
      keywords: "LinkedIn templates, AI founder posts, LinkedIn content templates, viral post templates",
    },
  };

  return pageTags[page] || baseTags;
};

export const generateStructuredData = (type: string, data?: any) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boost Score",
    "url": "https://boostscore.ai",
    "logo": "https://boostscore.ai/logo.png",
    "sameAs": [
      "https://twitter.com/boostscore_ai",
      "https://linkedin.com/company/boostscore",
      "https://github.com/boostscore"
    ],
  };

  const schemas: Record<string, any> = {
    organization: baseOrganization,
    
    product: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Boost Score Platform",
      "description": "LinkedIn authority building platform for AI startup founders",
      "brand": baseOrganization,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "29",
        "highPrice": "997",
        "offerCount": "2"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "523"
      }
    },
    
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "LinkedIn Authority Building",
      "provider": baseOrganization,
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "LinkedIn Authority Building Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Foundation Pack",
              "description": "Essential LinkedIn authority building tools"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Authority Accelerator",
              "description": "Complete authority building system with coaching"
            }
          }
        ]
      }
    },
    
    course: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "LinkedIn Authority Building Program",
      "description": "90-day program to build LinkedIn authority for AI founders",
      "provider": baseOrganization,
      "educationalLevel": "Professional",
      "teaches": "LinkedIn marketing, personal branding, content creation",
      "duration": "P90D",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "duration": "P90D"
      }
    }
  };

  return schemas[type] || schemas.organization;
};

export const generateBreadcrumbs = (path: string[]) => {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": path.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://boostscore.ai${item.url}`
    }))
  };
  
  return breadcrumbs;
};

export const trackCoreWebVitals = () => {
  if (typeof window !== 'undefined' && 'web-vital' in window) {
    // Track Core Web Vitals for SEO performance
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};

export const optimizeImageLoading = () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      htmlImg.src = htmlImg.dataset.src || '';
      htmlImg.removeAttribute('data-src');
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
};

export const generateRichSnippets = (type: string) => {
  const snippets: Record<string, any> = {
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Build LinkedIn Authority as an AI Founder",
      "description": "Step-by-step guide to building LinkedIn authority for AI startup founders",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Take Authority Assessment",
          "text": "Complete the 5-minute assessment to get your baseline score"
        },
        {
          "@type": "HowToStep",
          "name": "Optimize Your Profile",
          "text": "Use our AI-powered tools to enhance your LinkedIn profile"
        },
        {
          "@type": "HowToStep",
          "name": "Create Authority Content",
          "text": "Use proven templates to create engaging LinkedIn posts"
        },
        {
          "@type": "HowToStep",
          "name": "Track Your Growth",
          "text": "Monitor metrics that matter for business growth"
        }
      ]
    },
    
    review: {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Product",
        "name": "Boost Score Platform"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Chen, AI Founder"
      },
      "reviewBody": "Boost Score transformed my LinkedIn presence. Within 90 days, I went from 800 to 5,000+ targeted followers and closed 3 enterprise deals."
    }
  };
  
  return snippets[type];
};

export const generateVideoSchema = (videoData: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": videoData.name || "LinkedIn Authority Building Tutorial",
    "description": videoData.description || "Learn how to build LinkedIn authority as an AI founder",
    "thumbnailUrl": videoData.thumbnail || "https://boostscore.ai/video-thumbnail.jpg",
    "uploadDate": videoData.uploadDate || new Date().toISOString(),
    "duration": videoData.duration || "PT2M",
    "contentUrl": videoData.contentUrl || "https://boostscore.ai/video.mp4",
    "embedUrl": videoData.embedUrl || "https://boostscore.ai/embed/video"
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Boost Score",
    "image": "https://boostscore.ai/logo.png",
    "url": "https://boostscore.ai",
    "telephone": "+1-555-BOOST-AI",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "priceRange": "$29-$997",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };
};