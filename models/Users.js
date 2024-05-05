const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add user name"]
    },
    email: {
        type: String,
        required: [true, "Please add user email"]
    },
    photo: {
        type: String,
    }
});
module.exports = mongoose.model("pcpartsbdUser", UserSchema);