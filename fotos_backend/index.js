const express = require("express");
const bodyParser = require("body-parser");

const PhotoRoutes = require("./routes/photo");

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.use("/image", PhotoRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
