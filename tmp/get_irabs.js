const fs = require('fs');
const chapters = JSON.parse(fs.readFileSync('src/data/chapters.json', 'utf8'));
const irabs = new Set();
chapters.forEach(chap => {
  chap.paragraphs.forEach(para => {
    para.arabic.forEach(word => {
      irabs.add(word.irab);
    });
  });
});
console.log(Array.from(irabs).sort());
