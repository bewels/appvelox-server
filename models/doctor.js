const {Schema, model} = require('mongoose');

const Doctor = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    patronymic: String,
    address: String,
    specialization: String,
});

module.exports = model('Doctor', Doctor);