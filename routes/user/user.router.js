const express = require('express');
const userRouter = express.Router();

const User = require('./../../models/User.model');

userRouter.put("/:id/updateUser", (req, res, next) => {
    const { id } = req.params;
    const { property, value } = req.body;

    switch(true) {
        case property === "lodging":
            User.findByIdAndUpdate(id, { lodging: {need: value, nights: 1} })
                .then(() => {
                    return User.findById(id);
                })
                .then((updatedUser) => res.status(200).json(updatedUser))
                .catch((err) => next(err));
            break;
        case property === "allergies":
            User.findById(id)
                .then((user) => {
                    const { allergies } = user;
                    if (allergies.includes(value)) {
                        return User.findByIdAndUpdate(id, {$pull: {allergies: value }});
                    }
                    else {
                        return User.findByIdAndUpdate(id, {$push: {allergies: value }});
                    }
                })
                .then((updatedUser) => res.status(200).json(updatedUser))
                .catch((err) => next(err));
            break;
        default:
            User.findByIdAndUpdate(id, { [property]: value })
                .then(() => {
                    return User.findById(id);
                })
                .then((updatedUser) => res.status(200).json(updatedUser))
                .catch((err) => next(err));
    }
});

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
