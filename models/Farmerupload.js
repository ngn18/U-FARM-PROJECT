const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const produceSchema = new mongoose.Schema({
    uniquenumber:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Registering'
    },

    firstname: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Registering'
    },

    lastname: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Registering'
    },

    ward: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Registering'
    },

    productcategory: {
        type: String,
        trim: true
    },

    producename: {
        type: String,
        trim: true
    },

    quantity: {
        type: Number,
        trim: true
    },

    price: {
        type: Number,
        trim: true
    },

    modeofdelivery: {
        type: String,
        trim: true
    },

    modeofpayment: {
        type: String,
        trim: true
    },

    dateofupload: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Approved']
    },

    availability: {
        type: String,
        default: 'available',
        enum: ['available', 'booked', 'N/A'] 
    },

    image: {
        type: String
    }

});

// produceSchema.plugin(passportLocalMongoose, {
// });
module.exports = mongoose.model('ProduceUpload', produceSchema);