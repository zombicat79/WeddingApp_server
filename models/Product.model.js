const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        cat: String,
        esp: String,
        eng: String
    },
    description: {
        cat: String,
        esp: String,
        eng: String
    },
    image: String,
    price: Number,
    default: Boolean
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;