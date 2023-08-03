const servants = [
    { idImg: 1, class: "Berserk", name: 'Morgan', bannerDate: '2023/8/18', priority: 'C', gender:'Female', alignment:['Lawful','Evil'], rarity: 5},
    { idImg: 1, class: "Berserk", name: 'Morgan', bannerDate: '2024/4/13', priority: 'B', gender:'Female', alignment:['Lawful','Evil'], rarity: 5},
    { idImg: 1, class: "Berserk", name: 'Morgan', bannerDate: '2024/11/3', priority: 'A', gender:'Female', alignment:['Lawful','Evil'], rarity: 5},

    { idImg: 2, class: "Foreigner", name: 'Koyanskaya of Darkness', bannerDate: '2024/1/1', priority: 'B', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 2, class: "Foreigner", name: 'Koyanskaya of Darkness', bannerDate: '2025/1/1', priority: 'A', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 3, class: "Berserk", name: 'Ibuki-Douji (Berserker)', bannerDate: '2024/8/14', priority: 'EX', gender:'Female', alignment:['Chaotic','Summer'], rarity: 5},

    { idImg: 4, class: "Pretender", name: 'Lady Avalon', bannerDate: '2024/8/10', priority: 'B', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},
    { idImg: 4, class: "Pretender", name: 'Lady Avalon', bannerDate: '2025/4/29', priority: 'A', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},

    { idImg: 5, class: "Pretender", name: 'Oberon', bannerDate: '2024/12/1', priority: 'EX', gender:'Male', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 6, class: "Caster", name: 'Altria Caster', bannerDate: '2024/5/11', priority: 'B', gender:'Female', alignment:['Neutral','Good'], rarity: 5},
    { idImg: 6, class: "Caster", name: 'Altria Caster', bannerDate: '2024/11/23', priority: 'A', gender:'Female', alignment:['Neutral','Good'], rarity: 5},

    { idImg: 7, class: "Moon Cancer", name: 'Sessyoin Kiara (Moon Cancer)', bannerDate: '2024/7/21', priority: 'EX', gender:'Female', alignment:['Lawful','Evil'], rarity: 5},

    { idImg: 8, class: "Alter Ego", name: 'Sessyoin Kiara', bannerDate: '2024/7/13', priority: 'EX', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 9, class: "Alter Ego", name: 'Kingprotea', bannerDate: '2024/2/23', priority: 'B', gender:'Female', alignment:['Lawful','Good'], rarity: 5},
    { idImg: 9, class: "Alter Ego", name: 'Kingprotea', bannerDate: '2025/1/1', priority: 'A', gender:'Female', alignment:['Lawful','Good'], rarity: 5},

    { idImg: 10, class: "Avenger", name: 'Kama (Avenger)', bannerDate: '2023/9/15', priority: 'B', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},
    { idImg: 10, class: "Avenger", name: 'Kama (Avenger)', bannerDate: '2024/8/21', priority: 'A', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},

    { idImg: 11, class: "Moon Cancer", name: 'BB (Summer)', bannerDate: '2024/6/19', priority: 'EX', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 12, class: "Alter Ego", name: 'Larva / Tiamat', bannerDate: '2025/4/19', priority: 'EX', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 13, class: "Assasin", name: 'First Hassan', bannerDate: '2024/1/1', priority: 'B', gender:'Male', alignment:['Lawful','Evil'], rarity: 5},
    { idImg: 13, class: "Assasin", name: 'First Hassan', bannerDate: '2025/4/19', priority: 'A', gender:'Male', alignment:['Lawful','Evil'], rarity: 5},

    { idImg: 14, class: "Foreigner", name: 'Van Gogh', bannerDate: '2023/9/29', priority: 'C', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 14, class: "Foreigner", name: 'Van Gogh', bannerDate: '2024/10/26', priority: 'B', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 14, class: "Foreigner", name: 'Van Gogh', bannerDate: '2025/8/1', priority: 'A', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 15, class: "Beast", name: "Sodom's Beast / Draco", bannerDate: '2025/4/26', priority: 'EX', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 16, class: "Alter Ego", name: 'Okita Souji (Alter)', bannerDate: '2023/9/29', priority: 'B', gender:'Female', alignment:['Neutral','Balanced'], rarity: 5},
    { idImg: 16, class: "Alter Ego", name: 'Okita Souji (Alter)', bannerDate: '2024/9/17', priority: 'A', gender:'Female', alignment:['Neutral','Balanced'], rarity: 5},

    { idImg: 17, class: "Saber", name: 'Okita Souji (Saber Alter)', bannerDate: '2023/9/8', priority: 'B', gender:'Female', alignment:['Neutral','Balanced'], rarity: 5},
    { idImg: 17, class: "Saber", name: 'Okita Souji (Saber Alter)', bannerDate: '2024/8/21', priority: 'A', gender:'Female', alignment:['Neutral','Balanced'], rarity: 5},

    { idImg: 18, class: "Assasin", name: 'Kama', bannerDate: '2024/7/13', priority: 'B', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 18, class: "Assasin", name: 'Kama', bannerDate: '2025/6/21', priority: 'A', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 19, class: "Avenger", name: 'Space Ishtar', bannerDate: '2024/8/31', priority: 'B', gender:'Female', alignment:['Lawful','Evil'], rarity: 5},
    { idImg: 19, class: "Avenger", name: 'Space Ishtar', bannerDate: '2025/08/01', priority: 'A', gender:'Female', alignment:['Lawful','Evil'], rarity: 5},

    { idImg: 20, class: "Avenger", name: 'Demon King Nobunaga (Oda Nobunaga)', bannerDate: '2023/11/22', priority: 'C', gender:'Female', alignment:['Chaotic','Balanced'], rarity: 5},
    { idImg: 20, class: "Avenger", name: 'Demon King Nobunaga (Oda Nobunaga)', bannerDate: '2024/9/17', priority: 'B', gender:'Female', alignment:['Chaotic','Balanced'], rarity: 5},
    { idImg: 20, class: "Avenger", name: 'Demon King Nobunaga (Oda Nobunaga)', bannerDate: '2025/3/22', priority: 'A', gender:'Female', alignment:['Chaotic','Balanced'], rarity: 5},

    { idImg: 21, class: "Avenger", name: 'Nitocris (Alter)', bannerDate: '2025/1/18', priority: 'C', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 21, class: "Avenger", name: 'Nitocris (Alter)', bannerDate: '2025/2/17', priority: 'B', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 21, class: "Avenger", name: 'Nitocris (Alter)', bannerDate: '2025/6/7', priority: 'A', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 22, class: "Ruler", name: 'Himiko', bannerDate: '2023/11/3', priority: 'B', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},
    { idImg: 22, class: "Ruler", name: 'Himiko', bannerDate: '2024/9/17', priority: 'A', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},

    { idImg: 23, class: "Ruler", name: 'Scathach-Skadi (Ruler)', bannerDate: '2024/8/17', priority: 'EX', gender:'Female', alignment:['Chaotic','Summer'], rarity: 5},

    { idImg: 24, class: "Caster", name: 'Scathach-Skadi', bannerDate: '2023/12/8', priority: 'C', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},
    { idImg: 24, class: "Caster", name: 'Scathach-Skadi', bannerDate: '2024/3/30', priority: 'B', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},
    { idImg: 24, class: "Caster", name: 'Scathach-Skadi', bannerDate: '2025/7/3', priority: 'A', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},

    { idImg: 25, class: "Archer", name: 'Durga', bannerDate: '2025/6/25', priority: 'EX', gender:'Female', alignment:['Lawful','Balanced'], rarity: 5},

    { idImg: 26, class: "Saber", name: 'Ibuki-Douji', bannerDate: '2023/11/10', priority: 'C', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},
    { idImg: 26, class: "Saber", name: 'Ibuki-Douji', bannerDate: '2024/8/31', priority: 'B', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},
    { idImg: 26, class: "Saber", name: 'Ibuki-Douji', bannerDate: '2025/4/10', priority: 'A', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},

    { idImg: 27, class: "Alter Ego", name: 'Manannan mac Lir (Bazett)', bannerDate: '2024/2/9', priority: 'B', gender:'Female', alignment:['Neutral','Good'], rarity: 5},
    { idImg: 27, class: "Alter Ego", name: 'Manannan mac Lir (Bazett)', bannerDate: '2025/2/19', priority: 'A', gender:'Female', alignment:['Neutral','Good'], rarity: 5},

    { idImg: 28, class: "Ruler", name: 'Altria Pendragon (Ruler)', bannerDate: '2024/7/21', priority: 'B', gender:'Female', alignment:['Lawful','Summer'], rarity: 5},
    { idImg: 28, class: "Ruler", name: 'Altria Pendragon (Ruler)', bannerDate: '2025/6/28', priority: 'A', gender:'Female', alignment:['Lawful','Summer'], rarity: 5},

    { idImg: 29, class: "Berserk", name: 'Arjuna (Alter)', bannerDate: '2024/3/2', priority: 'C', gender:'Male', alignment:['Lawful','Good','Evil'], rarity: 5},
    { idImg: 29, class: "Berserk", name: 'Arjuna (Alter)', bannerDate: '2024/9/7', priority: 'B', gender:'Male', alignment:['Lawful','Good','Evil'], rarity: 5},
    { idImg: 29, class: "Berserk", name: 'Arjuna (Alter)', bannerDate: '2025/3/8', priority: 'A', gender:'Male', alignment:['Lawful','Good','Evil'], rarity: 5},

    { idImg: 30, class: "Saber", name: 'Trung Sisters', bannerDate: '2024/4/6', priority: 'B', gender:'Female', alignment:['Lawful','Good'], rarity: 5},
    { idImg: 30, class: "Saber", name: 'Trung Sisters', bannerDate: '2025/8/1', priority: 'A', gender:'Female', alignment:['Lawful','Good'], rarity: 5},

    { idImg: 31, class: "Berserk", name: 'Minamoto-no-Raikou', bannerDate: '2024/8/31', priority: 'B', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},
    { idImg: 31, class: "Berserk", name: 'Minamoto-no-Raikou', bannerDate: '2025/4/10', priority: 'A', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},

    { idImg: 32, class: "Rider", name: 'Leonardo da Vinci (Rider)', bannerDate: '2024/4/20', priority: 'B', gender:'Female', alignment:['Lawful','Good'], rarity: 5},
    { idImg: 32, class: "Rider", name: 'Leonardo da Vinci (Rider)', bannerDate: '2024/11/23', priority: 'A', gender:'Female', alignment:['Lawful','Good'], rarity: 5},

    { idImg: 33, class: "Moon Cancer", name: 'Archetype Earth', bannerDate: '2024/7/31', priority: 'EX', gender:'Female', alignment:['Chaotic','Neutral','Good'], rarity: 5},

    { idImg: 34, class: "Lancer", name: 'Ereshkigal', bannerDate: '2023/10/12', priority: 'D', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 34, class: "Lancer", name: 'Ereshkigal', bannerDate: '2024/1/26', priority: 'C', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 34, class: "Lancer", name: 'Ereshkigal', bannerDate: '2024/8/31', priority: 'B', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 34, class: "Lancer", name: 'Ereshkigal', bannerDate: '2025/2/13', priority: 'A', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 35, class: "Archer", name: 'Ishtar', bannerDate: '2024/1/26', priority: 'B', gender:'Female', alignment:['Lawful','Good'], rarity: 5},
    { idImg: 35, class: "Archer", name: 'Ishtar', bannerDate: '2024/8/31', priority: 'A', gender:'Female', alignment:['Lawful','Good'], rarity: 5},

    { idImg: 36, class: "Foreigner", name: 'Kukulkan', bannerDate: '2025/2/7', priority: 'B', gender:'Female', alignment:['Lawful','Good'], rarity: 5},
    { idImg: 36, class: "Foreigner", name: 'Kukulkan', bannerDate: '2025/6/7', priority: 'A', gender:'Female', alignment:['Lawful','Good'], rarity: 5},

    { idImg: 37, class: "Assasin", name: 'Kashin Koji', bannerDate: '2025/5/24', priority: 'EX', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},

    { idImg: 38, class: "Caster", name: 'Nero Claudius (Caster)', bannerDate: '2023/6/30', priority: 'C', gender:'Female', alignment:['Chaotic','Summer'], rarity: 5},
    { idImg: 38, class: "Caster", name: 'Nero Claudius (Caster)', bannerDate: '2024/8/3', priority: 'B', gender:'Female', alignment:['Chaotic','Summer'], rarity: 5},
    { idImg: 38, class: "Caster", name: 'Nero Claudius (Caster)', bannerDate: '2025/5/31', priority: 'A', gender:'Female', alignment:['Chaotic','Summer'], rarity: 5},

    { idImg: 39, class: "Lancer", name: 'Sakamoto Ryouma (Lancer)', bannerDate: '2023/11/22', priority: 'C', gender:'Male', alignment:['Neutral','Balanced'], rarity: 5},
    { idImg: 39, class: "Lancer", name: 'Sakamoto Ryouma (Lancer)', bannerDate: '2024/9/17', priority: 'B', gender:'Male', alignment:['Neutral','Balanced'], rarity: 5},
    { idImg: 39, class: "Lancer", name: 'Sakamoto Ryouma (Lancer)', bannerDate: '2025/3/24', priority: 'A', gender:'Male', alignment:['Neutral','Balanced'], rarity: 5},
    
    { idImg: 40, class: "Alter Ego", name: 'Super Bunyan', bannerDate: '2024/4/27', priority: 'B', gender:'Female', alignment:['Neutral','Balanced'], rarity: 5},
    { idImg: 40, class: "Alter Ego", name: 'Super Bunyan', bannerDate: '2025/8/1', priority: 'A', gender:'Female', alignment:['Neutral','Balanced'], rarity: 5},

    { idImg: 41, class: "Berserk", name: 'Sen no Rikyu', bannerDate: '2024/9/14', priority: 'EX', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 42, class: "Lancer", name: 'Vritra', bannerDate: '2024/2/9', priority: 'D', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},
    { idImg: 42, class: "Lancer", name: 'Vritra', bannerDate: '2024/12/7', priority: 'C', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},
    { idImg: 42, class: "Lancer", name: 'Vritra', bannerDate: '2025/2/17', priority: 'B', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},
    { idImg: 42, class: "Lancer", name: 'Vritra', bannerDate: '2025/7/12', priority: 'A', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},

    { idImg: 43, class: "Foreigner", name: 'Jacques de Molay', bannerDate: '2023/10/20', priority: 'D', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},
    { idImg: 43, class: "Foreigner", name: 'Jacques de Molay', bannerDate: '2024/5/12', priority: 'C', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},
    { idImg: 43, class: "Foreigner", name: 'Jacques de Molay', bannerDate: '2024/10/15', priority: 'B', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},
    { idImg: 43, class: "Foreigner", name: 'Jacques de Molay', bannerDate: '2025/4/29', priority: 'A', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},

    { idImg: 44, class: "Ruler", name: 'Pope Johanna', bannerDate: '2025/2/17', priority: 'EX', gender:'Female', alignment:['Lawful','Good'], rarity: 5},

    { idImg: 45, class: "Foreigner", name: 'Abigail Williams', bannerDate: '2024/11/24', priority: 'EX', gender:'Female', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 46, class: "Foreigner", name: 'Abigail Williams (Summer)', bannerDate: '2024/8/3', priority: 'EX', gender:'Female', alignment:['Lawful','Evil'], rarity: 5},

    { idImg: 47, class: "Caster", name: 'Merlin', bannerDate: '2024/3/12', priority: 'B', gender:'Male', alignment:['Lawful','Good'], rarity: 5},
    { idImg: 47, class: "Caster", name: 'Merlin', bannerDate: '2025/3/27', priority: 'A', gender:'Male', alignment:['Lawful','Good'], rarity: 5},

    { idImg: 48, class: "Alter Ego", name: 'Ashiya Douman', bannerDate: '2023/9/22', priority: 'B', gender:'Male', alignment:['Chaotic','Evil'], rarity: 5},
    { idImg: 48, class: "Alter Ego", name: 'Ashiya Douman', bannerDate: '2024/8/10', priority: 'A', gender:'Male', alignment:['Chaotic','Evil'], rarity: 5},

    { idImg: 49, class: "Caster", name: 'Tamamo-no-Mae', bannerDate: '2024/2/9', priority: 'B', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},
    { idImg: 49, class: "Caster", name: 'Tamamo-no-Mae', bannerDate: '2025/2/17', priority: 'A', gender:'Female', alignment:['Neutral','Evil'], rarity: 5},

    { idImg: 50, class: "Rider", name: 'Kyokutei Bakin', bannerDate: '2024/6/29', priority: 'B', gender:'Female', alignment:['Lawful','Balanced'], rarity: 5},
    { idImg: 50, class: "Rider", name: 'Kyokutei Bakin', bannerDate: '2025/7/7', priority: 'A', gender:'Female', alignment:['Lawful','Balanced'], rarity: 5},
    
    { idImg: 51, class: "Saber", name: 'Nero Claudius (Bride)', bannerDate: '2024/2/2', priority: 'D', gender:'Female', alignment:['Chaotic','Bride'], rarity: 5},
    { idImg: 51, class: "Saber", name: 'Nero Claudius (Bride)', bannerDate: '2024/12/14', priority: 'C', gender:'Female', alignment:['Chaotic','Bride'], rarity: 5},
    { idImg: 51, class: "Saber", name: 'Nero Claudius (Bride)', bannerDate: '2025/2/19', priority: 'B', gender:'Female', alignment:['Chaotic','Bride'], rarity: 5},
    { idImg: 51, class: "Saber", name: 'Nero Claudius (Bride)', bannerDate: '2025/5/31', priority: 'A', gender:'Female', alignment:['Chaotic','Bride'], rarity: 5},

    { idImg: 52, class: "Ruler", name: "Jeanne d'Arc", bannerDate: '2023/10/27', priority: 'D', gender:'Female', alignment:['Lawful', 'Good'], rarity: 5},
    { idImg: 52, class: "Ruler", name: "Jeanne d'Arc", bannerDate: '2024/2/9', priority: 'C', gender:'Female', alignment:['Lawful', 'Good'], rarity: 5},
    { idImg: 52, class: "Ruler", name: "Jeanne d'Arc", bannerDate: '2024/10/27', priority: 'B', gender:'Female', alignment:['Lawful', 'Good'], rarity: 5},
    { idImg: 52, class: "Ruler", name: "Jeanne d'Arc", bannerDate: '2025/2/17', priority: 'A', gender:'Female', alignment:['Lawful', 'Good'], rarity: 5},
    
    { idImg: 53, class: "Avenger", name: "Jeanne d'Arc (Alter)", bannerDate: '2024/5/12', priority: 'C', gender:'Female', alignment:['Chaotic', 'Evil'], rarity: 5},
    { idImg: 53, class: "Avenger", name: "Jeanne d'Arc (Alter)", bannerDate: '2024/10/27', priority: 'B', gender:'Female', alignment:['Chaotic', 'Evil'], rarity: 5},
    { idImg: 53, class: "Avenger", name: "Jeanne d'Arc (Alter)", bannerDate: '2025/7/3', priority: 'A', gender:'Female', alignment:['Chaotic', 'Evil'], rarity: 5},

    { idImg: 54, class: "Foreigner", name: 'Yang Guifei', bannerDate: '2024/5/12', priority: 'EX', gender:'Female', alignment:['Chaotic','Good'], rarity: 5},

    { idImg: 55, class: "Foreigner", name: "Katsushika Hokusai", bannerDate: '2023/12/02', priority: 'C', gender:'Female', alignment:['Chaotic', 'Balanced'], rarity: 5},
    { idImg: 55, class: "Foreigner", name: "Katsushika Hokusai", bannerDate: '2024/7/6', priority: 'B', gender:'Female', alignment:['Chaotic', 'Balanced'], rarity: 5},
    { idImg: 55, class: "Foreigner", name: "Katsushika Hokusai", bannerDate: '2025/7/3', priority: 'A', gender:'Female', alignment:['Chaotic', 'Balanced'], rarity: 5},    
    
    { idImg: 56, class: "Ruler", name: "Qin Shi Huang", bannerDate: '2024/6/22', priority: 'EX', gender:'Unknown', alignment:['Lawful', 'Good'], rarity: 5},
]