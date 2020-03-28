const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        required: true
    }
}, {
    timestamps: false
});

module.exports = model('Product', ProductSchema);