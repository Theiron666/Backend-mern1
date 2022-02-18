const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB Successful Connection: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`MongoDB Failed Connection: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
