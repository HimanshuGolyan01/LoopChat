const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRouter"); 


dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes); // Use the imported router

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`The server is listening on PORT ${PORT}`));
