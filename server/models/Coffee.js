const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String },
    price: { type: Number },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    origins: { type: mongoose.SchemaTypes.ObjectId, ref: 'Origin' },
    description: { type: String },
    specifications: {
        contents: { type: String },
        weight: { type: String },
        expiryDate: { type: String },
        manufacturingDate: { type: String },
        packaging: { type: String },
        state: { type: String } 
    },
    tastes: {
        acidity: { type: Number },
        body: { type: Number },
        balance: { type: Number },
    }



})

module.exports = mongoose.model("Coffee", schema) 