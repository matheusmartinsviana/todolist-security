const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./src/config/db");

const userRoutes = require("./src/routes/userRoutes");
const todoRoutes = require("./src/routes/todoRoutes");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5500",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados.");
  }
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
