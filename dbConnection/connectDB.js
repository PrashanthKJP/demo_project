const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log(`DATA-BASE CONNECTED`);
  } catch (error) {
    // console.log(`DATA-BASE NOT CONNECTED`);
    console.log(error);
  }
};

module.exports = connectDB;
