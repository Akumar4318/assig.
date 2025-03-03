const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    fullName: { 
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    phone: {
        type: String, 
        required: true,
        trim: true,
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    registeredAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Customer", customerSchema);
