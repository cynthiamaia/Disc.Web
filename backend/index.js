import express from "express";
import admin from "firebase-admin";
import cors from "cors";
import {fileURLToPath } from "url";
import { dirname } from "path";//extrair o diretorio
import { readFileSync } from "fs";// leitura do arquivo

//extrai o diretorio
const __dirname = dirname(fileURLToPath(import.meta.url))

var serviceAccount = JSON.parse(readFileSync(`${__dirname}/projeto-web-24623-firebase-adminsdk-fbsvc-be96c15c43.json`))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();// criando instanci
const app = express();//aplicacao express
app.use(cors());//habilita o cors
app.use(express.json())// requisicoes com corpo JSON

app.get("/", (req, res) =>{
  res.send("Sejam bem vindo!")
})

app.post("/posts", async(req, res) => {
  try{
    //extrair as informacoes do corpor da requisicao
    const {title, content, author} = req.body;
    if (!title || !content){
      return res.status(400).json({error: "Campos obrigatorios: title, content"});
    }
    const docRef = await db.collection("posts").add({
      title,
      content,
      author: author || "Anonimo",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).json({message: "Post criado com sucesso!"})
  } catch (err){
    res.status(500).json({error: "Erro interno do servidor!"})
  }
})

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
