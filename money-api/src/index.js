import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Money API rodando na porta ${PORT}`)
})
