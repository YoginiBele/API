const mongoose = require("mongoose");

// uri="mongodb+srv://beleyogi0428:or6NWnKW2yngNNvS@quoteapi.gr9izwm.mongodb.net/QuoteAPI?retryWrites=true&w=majority"

const connectDB = (uri) => {
    // console.log("connect")
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;