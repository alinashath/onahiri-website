import fs from 'fs';
import path from 'path';

// Load docs from JSON
const dbPath = './src/data/docsDB.json';
const docs = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const BASE_URL = 'https://onahiri.com';

const staticRoutes = [
  '/',
  '/owork',
  '/otalk',
  '/opulse',
  '/people-and-places',
  '/templates',
  '/reports',
  '/docs/onahiri'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static routes
staticRoutes.forEach(route => {
  sitemap += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>\n`;
});

// Add dynamic documentation routes
docs.forEach(doc => {
  sitemap += `  <url>
    <loc>${BASE_URL}/docs/onahiri/${doc.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

// Write to public directory
const publicDir = './public';
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Generated public/sitemap.xml successfully!');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('Generated public/robots.txt successfully!');
