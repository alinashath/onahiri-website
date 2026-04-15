import fs from 'fs';
import path from 'path';

const dbPath = './src/data/docsDB.json';
let data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let matchCount = 0;
data.forEach(doc => {
  const contentBefore = doc.content;
  
  // Nuke Visual Studio links
  doc.content = doc.content.replace(/href="https:\/\/alinashath\.visualstudio\.com[^"]*"/g, 'href="#"');
  
  // Nuke stray onahiri.com links that weren't converted to local references
  doc.content = doc.content.replace(/href="https:\/\/onahiri\.com[^"]*"/g, 'href="#"');
  doc.content = doc.content.replace(/href="https:\/\/www\.onahiri\.com[^"]*"/g, 'href="#"');

  if (doc.content !== contentBefore) {
    matchCount++;
  }
});

fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
console.log(`Aggressively patched links in ${matchCount} documents.`);
