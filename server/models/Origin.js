const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    map: { type: String },
})

module.exports = mongoose.model("Origin", schema) 