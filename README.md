# Atri Change Text
A tool created to insert text into the game _ATRI: My Dear Moments_ instead of English. The thing is that when creating the table in [_VNTextPatch_](https://github.com/arcusmaximus/VNTranslationTools/tree/main) it is the Japanese language that is replaced, which creates some difficulties: text hyphenation does not work correctly on Steam version, because it is assumed that in Japanese writing they are not needed. The English text performs hyphenation correctly, so it is necessary to replace it for the game to work correctly.

Инструмент, созданный для того, чтобы вставить текст в игру _ATRI: My Dear Moments_ вместо английского языка. Дело в том, что при создании таблицы в [_VNTextPatch_](https://github.com/arcusmaximus/VNTranslationTools/tree/main) происходит замена именно японского языка, что создаёт некоторые трудности: на Steam-версии неправильно работают переносы текста, поскольку предполагается, что в японском письме они и не нужны. Английский же текст осуществляет переносы правильно, поэтому для корректной работы игры требуется заменять именно его.

# Usage
> It is mandatory to have [_Node.js_](https://nodejs.org/ru) installed on your computer to work with the program!

_Atri Change Text_ can change not only text, but also character names and the names of files obtained after working in _FreeMoteToolkit_. To use the application, follow these instructions:
1. Translate the short story into [_VNTextPatch_](https://github.com/arcusmaximus/VNTranslationTools/tree/main) and get the files with the Japanese text changed to your language.
2. Use the [_FreeMoteToolkit_](https://github.com/UlyssesWu/FreeMote) program and turn files with the extension _.scn_ into _.json_.
3. Transfer the created files to the _files_ folder.
4. Go to the _script.js_ file and pay attention to the first 'switch' construct: it is needed to translate the choices. After the word 'case' comes the original selection text, and below is the modified version (originally in Russian). Edit the selections below each 'case' so they are translated into your language.
5. Look at the second 'switch' construct: it is needed to change the names of the characters. Using the same instructions, change all the names in the game.
6. Write the _node script_ command in the command line (having previously specified the path to the _ATRI – Change Language Text_ folder).
7. Transfer the changed files back to [_FreeMoteToolkit_](https://github.com/UlyssesWu/FreeMote) and repackage into _.scn_ – you will get many files with the word 'pure' in the name.
8. Move the files with the _.scn_ extension to the _rename_files_ folder and enter the _node script_ command again – the word 'pure' will disappear from the file names.

> Для работы с программой обязательно иметь установленный на компьютере [_Node.js_](https://nodejs.org/ru)!

_Atri Change Text_ может менять не только текст, но и имена персонажей, а также имена полученных после работы в [_FreeMoteToolkit_](https://github.com/UlyssesWu/FreeMote) файлов. Для того чтобы использовать приложение, следуйте этим указаниям:
1. Переведите новеллу в [_VNTextPatch_](https://github.com/arcusmaximus/VNTranslationTools/tree/main) и получите файлы с изменённым японским текстом на ваш язык.
2. Используйте программу [_FreeMoteToolkit_](https://github.com/UlyssesWu/FreeMote) и превратите файлы с расширением _.scn_ в _.json_.
3. Перенесите созданные файлы в папку _files_.
4. Зайдите в файл _script.js_ и обратите внимание на первую конструкцию «switch»: она нужна для перевода выборов. После слова «case» идёт изначальный текст выбора, а ниже – изменённый вариант (первоначально – на русском языке). Отредактируйте выборы ниже каждого «case», чтобы они были переведены на ваш язык.
5. Посмотрите на вторую конструкцию «switch»: она нужна для изменения имён персонажей. Пользуясь теми же инструкциями, измените все имена в игре.
6. Напишите в командной строке (предварительно указав путь к папке _ATRI – Change Language Text_) команду _node script_.
7. Перенесите изменённые файлы обратно в [_FreeMoteToolkit_](https://github.com/UlyssesWu/FreeMote) и перепакуйте в _.scn_ – вы получите много файлов со словом «pure» в названии.
8. Перенесите файлы с расширением _.scn_ в папку _rename_files_ и снова введите команду _node script_ – слово «pure» пропадёт из названия файлов.
## Why change file names after working in [_FreeMoteToolkit_](https://github.com/UlyssesWu/FreeMote)?
There are a total of 34 script files in the game, so it would be difficult to change their names manually after each text change. Therefore, such an action can be performed by entering only one command.

Всего в игре можно насчитать 34 сценарных файла, а поэтому менять их названия вручную после каждого изменения текста было бы затруднительно. В связи с этим подобное действие можно выполнить, введя лишь одну команду.
