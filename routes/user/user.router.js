const express = require('express');
const userRouter = express.Router();

const User = require('./../../models/User.model');

userRouter.put("/:id/modifyCart", (req, res, next) => {
    const { id } = req.params;
    const { cartState } = req.body;

    User.findByIdAndUpdate(id, { productsInCart: cartState })
        .then(() => res.status(200))
        .catch((err) => next(err));
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
