const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = app => {
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: true,
            saveUninitialized: false,
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URI,
            })
        })
    );
};