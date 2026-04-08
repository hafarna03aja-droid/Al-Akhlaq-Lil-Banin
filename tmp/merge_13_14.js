const fs = require('fs');
const path = require('path');

const mainPath = 'd:/Al-Akhlaq Lil Banin/src/data/chapters.json';
const ch12Path = 'd:/Al-Akhlaq Lil Banin/tmp/chapter_12.json';
const ch13Path = 'd:/Al-Akhlaq Lil Banin/tmp/chapter_13.json';

try {
    const mainData = JSON.parse(fs.readFileSync(mainPath, 'utf8'));
    const ch12Data = JSON.parse(fs.readFileSync(ch12Path, 'utf8'));
    const ch13Data = JSON.parse(fs.readFileSync(ch13Path, 'utf8'));

    // Remove old versions of these IDs if they exist (to prevent duplicates)
    const filteredData = mainData.filter(ch => ch.id !== 13 && ch.id !== 14);

    // Append new data
    const finalData = [...filteredData, ch12Data, ch13Data];

    // Sort by ID to ensure order
    finalData.sort((a, b) => a.id - b.id);

    fs.writeFileSync(mainPath, JSON.stringify(finalData, null, 2), 'utf8');
    console.log('Successfully merged Chapters 12 and 13 (IDs 13 and 14).');
    console.log('Total chapters now:', finalData.length);
} catch (err) {
    console.error('Error during merge:', err);
    process.exit(1);
}
