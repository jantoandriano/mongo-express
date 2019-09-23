const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
const port = process.env.PORT || 3000
const DB_CONFIG = require("./config/mongodb.config")

// routes
const userRoutes = require("./routes/users/user__routes")

//connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(DB_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology:true }, () => console.log("connected to database")
)

// midleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))
app.use(cors())

app.use("/users", userRoutes)


// listen to server
app.listen(port, () =>  console.log(`app listend to port ${port}`))


