const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    if(req.url == '/')
    res.end('Meu primeiro server com node');
    if(req.url == '/hello')
    res.end('Estamos na rota Hello')
}).listen(3000, 'localhost');