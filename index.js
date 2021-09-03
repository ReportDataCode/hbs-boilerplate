const express = require("express");
const cookie = require("cookie-parser");
const sql = require("mysql2");
const dotenv = require("dotenv");
const index = express();


const hostName = "localhost";
const port = process.env.port || 3000;
const path = require("path");

dotenv.config({path: './.env'});

index.set("view engine", "hbs");
index.use(express.urlencoded({extended: true}));
index.use("/", require("./route/indexroute"));
index.listen(port, hostName, () => {
    console.log(`Server Running at http://${hostName}:${port}`);
})
