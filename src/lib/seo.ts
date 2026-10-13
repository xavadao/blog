import type { Metadata } from 'next';

export const site = {
  "name": "Lumi\u00e8re Lifestyle Journal",
  "url": "https://vibed-blog.xavainf.com",
  "description": "A sample editorial blog about wellness, slow travel and personal growth, with nine bundled stories and a demo newsletter form.",
  "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
};

export function pageMetadata(title: string, description: string, path: string, index = true, image = site.image): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle }, description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: { type: 'website', title: fullTitle, description, url, siteName: site.name, images: [{ url: image, alt: `${site.name} sample website` }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
  };
}

export const siteMetadata: Metadata = {
  ...pageMetadata(site.name, site.description, '/'),
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: { default: site.name, template: `%s | ${site.name}` },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }], shortcut: ['/favicon.svg'] },
};

export const websiteSchema = {
  '@context': 'https://schema.org', '@type': 'WebSite',
  name: site.name, url: site.url, description: site.description,
  isAccessibleForFree: true,
  creator: { '@type': 'Organization', name: 'XavaInf', url: 'https://xavainf.com' },
};
