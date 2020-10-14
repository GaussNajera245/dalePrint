const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    content: {
        type: Buffer,
        required: true
    }
});

module.exports = mongoose.Model('Photo', PhotoSchema);