import express from "express";
import "dotenv/config";

const app = express();

const SERVER_ID = process.env.SERVER_ID || "1";
const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.send(`Hello World! - Servidor ${SERVER_ID}`);
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT} - Servidor ${SERVER_ID}`);
});
