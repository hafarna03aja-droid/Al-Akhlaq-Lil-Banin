import json

with open(r'd:\Al-Akhlaq Lil Banin\src\data\chapters.json', 'r', encoding='utf-8') as f:
    content = f.read()

# We know the corruption started around line 1876.
# Let's parse the JSON to see how much is valid.
try:
    data = json.loads(content)
except Exception as e:
    print(f"Error parsing JSON: {e}")
    # If it's corrupted, we need to manually slice it.
    # We want to keep up to ID 9.
    # Looking at the file, ID 9 starts much earlier.
    # Let's find the start of the object with "id": 10 which was the one being replaced.
    
    # Actually, let's just find the last valid Chapter before the mess.
    # ID 9 (Nabimu) starts around 1740.
    # Let's just find the index of the last valid closing of an object before the mess.
    
    # Better: Search for the start of ID 9 and keep everything before it, then rebuild ID 9, 10, 11, 12.
    # Wait, ID 9 was already correct except for the last bit of translation.
    
    # Let's find the position of '"id": 9'
    pos_id9 = content.find('"id": 9')
    # Go back to the '{' before it.
    pos_start9 = content.rfind('{', 0, pos_id9)
    prefix = content[:pos_start9]
    
# Let's just load the good chapters from a known safe part if possible.
# I'll use a more robust way: read the file line by line and stop before the corruption.

with open(r'd:\Al-Akhlaq Lil Banin\tmp\chapter_9.json', 'r', encoding='utf-8') as f:
    ch9 = json.load(f)
with open(r'd:\Al-Akhlaq Lil Banin\tmp\chapter_10.json', 'r', encoding='utf-8') as f:
    ch10 = json.load(f)
with open(r'd:\Al-Akhlaq Lil Banin\tmp\chapter_11.json', 'r', encoding='utf-8') as f:
    ch11 = json.load(f)

# Re-read the first part of the file (IDs 1-9)
# Wait, the previous chapters are ID 1-9 (titles 1-8).
# ID 1: Muqaddimah
# ID 2: Ch 1
# ...
# ID 9: Ch 8

# I'll use a script to find the last valid object in the list.
# I'll just keep the first 9 elements if possible.

# I will use a regex or string search to extract the first 9 chapters.
import re
chapters_raw = re.split(r',\s*{\s*"id":\s*10', content)[0]
if not chapters_raw.endswith(']'):
    if not chapters_raw.strip().endswith('}'):
        # Need to fix the last object (ID 9 / Ch 8)
        # Find the last "paragraphs" and fix it.
        pass

# Actually, I'll just manually construct the file content string for the end part.
# I will use a simplified approach since I have all the data.

def get_clean_json():
    lines = content.splitlines()
    # Find the line where ID 9 ends correctly.
    # Ch 8 (ID 9) ends around 1875 in terms of arabic words.
    
    # Let's just rewrite from ID 9 onwards.
    # I'll re-transcribe ID 9 (Nabimu) here to be safe.
    
    ch8_correct = {
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
    }

    # Extract ID 1-8
    # Search for the start of ID 9
    pos_id9 = content.find('"id": 9')
    pos_start9 = content.rfind('{', 0, pos_id9)
    prefix = content[:pos_start9].strip()
    if prefix.endswith(','):
        prefix = prefix[:-1].strip()
    if not prefix.endswith('['):
        # Already a list start?
        pass
    
    # Construct final data
    # We'll just build a list of objects and then JSON dump it.
    # But prefix is raw text.
    
    # Safe way: prefix + ch8 + ch9 + ch10 + ch11 + ']'
    # But ch9, ch10, ch11 are from files.
    
    # String building:
    output = prefix + '\n  ' + json.dumps(ch8_correct, ensure_ascii=False, indent=2) + ',\n  ' + \
             json.dumps(ch9, ensure_ascii=False, indent=2) + ',\n  ' + \
             json.dumps(ch10, ensure_ascii=False, indent=2) + ',\n  ' + \
             json.dumps(ch11, ensure_ascii=False, indent=2) + '\n]'
             
    with open(r'd:\Al-Akhlaq Lil Banin\src\data\chapters.json', 'w', encoding='utf-8') as f:
        f.write(output)

get_clean_json()
print("Successfully reconstructed chapters.json")
