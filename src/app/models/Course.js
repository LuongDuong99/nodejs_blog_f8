const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, minlength: 1, default: "Not" },
    description: { type: String, default: "description" },
    image: { type: String },
    slug: { type: String, default: ""},
    videoId : { type: String, default:""},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);