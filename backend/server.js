const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRouter"); 
const { notFound } = require("./Middlewares/errorHandling")
const { errorHandler } = require("./Middlewares/errorHandling");
const chatRoutes = require("./Routes/chatRoutes")
const cors = require("cors");


dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/user", userRoutes); 
app.use("/api/chat" , chatRoutes);


app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`The server is listening on PORT ${PORT}`));
