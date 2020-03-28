const {Schema, model} = require('mongoose');

const PurchaseSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        autopopulate: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total_ammount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
    timestamps: false
});

PurchaseSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Purchase', PurchaseSchema);

