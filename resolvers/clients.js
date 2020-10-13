const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true
    },
    orders:{
        type: [ID],
        required: true
    }
});

module.exports = mongoose.Model('Client', ClientSchema);