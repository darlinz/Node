const EventEmitter = require("events"); // Импортируем модуль 'events'

// Создаем класс Logger, который наследуется от EventEmitter
class Logger extends EventEmitter {
    // Метод log генерирует событие 'message' с переданным сообщением и текущим временем
    log(message) {
        this.emit("message", `${message} ${Date.now()}`);
    }
}

// Создаем экземпляр класса Logger
const logger = new Logger();

// Подписываемся на событие 'message' и указываем обработчик
logger.on("message", data => {
    console.log(`Получено событие: ${data}`); // Обрабатываем данные, переданные с событием
});

// Генерируем события
logger.log("First");
logger.log("Second");
logger.log("Third");
