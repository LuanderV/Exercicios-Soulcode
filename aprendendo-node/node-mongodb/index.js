import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import contatoRoutes from "./routes/contatos.js";
import usuarioRoutes from "./routes/usuarios.js";

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongo DB Conectado!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use("/contatos", contatoRoutes);
app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
