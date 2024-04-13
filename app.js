const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/login", userRoutes);
app.use("/chat", chatRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not Found 🧑‍💻</h1>");
});

app.listen(3000);
