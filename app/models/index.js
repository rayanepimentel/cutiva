const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url
db.tutorials = require("./tutorial.models")(mongoose);
console.log(dbConfig.teste, "dghhf")

module.exports = db;
