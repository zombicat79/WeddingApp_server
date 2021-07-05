const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./../models/User.model');
const Question = require('./../models/Question.model');
const Product = require('./../models/Product.model');

const users = [{
    username: "testuser1",
    password: "test"
}];

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then((x) => {
        const pr = x.connection.dropDatabase();
        console.log("Connected to Mongo! Seeding initial data!");
        return pr;
    })
    .then(() => User.create(users))
    .then((newUsers) => mongoose.connection.close())
    .catch((err) => console.log("Error connecting to Mongo", err));
