require("dotenv").config();
const connectDB = require("./db/connect");
const Quote = require("./models/quote");

const QuoteJson = require("../quotes.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Quote.create( QuoteJson );
        console.log("hhhhhh");
    }catch(error){
        console.log(error);
    }
};

start();