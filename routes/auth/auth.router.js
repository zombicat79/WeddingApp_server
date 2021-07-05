const express = require('express');
const authRouter = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('./../../models/User.model');

authRouter.post('/login', (req, res, next) => {
    const { username, password, language } = req.body;

    if (!username || !password) {
        switch(language) {
            case "english":
                res.status().json({ message: "" });
                break;
            case "spanish":
                res.status().json({ message: "" });
                break;
            default:
                res.status().json({ message: "" });
        };
        return; 
    }

    User.find({ username })
        .then((user) => {
            if(!user) {
                switch(language) {
                    case "english":
                        res.status().json({ message: "" });
                        break;
                    case "spanish":
                        res.status().json({ message: "" });
                        break;
                    default:
                        res.status().json({ message: "" });
                };
            }
            else {
                const passwordCorrect = bcrypt.compareSync(password, user.password);
                if (passwordCorrect) {
                    req.session.currentUser = user;
                    res.status().json(req.session.currentUser);
                }
            }
        })
        .catch((err) => next(err));
});

authRouter.post('/edit', (req, res, next) => {

});

authRouter.get('/logout', (req, res, next) => {

});

module.exports = authRouter;