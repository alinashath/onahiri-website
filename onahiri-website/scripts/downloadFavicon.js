import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';

async function run() {
  try {
    const res = await axios.get('https://onahiri.com/');
    const $ = cheerio.load(res.data);
    
    let iconUrl = $('link[rel~="icon"]').attr('href') || 'https://onahiri.com/favicon.ico';
    
    if (!iconUrl.startsWith('http')) {
       if (iconUrl.startsWith('//')) iconUrl = 'https:' + iconUrl;
       else if (iconUrl.startsWith('/')) iconUrl = 'https://onahiri.com' + iconUrl;
       else iconUrl = 'https://onahiri.com/' + iconUrl;
    }
    
    const urlObj = new URL(iconUrl);
    let ext = path.extname(urlObj.pathname);
    if (!ext) ext = '.png';
    const destFileName = `onahiri-favicon${ext}`;
    const dest = `./public/${destFileName}`;
    
    const writer = fs.createWriteStream(dest);
    const response = await axios({
      url: iconUrl,
      method: 'GET',
      responseType: 'stream'
    });
    
    response.data.pipe(writer);
    
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
    
    console.log(`EXTRACTED_FILE=${destFileName}`);
  } catch(e) {
    console.error('Error downloading favicon:', e.message);
  }
}
run();
