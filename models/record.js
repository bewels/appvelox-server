const {Schema, model} = require('mongoose');

const Record = new Schema({
    doctorId: {type: Schema.Types.ObjectId, ref: 'Doctor'},
    date: Date,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = model('Record', Record);