const express = require('express');
const userRouter = express.Router();

const User = require('./../../models/User.model');

userRouter.put("/:id/addToCart", (req, res, next) => {
    const { id } = req.params;
    const { product } = req.body;

    console.log(product)

    /*User.findById(id)
        .then((user) => {
            for (const item of user.productsInCart) {
                if (Object.keys(item)[0] === product) {
                    console.log("adding one!");
                    break;
                }
                else {
                    return User.findByIdAndUpdate(id, {$push: {productsInCart: {[product]: 1}}});
                }
            }
        })
        .then(() => res.status(201))
        .catch((err) => next(err));


    /* User.findByIdAndUpdate(id, {$push: {productsInCart: {[product]: 1}}})
        .then(() => res.status(201))
        .catch((err) => next(err)); */
});

userRouter.put("/:id/incrementLogin", (req, res, next) => {
    const { id } = req.params;

    User.findByIdAndUpdate(id, {$inc: { logins: 1 }})
        .then(() => {
            return User.findById(id);
        })
        .then((updatedUser) => res.status(200).json(updatedUser))
        .catch((err) => next(err));
});

module.exports = userRouter;
