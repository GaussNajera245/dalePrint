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
    album_orders:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Album'
        }],
        required: true
    }
});

module.exports = mongoose.model('Client', ClientSchema);