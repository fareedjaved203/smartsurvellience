const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        // unique: true,
        // required: true,
        trim: true,
    },
    password: {
        type: String,
        // required: true,
    },
    // confirmpassword: {
    //     type: String,
    //     required: true,
    // }
    resetPasswordToken: String,
    resetPasswordExpires: Date,

})


// now we create a collection

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;