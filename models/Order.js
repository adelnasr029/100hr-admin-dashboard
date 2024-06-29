const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: true
    },
    items: { 
        type: Array,
        }
    ,
    phoneNo: {
        type: Number,
        required: true
    },
    itemsCount: {
        type: Number, 
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
      },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    createdAt: {
        type: Date,
        default: Date.now,
      },
}, {
    collection: "orders"
})

module.exports = mongoose.model('Order', orderSchema)