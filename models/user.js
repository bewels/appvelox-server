const {Schema, model} = require('mongoose');

const User = new Schema({
    email: {type: String, unique: true, required: true},
    number: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    patronymic: String,
    sex: String,
    address: {
        registrationAddress: String,
        mainAddress: String,
    },
    member: {
        memberSurname: String,
        memberName: String,
        memberPatronymic: String,
        memberPhone: String,
    },
});

module.exports = model('User', User);