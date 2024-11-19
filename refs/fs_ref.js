const fs = require('fs');
const path = require('path');

// 1. Создаем папку "test"
fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err;  // Если произошла ошибка при создании папки
    console.log('Папка "test" была создана');
});


const groupName = 'SPTV22';  // Название вашей группы
const currentYear = new Date().getFullYear();  // Получаем текущий год

fs.writeFile(
    path.join(__dirname, 'test', 'text.txt'),
    `${groupName} ${currentYear}`,  // Записываем название группы и текущий год
    (err) => {
        if (err) throw err;  // Если произошла ошибка при записи в файл
        console.log('Файл "text.txt" был создан и записан');
        
        // 3. Добавляем к содержимому файла дополнительную строку
        fs.appendFile(
            path.join(__dirname, 'test', 'text.txt'),
            '\nThis is additional text.',  // Дополнительный текст, который добавим в файл
            err => {
                if (err) throw err;  // Если произошла ошибка при добавлении текста
                console.log('В файл было добавлено новое содержимое');
                
                // 4. Читаем содержимое файла
                fs.readFile(
                    path.join(__dirname, 'test', 'text.txt'),
                    'utf-8',  // Указываем кодировку
                    (err, data) => {
                        if (err) throw err;  // Если произошла ошибка при чтении файла
                        console.log('Содержимое файла:');
                        console.log(data);  // Выводим содержимое файла в консоль
                    }
                );
            }
        );
    }
);


// fs.rename(
//     path.join(__dirname, 'test', 'text.txt'),  
//     path.join(__dirname, 'test', 'group_info.txt'),  
//     err => {
//         if (err) throw err;  
//         console.log('Файл переименован);
//     }
// );
