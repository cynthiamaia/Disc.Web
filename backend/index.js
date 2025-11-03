import express from "express";
import admin from "firebase-admin";
import cors from "cors";
import {fileURLToPath } from "url";
import { dirname } from "path";//extrair o diretorio
import { readFileSync } from "fs";// leitura do arquivo

//extrai o diretorio
const __dirname = dirname(fileURLToPath(import.meta.url))

var serviceAccount = JSON.parse(readFileSync(`${__dirname}/projeto-web-24623-firebase-adminsdk-fbsvc-be96c15c43.json`))
var admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const PORT = 3000;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));

/* const app = express();
const PORT = 3000;
app.get("/", (req, resp) =>{
    resp.send("Hello World!")
});
//inicia o servidor funcao listen()
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`)
})*/
