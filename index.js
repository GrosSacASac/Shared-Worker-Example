/*index.js server*/
"use strict";

const STEP = process.env.STEP || 3;
const PORT = process.env.PORT || 8080;


const express = require("express");
const app = express();
const server = require("http").Server(app);



const start = port => {
    app.use(express.static(`${__dirname}`));

    app.get("/", (req, res) => {
        res.sendFile(`${__dirname}/a.html`);
    });

    
    server.listen(port);

    console.log(`Server running at http://127.0.0.1:${port}/`);
}

start(PORT);
