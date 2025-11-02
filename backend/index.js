import express from "express";
import admin from "firebase-admin";
import cors from "cors";


var admin = require("firebase-admin");

var serviceAccount = require("path/to/");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

/* const app = express();
const PORT = 3000;
app.get("/", (req, resp) =>{
    resp.send("Hello World!")
});
//inicia o servidor funcao listen()
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})*/
