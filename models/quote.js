const mongoose =  require("mongoose");

const quoteSchema = new mongoose.Schema({
    auhtor:{
        type: String,
        require:[true,"author mus be provided"]
    },
    quote:{
        type: String,
        require:true,
    }
});

module.exports = mongoose.model("Author",quoteSchema);