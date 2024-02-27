// Using Node.js `require()`
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("Kết nối thành công");
  } catch (error) {
    console.log("Kết nối không thành công");
  }
}

module.exports = { connect };
