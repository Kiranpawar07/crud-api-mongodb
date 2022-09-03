const express = require("express");
const app = express()
const router = require('./Routes/crud.routes')
const cors=require("cors");
app.use(cors())
app.use(express.json())
app.use('/crud',router)


module.exports = app