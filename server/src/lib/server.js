"use strict";

import cors from "cors";
// const cors = require("cors");
import express from "express";
// const express = require("express");
import mongoose from "mongoose";
// const mongoose = require("mongoose");
import bodyParser from "body-parser";
// const bodyParser = require("bodyParser");

const app = express();
const router = express.Router();

// env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(bodyParser.json(), cors());

// app.use(require("../route/auth-router"));

app.all("*", (request, response) => {
    console.log("Returning a 404 from the catch-all route");
    return response.sendStatus(404);
});

// error middleware
// app.use(require("./error-middleware"));

const start = () => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
};

const stop = () => {
    app.close(PORT, () => {
        console.log(`Shut down on port: ${PORT}`);
    });
};

export { start, stop };
