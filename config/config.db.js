require("dotenv").config();
const mongoose = require("mongoose");

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


const URI = `mongodb://mongo:IyjoGtRdEiWzS34kvw8C@containers-us-west-147.railway.app:7563`;

const mongooseConnect = mongoose.connect(
    URI,
    connectionParams
    ).then(() => {
        console.log("Connected to MongoDB!");
    }).catch((err) => {
        console.log(err);
});

module.exports = mongooseConnect;