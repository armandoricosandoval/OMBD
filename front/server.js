const express = require("express");
const chalk = require("chalk");
const path = require("path");

const app = express();

const log = (...content) => console.log(chalk.green(...content));

app.use(express.static(path.resolve(__dirname, "public")));

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => log(`Server listening at ${PORT}`));