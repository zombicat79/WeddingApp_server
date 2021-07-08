const express = require('express');
const productRouter = express.Router();

const Product = require('./../../models/Product.model');

productRouter.get("/all", (req, res, next) => {
    Product.find()
        .then((allProducts) => {
            res.status(200).json(allProducts);
        })
        .catch((err) => next(err));
});

module.exports = productRouter;