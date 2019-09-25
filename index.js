const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const DB = require("./config/database");
const { PORT } = require("./config/variableEnv");
const port = PORT || 3000;

// routes
const userRoutes = require("./routes/users/user__routes");
const addressRoutes = require("./routes/address/address__routes");

//connect to mongodb
// mongoose.Promise = global.Promise;
DB.then(() => {
  console.log("connected to database");
}).catch(error => {
  console.log(error);
});

// midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// use routes
app.get("/", (req, res, next) => {
  res.send(`<h1>Janto</h1>`)
})
app.use("/users", userRoutes);
app.use("/address", addressRoutes);

// listen to server
app.listen(port, () => console.log(`app listend to port ${port}`));
