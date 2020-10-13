const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    client_Id: {
        type: ID,
        required: true
    },
    client_mail:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }, 
    photos:{
        type: [ID],
        required: true
    },
    status: String
});

module.exports = mongoose.Model('Album', AlbumSchema);