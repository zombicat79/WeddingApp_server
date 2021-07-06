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
                res.json({ message: "Please fill in all the fields with your attendee credentials." }).status(401);
                break;
            case "spanish":
                res.json({ message: "Por favor, rellena todos los campos con tus credenciales de invitado." }).status(401);
                break;
            default:
                res.json({ message: "Si us plau, emplena tots els camps amb les teves credencials de convidat." }).status(401);
        };
        return; 
    }

    User.findOne({ username })
        .then((user) => {
            if(!user) {
                switch(language) {
                    case "english":
                        res.json({ message: "The username you provided doesn't exist. Please check again." }).status(404);
                        break;
                    case "spanish":
                        res.json({ message: "El usuario que has introducido no existe. Por favor, comprueba otra vez." }).status(404);
                        break;
                    default:
                        res.json({ message: "L'usuari que has introduït no existeix. Si us plau, prova un altre cop." }).status(404);
                };
            }
            else {
                // const passwordCorrect = bcrypt.compareSync(password, user.password);
                if (password === user.password) {
                    req.session.currentUser = user;
                    res.status(200).json(req.session.currentUser);
                }
                else {
                    switch(language) {
                        case "english":
                            res.json({ message: "The password you provided is incorrect. Please try again." }).status(404);
                            break;
                        case "spanish":
                            res.json({ message: "La contraseña que has introducido es incorrecta. Por favor, inténtalo de nuevo." }).status(404);
                            break;
                        default:
                            res.json({ message: "La contrasenya que has introduït no és correcta. Si us plau, prova un altre cop." }).status(404);
                    };
                }
            }
        })
        .catch((err) => next(err));
});

authRouter.get('/me', (req, res, next) => {
    if (req.session) {
        res.status(200).json(req.session.currentUser);
    }
    else {
        res.status(401).redirect("/");
    }
});

authRouter.post('/edit', (req, res, next) => {

});

authRouter.get('/logout', (req, res, next) => {
    req.session.destroy();
    res.status(200).redirect("/");
});

module.exports = authRouter;