const path = require('path'); 

const app = (req, res) => {
    if (req.url === '/') {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Node.js Server</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <h1>Welcome to My Web Server</h1>
                <p>This is Tiffany Valentine. And shes gorg.</p>
                <img src="https://i.pinimg.com/236x/e9/db/60/e9db6091f78a1816434bb128b05ff124.jpg" alt="Sample Image" width="300">
                <footer>
                    <p>&copy; 2024 My Web Server</p>
                </footer>
            </body>
            </html>
        `);
    } else if (req.url === '/style.css') {
        
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(`
             body {
                font-family: Arial, sans-serif;
                background-color: #ffe4e1; 
                color: #333;
                text-align: center;
                padding: 20px;
            }
            h1 {
                color: #ff0000; 
            }
            footer {
                margin-top: 20px;
                color: #777;
            }
        `);
    } else {
        
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page Not Found');
    }
};


module.exports = app;
