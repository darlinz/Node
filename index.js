const http = require('http'); 
const app = require('./App'); 

const PORT = 3000; 


const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}. Перейдите по адресу http://localhost:${PORT}`);
});
