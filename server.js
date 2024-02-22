const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./dbConnection/connectDB");
const cors = require("cors");

//MIDDLEWARE
app.use(express.json());
app.use(cors());

// ENVIRMENT SETUP
dotenv.config();

//PORT SETUP
const PORT = process.env.PORT || 5000;

//DATA BASE CONNECTION
connectDB();

//ROUTE
app.use("/api", require("./route/userRoute"));

app.listen(PORT, () => {
  console.log(`server is running on port no :-${PORT}`);
});
