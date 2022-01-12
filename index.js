const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectMDB");

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", require("./routes/user.routes"));

app.listen(process.env.PORT || 8080, () => {
  console.log(process.env.PORT);
});
// hello there
