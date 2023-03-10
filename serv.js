const express = require("express")
const connectdb = require("./config/configDatabase")
const userRooter = require("./rooter/rooter")
const app = express()
require("dotenv").config()
const port = process.env.port

app.use(express.json())
app.listen(port,
   console.log("don") 
    )
    connectdb()
    app.use("/api/user",userRooter)
    