// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const cors = require('cors');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config/index")(app);
require("./config/session")(app);

// default value for title local
const projectName = "weddingapp_server";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
const authRouter = require("./routes/auth/auth.router");
const productRouter = require("./routes/product/product.router");
const userRouter = require("./routes/user/user.router");

app.use("/", index);
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
