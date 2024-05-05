import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

const PORT = 3000;

app.listen(3000, () => {
  console.log(`Money API rodando na porta ${PORT}`)
})
