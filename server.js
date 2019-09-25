const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const db = require("./config/mongodb.config")
const {PORT} = require("./config/mongodb.config")

const port = PORT || 3000

// routes
const userRoutes = require("./routes/users/user__routes")
const addressRoutes = require("./routes/address/address__routes")


//connect to mongodb
mongoose.Promise = global.Promise;
db.then(() => {
    console.log("connected to database");
    
}).catch(error => console.log(error)
)

// midleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))
app.use(cors())

// use routes
app.use(userRoutes)
app.use(addressRoutes)


// listen to server
app.listen(port, () =>  console.log(`app listend to port ${port}`))


