import React from "react";

interface JsonLdProps {
  data: any;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonaOrganization() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AskMentor",
    "url": "https://www.askmentor.online",
    "logo": "https://www.askmentor.online/logo.png",
    "image": "https://www.askmentor.online/og-image.png",
    "sameAs": [
      "https://twitter.com/askmentor",
      "https://github.com/askmentor"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "Customer Support",
      "email": "support@askmentor.ai"
    }
  };

  const searchAction = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.askmentor.online",
    "name": "AskMentor",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.askmentor.online/explore?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "AskMentor",
        "item": "https://www.askmentor.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Explore Experts",
        "item": "https://www.askmentor.online/explore"
      }
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AskMentor | Your AI Mentor",
    "url": "https://www.askmentor.online",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.askmentor.online/og-image.png",
      "width": "1200",
      "height": "630"
    }
  };

  return (
    <>
      <JsonLd data={data} />
      <JsonLd data={searchAction} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={website} />
    </>
  );
}

export function WebsiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.askmentor.online",
    "name": "AskMentor",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.askmentor.online/explore?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AskMentor",
    "operatingSystem": "All",
    "applicationCategory": "EducationalApplication",
    "description": "An AI-powered mentorship platform connecting users with digital personas of experts.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://www.askmentor.online",
    "name": "AskMentor | Your AI Mentor",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.askmentor.online/og-image.png",
      "width": "1200",
      "height": "630"
    }
  }

  return (
    <>
      <JsonLd data={data} />
      <JsonLd data={softwareData} />
      <JsonLd data={webPageData} />
    </>
  );
}
