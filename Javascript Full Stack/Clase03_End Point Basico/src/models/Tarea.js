const {Schema, model} = require('mongoose');

const TareaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamp: false
});

module.exports = model('Tarea', TareaSchema);