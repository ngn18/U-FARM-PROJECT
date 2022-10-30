const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    uniquenumber: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    ward: {
        // type: mongoose.Schema.type.ObjectID,
        // ref: 'Registration'
        type: String,
        required: true,
        trim: true
    },

    firstname: {
        type: String,
        required: true,
        trim: true
    },

    lastname: {
        type: String,
        required: true,
        trim: true
    },

    dateofbirth: {
        type: String,
        required: true,
        trim: true
    },

    gender: {
        type: String,
        required: true,
        trim: true
    },

    nin: {
        type: String,
        required: true,
        trim: true
    },

    telephone: {
        type: String,
        required: true,
        trim: true
    },

    activity: {
        type: String,
        required: true,
        trim: true
    },

    regdate: {
        type: String,
        required: true,
        trim: true
    },

    directions: {
        type: String,
        trim: true
    },

    residence: {
        type: String,
        trim: true
    },

    yearsofresidence: {
        type: String,
        // required: true,
        trim: true
    }

    // password: {
    //     type: String,
    //     required: true
    // },

    // passwordagain: {
    //     type: String,
    //     required: true
    // }
})

userSchema.plugin(passportLocalMongoose, {
usernameField: 'uniquenumber'
});
module.exports = mongoose.model('Registering', userSchema);