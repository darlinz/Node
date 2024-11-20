const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(`
            <h1>Form</h1>
            <form method="post" action="/">
                <input name="title" type="text" />
                <button type="submit">Send</button>
            </form>
        `);
    } else if (req.method === 'POST') {
        const body = [];

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = new URLSearchParams(parsedBody).get('title'); // Парсинг данных формы

            res.end(`
                <h1>Ваше сообщение: ${decodeURIComponent(message)}</h1>
            `);
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000...');
});
