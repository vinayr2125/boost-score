import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonicalUrl?: string;
}

export const SEO = ({
  title = "LinkedIn Authority Builder for AI Founders | Boost Score™",
  description = "Transform your LinkedIn into a powerful business growth engine. AI startup founders using Boost Score see 3x more investor meetings, 5x enterprise leads. Free Authority Assessment.",
  keywords = "LinkedIn authority building, AI startup founders, LinkedIn for founders, startup fundraising LinkedIn, enterprise sales LinkedIn, thought leadership platform",
  image = "https://boostscore.ai/og-image-authority.jpg",
  url = "https://boostscore.ai",
  type = "website",
  author = "Boost Score",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonicalUrl
}: SEOProps) => {
  const fullTitle = title.includes('Boost Score') ? title : `${title} | Boost Score™`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Boost Score" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@boostscore_ai" />
      <meta name="twitter:creator" content="@boostscore_ai" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": fullTitle,
          "description": description,
          "url": url,
          "image": image,
          "author": {
            "@type": "Organization",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Boost Score",
            "logo": {
              "@type": "ImageObject",
              "url": "https://boostscore.ai/logo.png"
            }
          },
          "datePublished": publishedTime || new Date().toISOString(),
          "dateModified": modifiedTime || new Date().toISOString()
        })}
      </script>
    </Helmet>
  );
};

export default SEO;