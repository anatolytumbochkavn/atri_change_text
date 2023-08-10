const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(path.join(__dirname, "files"));

files.forEach(el => {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname, "files", el)).toString());

    for (let i = 0; i < file.scenes[0].texts.length; i++) {
        if (el == "b201.ks.json" && i == 115) {
            continue;
        } else {
            let charName = file.scenes[0].texts[i][1];

            switch(file.scenes[0].texts[i][2][0][0]) {
                case "Minamo's Voice":
                    file.scenes[0].texts[i][2][0][0] = "Голос Минамо";
                    break;
                case "Someone's Voice":
                    file.scenes[0].texts[i][2][0][0] = "Чей-то голос";
                    break;
                case "Someone":
                    file.scenes[0].texts[i][2][0][0] = "Кто-то";
                    break;
                case "Child A":
                    file.scenes[0].texts[i][2][0][0] = "Ребёнок 1";
                    break;
                case "Child B":
                    file.scenes[0].texts[i][2][0][0] = "Ребёнок 2";
                    break;
                case "Child C":
                    file.scenes[0].texts[i][2][0][0] = "Ребёнок 3";
                    break;
                case "Ryuu-chan":
                    file.scenes[0].texts[i][2][0][0] = "Рю-тян";
                    break;
                case "High School Boy":
                    file.scenes[0].texts[i][2][0][0] = "Старшеклассник";
                    break;
                case "Natsuki's Voice":
                    file.scenes[0].texts[i][2][0][0] = "Голос Нацуки";
                    break;
                case "Atri's Voice":
                    file.scenes[0].texts[i][2][0][0] = "Голос Атри";
                    break;
                case "Natsuki and Minamo":
                    file.scenes[0].texts[i][2][0][0] = "Нацуки и Минамо";
                    break;
                case "A Cat?":
                    file.scenes[0].texts[i][2][0][0] = "Кот?";
                    break;
                case "Ririka's Voice":
                    file.scenes[0].texts[i][2][0][0] = "Голос Ририки";
                    break;
                case "Girl":
                    file.scenes[0].texts[i][2][0][0] = "Девочка";
                    break;
                case "みんな":
                    file.scenes[0].texts[i][2][0][0] = "　";
                    break;
                case "Unknown Man":
                    file.scenes[0].texts[i][2][0][0] = "Неизвестный мужчина";
                    break;
                case "Ryuuji's Voice":
                    file.scenes[0].texts[i][2][0][0] = "Голос Рюдзи";
                    break;
                case "Natsuki's Wife":
                    file.scenes[0].texts[i][2][0][0] = "Жена Нацуки";
                    break;
            }

            switch(charName) {
                case "水菜萌":
                    file.scenes[0].texts[i][1] = "Минамо";
                    break;
                case "キャサリン":
                    file.scenes[0].texts[i][1] = "Кэтрин";
                    break;
                case "アトリ":
                    file.scenes[0].texts[i][1] = "Атри";
                    break;
                case "乃音子":
                    file.scenes[0].texts[i][1] = "Нонко";
                    break;
                case "ジャンク屋":
                    file.scenes[0].texts[i][1] = "Старьёвщик";
                    break;
                case "ジャンク屋":
                    file.scenes[0].texts[i][1] = "Старьёвщик";
                    break;
                case "竜司":
                    file.scenes[0].texts[i][1] = "Рюдзи";
                    break;   
                case "凜々花":
                    file.scenes[0].texts[i][1] = "Ририка";
                    break;
                case "富田さん":
                    file.scenes[0].texts[i][1] = "Томита-сан";
                    break;
                case "洋子":
                    file.scenes[0].texts[i][1] = "Йоко";
                    break;
                case "駄菓子屋のおばちゃん":
                    file.scenes[0].texts[i][1] = "Продавец сладостей";
                    break;
                case "水菜萌の母":
                    file.scenes[0].texts[i][1] = "Мать Минамо";
                    break;
                case "とおる":
                    file.scenes[0].texts[i][1] = "Тоору";
                    break;
                case "みよ":
                    file.scenes[0].texts[i][1] = "Миё";
                    break;
                case "夏生":
                    file.scenes[0].texts[i][1] = "Нацуки";
                    break;
                case "肉屋のおばさん":
                    file.scenes[0].texts[i][1] = "Мясник";
                    break;
                case "ヤスダ":
                    file.scenes[0].texts[i][1] = "Ясуда";
                    break;
                case "詩菜":
                    file.scenes[0].texts[i][1] = "Сиина";
                    break;
                case "ココロ":
                    file.scenes[0].texts[i][1] = "Кокоро";
                    break;
                case "テレビ":
                    file.scenes[0].texts[i][1] = "Ведущий";
                    break;
                case "中等部男子":
                    file.scenes[0].texts[i][1] = "Ученик средней школы";
                    break;
                case "露店の店主":
                    file.scenes[0].texts[i][1] = "Продавец";
                    break;
                case "ラジオＤＪ":
                    file.scenes[0].texts[i][1] = "Ведущий";
                    break;
                case "宅配業者":
                    file.scenes[0].texts[i][1] = "Водитель";
                    break;
                case "町の人Ａ":
                    file.scenes[0].texts[i][1] = "Горожанин 1";
                    break;
                case "町の人Ｂ":
                    file.scenes[0].texts[i][1] = "Горожанин 2";
                    break;
                case "ラジオ":
                    file.scenes[0].texts[i][1] = "Ведущий";
                    break;
                case "打ち上げ中継":
                    file.scenes[0].texts[i][1] = "Объявление";
                    break;
                case "ココロ":
                    file.scenes[0].texts[i][1] = "Кокоро";
                    break;
                case "テレビ":
                    file.scenes[0].texts[i][1] = "Ведущий";
                    break;
            }

            file.scenes[0].texts[i][2][1] = file.scenes[0].texts[i][2][0];
        }
    }

    fs.writeFileSync(path.join(__dirname, "files", el), JSON.stringify(file, null, 2));
});

const renameFiles = fs.readdirSync(path.join(__dirname, "rename_files"));

renameFiles.forEach(el => {
    fs.renameSync(path.join(__dirname, "rename_files", el), path.join(__dirname, "rename_files", el.replace("pure.", "")));
});