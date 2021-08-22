const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./../models/User.model');
const Question = require('./../models/Question.model');
const Product = require('./../models/Product.model');

const productData = require("./../public/js/product.data");
const userData = require("./../public/js/user.data");
const questionData = require("./../public/js/question.data");

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
    .then(() => User.create(userData))
    .then(() => Product.create(productData))
    .then(() => Question.create(questionData))
    .then(() => mongoose.connection.close())
    .catch((err) => console.log("Error connecting to Mongo", err));
