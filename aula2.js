const http = require("http");

http.createServer((requisicao, resposta, ) => {
    resposta.writeHead(200, {
    'Content-Type': 'text/plain'
});
resposta.write("Hello world\n curso de node js") // oq vou exibir
resposta.end(); 

}).listen(3000); // porta onde o servidor vai responder (3000 é o padrao do node)