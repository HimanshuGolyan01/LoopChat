const express = require("express")
const env = require("dotenv")

const app = express();


const PORT = process.env.PORT || 3000;
app.listen(3000 , console.log(`The server is listening on PORT ${PORT}`))