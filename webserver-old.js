// https://github.com/alexctrejo/node-js.git

const http = require('http');

http.createServer((req, res) => {
    res.write('Hola');
    res.end(); 
})
.listen(8080);