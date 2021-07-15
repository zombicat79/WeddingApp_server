const express = require('express');
const userRouter = express.Router();

userRouter.put("/:id/addToCart", (req, res, next) => {
    const { id } = req.params;
    const { product } = req.body;

    console.log("id: ", id, "product: ", product)
});

module.exports = userRouter;