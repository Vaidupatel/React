const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const connectTomongo = async () => {
 await mongoose.connect(mongoURI);
};

module.exports = connectTomongo;
