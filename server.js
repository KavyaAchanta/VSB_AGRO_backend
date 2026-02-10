require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contactroutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/contact", contactRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
