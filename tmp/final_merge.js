const fs = require('fs');

const prefix = fs.readFileSync('d:/Al-Akhlaq Lil Banin/tmp/prefix.json', 'utf8');
const ch9 = JSON.parse(fs.readFileSync('d:/Al-Akhlaq Lil Banin/tmp/chapter_9.json', 'utf8'));
const ch10 = JSON.parse(fs.readFileSync('d:/Al-Akhlaq Lil Banin/tmp/chapter_10.json', 'utf8'));
const ch11 = JSON.parse(fs.readFileSync('d:/Al-Akhlaq Lil Banin/tmp/chapter_11.json', 'utf8'));

// We need to re-add Chapter 8 (ID 9) which we lost in the corruption.
const ch8 = {
  "id": 9,
  "titleTrans": "8. Nabimu Muhammad SAW",
  "titleAr": "نَبِيُّكَ مُحَمَّدٌ ﷺ",
  "refPage": 8,
  "paragraphs": [
    {
      "arabic": [
        { "word": "١-", "meaning": "1-", "type": "nomor", "irab": "-" },
        { "word": "نَبِيُّكَ", "meaning": "Nabimu", "type": "isim", "irab": "Mubtada'" },
        { "word": "مُحَمَّدٌ", "meaning": "Muhammad", "type": "isim", "irab": "Khobar" },
        { "word": "ﷺ", "meaning": "Shallallahu 'alaihi wa sallam", "type": "huruf", "irab": "-" },
        { "word": "؛", "meaning": ";", "type": "tanda baca", "irab": "-" },
        { "word": "هُوَ", "meaning": "Dia-lah", "type": "isim", "irab": "Dhomir" },
        { "word": "الَّذِيْ", "meaning": "yang", "type": "isim", "irab": "Isim Mawshul" },
        { 
          "word": "عَرَّفَكَ", 
          "meaning": "mengenalkanmu", 
          "type": "fi'il & dhomir", 
          "irab": "Fi'il Madhi",
          "morphology": {
            "root": "ع ر ف",
            "pattern": "فَعَّلَ - يُفَعِّلُ",
            "forms": {
              "madhi": { "ar": "عَرَّفَ", "id": "Telah mengenalkan" },
              "mudhari": { "ar": "يُعَرِّفُ", "id": "Sedang mengenalkan" },
              "mashdar": { "ar": "تَعْرِيْفًا", "id": "Pengenalan" }
            }
          }
        },
        { "word": "رَبَّكَ", "meaning": "Tuhanmu", "type": "isim & dhomir", "irab": "Maf'ul Bih" },
        { "word": "وَدِيْنَكَ", "meaning": "dan agamamu", "type": "huruf, isim & dhomir", "irab": "Ma'thuf" },
        { "word": "،", "meaning": ",", "type": "tanda baca", "irab": "-" },
        { "word": "فَيَجِبُ", "meaning": "maka wajib", "type": "huruf & fi'il", "irab": "Ma'thuf" },
        { "word": "عَلَيْكَ", "meaning": "atasmu", "type": "huruf & dhomir", "irab": "Jar & Majrur" },
        { "word": "أَنْ", "meaning": "bahwa", "type": "huruf", "irab": "Harf Nashab" },
        { 
          "word": "تُحِبَّهُ", 
          "meaning": "engkau mencintainya", 
          "type": "fi'il & dhomir", 
          "irab": "Fi'il Mudhari' Manshub",
          "morphology": {
            "root": "ح ب ب",
            "pattern": "فَعَلَ - يَفْعِلُ / يَفْعُلُ",
            "forms": {
              "madhi": { "ar": "أَحَبَّ", "id": "Telah mencintai" },
              "mudhari": { "ar": "يُحِبُّ", "id": "Sedang mencintai" },
              "mashdar": { "ar": "حُبًّا", "id": "Cinta" }
            }
          }
        },
        { "word": "وَتُعَظِّمَهُ", "meaning": "dan engkau mengagungkannya", "type": "huruf, fi'il & dhomir", "irab": "Ma'thuf" },
        { "word": ".", "meaning": ".", "type": "tanda baca", "irab": "-" }
      ],
      "translation": "1- Nabimu adalah Muhammad SAW; Beliau adalah yang mengenalkanmu kepada Tuhanmu dan agamamu, maka wajib bagimu untuk mencintai dan mengagungkan beliau."
    },
    {
      "arabic": [
        { "word": "٢-", "meaning": "2-", "type": "nomor", "irab": "-" },
        { "word": "وَإِذَا", "meaning": "dan apabila", "type": "huruf & isim", "irab": "Zhorof Zaman" },
        { "word": "كُنْتَ", "meaning": "engkau adalah", "type": "fi'il", "irab": "Fi'il Madhi Naqish" },
        { "word": "تُحِبُّ", "meaning": "engkau mencintai", "type": "fi'il", "irab": "Fi'il Mudhari' (Khobar Kana)" },
        { "word": "نَبِيَّكَ", "meaning": "Nabimu", "type": "isim & dhomir", "irab": "Maf'ul Bih" },
        { "word": "ﷺ", "meaning": "Shallallahu 'alaihi wa sallam", "type": "huruf", "irab": "-" },
        { "word": "،", "meaning": ",", "type": "tanda baca", "irab": "-" },
        { "word": "فَاتَّبِعْ", "meaning": "maka ikutilah", "type": "huruf & fi'il amr", "irab": "Amr" },
        { "word": "سِيْرَتَهُ", "meaning": "perilakunya / biografi hidupnya", "type": "isim & dhomir", "irab": "Maf'ul Bih" },
        { "word": "،", "meaning": ",", "type": "tanda baca", "irab": "-" },
        { 
          "word": "وَاعْمَلْ", 
          "meaning": "dan beramallah / amalkanlah", 
          "type": "huruf & fi'il amr", 
          "irab": "Amr",
          "morphology": {
            "root": "ع م ل",
            "pattern": "فَعَلَ - يَفْعَلُ",
            "forms": {
              "madhi": { "ar": "عَمِلَ", "id": "Telah beramal" },
              "mudhari": { "ar": "يَعْمَلُ", "id": "Sedang beramal" },
              "mashdar": { "ar": "عَمَلًا", "id": "Pekerjaan / Amal" }
            }
          }
        },
        { "word": "بِنَصَائِحِهِ", "meaning": "dengan nasihat-nasihatnya", "type": "huruf & isim & dhomir", "irab": "Harf Jar & Majrur" },
        { "word": "،", "meaning": ",", "type": "tanda baca", "irab": "-" },
        { 
          "word": "لِتَنَالَ", 
          "meaning": "agar kamu memperoleh", 
          "type": "huruf & fi'il", 
          "irab": "Fi'il Mudhari' Manshub",
          "morphology": {
            "root": "ن ي ل",
            "pattern": "فَعَلَ - يَنَالُ",
            "forms": {
              "madhi": { "ar": "نَالَ", "id": "Telah memperoleh" },
              "mudhari": { "ar": "يَنَالُ", "id": "Sedang memperoleh" },
              "mashdar": { "ar": "نَيْلًا", "id": "Pencapaian / Perolehan" }
            }
          }
        },
        { "word": "مَحَبَّةَ", "meaning": "cinta", "type": "isim", "irab": "Maf'ul Bih" },
        { "word": "اللَّهِ", "meaning": "Allah", "type": "isim", "irab": "Mudhaf Ilayh" },
        { "word": "وَرِضَاهُ", "meaning": "dan ridha-Nya", "type": "huruf & isim & dhomir", "irab": "Harf Athaf & Ma'thuf" },
        { "word": ".", "meaning": ".", "type": "tanda baca", "irab": "-" }
      ],
      "translation": "2- Apabila engkau mencintai Nabimu SAW, maka ikutilah perilaku beliau dan amalkanlah nasihat-nasihat beliau agar engkau memperoleh kecintaan dan keridhaan Allah."
    }
  ]
};

// Build final content
let result = prefix.trim();
result += '\n    ]\n  },\n  ' + JSON.stringify(ch8, null, 2) + ',\n  ' +
  JSON.stringify(ch9, null, 2) + ',\n  ' +
  JSON.stringify(ch10, null, 2) + ',\n  ' +
  JSON.stringify(ch11, null, 2) + '\n]';

fs.writeFileSync('d:/Al-Akhlaq Lil Banin/src/data/chapters.json', result, 'utf8');
console.log("Successfully fixed and merged chapters.json");
