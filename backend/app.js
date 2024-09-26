const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./src/config/db"); // db.js já contém a lógica de conexão e criação de tabelas

const userRoutes = require("./src/routes/userRoutes");
const todoRoutes = require("./src/routes/todoRoutes");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "https://matheusmartinsviana.github.io",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
