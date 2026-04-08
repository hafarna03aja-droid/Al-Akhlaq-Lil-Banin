const fs = require('fs');
const path = require('path');

const chaptersFile = 'd:/Al-Akhlaq Lil Banin/src/data/chapters.json';
const data = JSON.parse(fs.readFileSync(chaptersFile, 'utf8'));

// Filter items to keep only ID 1 to 8
const baseChapters = data.filter(item => item.id >= 1 && item.id <= 8);

// Load the new standardized chapters from tmp files
const ch8 = JSON.parse(fs.readFileSync('d:/Al-Akhlaq Lil Banin/tmp/chapter_8.json', 'utf8'));
const ch9 = JSON.parse(fs.readFileSync('d:/Al-Akhlaq Lil Banin/tmp/chapter_9.json', 'utf8'));
const ch10 = JSON.parse(fs.readFileSync('d:/Al-Akhlaq Lil Banin/tmp/chapter_10.json', 'utf8'));
const ch11 = JSON.parse(fs.readFileSync('d:/Al-Akhlaq Lil Banin/tmp/chapter_11.json', 'utf8'));

// Combine
const finalChapters = [
  ...baseChapters,
  ch8,
  ch9,
  ch10,
  ch11
];

// Write back
fs.writeFileSync(chaptersFile, JSON.stringify(finalChapters, null, 2), 'utf8');
console.log("Successfully standardized chapters.json (IDs 1-12)");
