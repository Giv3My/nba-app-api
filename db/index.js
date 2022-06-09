const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = (text) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      resolve(console.log(text));
    }).catch((e) => {
      reject(console.log(e));
    });
  });
};

module.exports = connectDB;