// require('dotenv').config()
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
exports.connectMongoose = () => {
  mongoose
    .connect("mongodb+srv://rajdave050:Mongopass1.@cluster0.ykqgtb1.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    })
    .then((e) => console.log("Connected to Mongodb =>> Authentication-Nodejs"))
    .catch((e) => console.log("Not Connect Mongodb"));
};
