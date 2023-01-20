const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
const db = require("./models");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application." });
});

require("./routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
