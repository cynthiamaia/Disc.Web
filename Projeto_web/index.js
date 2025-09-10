console.log("Inicio de um servidor")
//importar o modulo http 
const http = require('http')
//criar um servidor HTTP
const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type':'text/plain'}) 
   res.end("Hello, world!")
});

//define a porta e inicia o servidor
const PORT = 8080;
server.listen(PORT, ()=>{
    console.log(`Servidor executando 
        http://localhost:${PORT}/`)
});