const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    client_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
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
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Photo'
        }],
        required: true
    },
    status: String
});

module.exports = mongoose.model('Album', AlbumSchema);