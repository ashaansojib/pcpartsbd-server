const mongoose = require("mongoose");
const ConnectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`DB Connected by ${conn.connection.host}`.blue.underline);
};
module.exports = ConnectDB;
