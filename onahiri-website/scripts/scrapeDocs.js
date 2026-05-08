// scrapeDocs.js
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://onahiri.com/docs/onahiri/';
const MAX_CONCURRENT = 3;
const visited = new Set();
const db = [];

async function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function scrapePage(url, category = 'General') {
  if (visited.has(url)) return;
  visited.add(url);
  
  try {
    console.log(`Scraping: ${url}`);
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    
    // Extract title
    let title = $('h1').first().text().trim() || $('title').text().replace('- Onahiri', '').trim();
    // Fix duplicated titles like "Person FAQ -Person FAQ -"
    const parts = title.split('-');
    if (parts.length > 1 && parts[0].trim() === parts[1].trim()) {
      title = parts[0].trim();
    }
    
    // Extract main content - WordPress typically uses .entry-content or similar
    // We'll grab .entry-content or the main block
    let contentHtml = $('.entry-content').html();
    if (!contentHtml) {
      contentHtml = $('main').html() || $('article').html() || $('body').html();
    }
    
    // Clean up content: Remove scripts, styles, etc.
    if (contentHtml) {
      const $content = cheerio.load(contentHtml);
      $content('script, style, nav, footer, header').remove();
      contentHtml = $content.html();
    }
    
    // Add to DB if it has content
    if (title && contentHtml && url !== BASE_URL) {
      db.push({
        id: url.replace(BASE_URL, '').replace(/[^a-zA-Z0-9-]/g, '-'),
        title,
        url,
        category,
        content: contentHtml.trim()
      });
    }

    // Find internal links to crawl
    const links = [];
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.startsWith(BASE_URL) && !href.includes('#')) {
        // Strip trailing slash for consistency
        let cleanHref = href;
        if (cleanHref.endsWith('/')) cleanHref = cleanHref.slice(0, -1);
        
        // Ensure no query params
        cleanHref = cleanHref.split('?')[0];
        
        // Determine category based on URL structure
        let linkCategory = category;
        const relative = cleanHref.replace(BASE_URL, '');
        if (relative) {
          const parts = relative.split('/');
          if (parts.length > 0) linkCategory = parts[0];
        }
        
        if (!visited.has(cleanHref)) {
          links.push({ url: cleanHref, cat: linkCategory });
        }
      }
    });
    
    // Scrape found links sequentially to avoid overloading
    for (const link of links) {
      await scrapePage(link.url, link.cat);
      await delay(200); // polite delay
    }
    
  } catch (err) {
    console.error(`Failed to scrape ${url}:`, err.message);
  }
}

async function main() {
  console.log('Starting documentation scrape...');
  
  // Starting seeds point
  const seeds = [
    { url: 'https://onahiri.com/docs/onahiri/owork', cat: 'owork' },
    { url: 'https://onahiri.com/docs/onahiri/otalk', cat: 'otalk' },
    { url: 'https://onahiri.com/docs/onahiri/opulse', cat: 'opulse' },
    { url: 'https://onahiri.com/docs/onahiri/people', cat: 'people' },
    { url: 'https://onahiri.com/docs/onahiri/places', cat: 'places' },
    { url: 'https://onahiri.com/docs/onahiri/templates', cat: 'templates' },
    { url: 'https://onahiri.com/docs/onahiri/reports', cat: 'reports' }
  ];
  
  for (const seed of seeds) {
    await scrapePage(seed.url, seed.cat);
  }
  
  // Write to DB
  const dataDir = path.join(process.cwd(), 'src', 'data');
  await fs.mkdir(dataDir, { recursive: true });
  
  const destPath = path.join(dataDir, 'docsDB.json');
  await fs.writeFile(destPath, JSON.stringify(db, null, 2), 'utf8');
  console.log(`Successfully scraped ${db.length} articles and saved to docsDB.json`);
}

main().catch(console.error);
