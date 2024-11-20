const os = require("os");

// Платформа
console.log(os.platform());
// Адрхитектура
console.log(os.arch());
// Информация
console.log(os.cpus());
// Вся память
console.log(os.totalmem());
// Свободная память
console.log(os.freemem());
// Корневая директория
console.log(os.homedir());
// Сколько система работает
console.log(os.uptime());