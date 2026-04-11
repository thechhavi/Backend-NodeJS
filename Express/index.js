const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "Public");
app.use(express.static(publicPath));
console.log(publicPath);
app.listen(4000, () => {
  console.log("Server is listening on http://localhost:4000");
});