const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0, 
    },
    stock: { 
        type: Number,
        required: true,
        min: 0, 
    },
    category: {
        type: String,
        required: true,
        trim: true,
    }
});

module.exports = mongoose.model("Books", booksSchema);
