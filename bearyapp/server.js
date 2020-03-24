"use strict";
const log = console.log;

const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors');


const bodyParser = require("body-parser");
app.use(bodyParser.json());

//const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true
  };
  
  app.use(cors(corsOptions)); // to accept request from other ports

/////////// DB operations //////////////////
const dbPath = "./db/responses.json";

function readDB() {
    log("reading the db file");
    var data;

    try {
        data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    } catch (e) {
        data = [];
    }
    return data;
}

function saveToDB(emotion, text) {
    let matched = false;
    log("writing the db file");
    // read the db file
    const responseObj = readDB();

    for (var i = 0; i < responseObj.length; i++) {
        const emotionObj = responseObj[i];
        if (emotionObj.emotion === emotion) {
            emotionObj.responses.push(text);
            matched = true;
            break;
        }
    }
    
    if (!matched) {
        responseObj.push(
            {
                emotion: emotion,
                responses: [text]
            });
    }

    log(responseObj);
    // write back to db file
    try {
        fs.writeFileSync(dbPath, JSON.stringify(responseObj));

    } catch (e) {
        log(e)
    }
}

/////////////// Routes ////////////////////////

// a GET route to get all responses
app.get("/responses", (req, res) => {
    const responses = readDB();
    res.send( responses);
});

// a GET route to get responses of a specific emotion
app.get("/responses/:emotion", (req, res) => {
    const emotion = req.params.emotion;

    log(emotion)

    const responseObj = readDB();
    log(responseObj);

    for (var i = 0; i < responseObj.length; i++) {
        const emotionObj = responseObj[i];
        if (emotionObj.emotion === emotion) {
            res.send(emotionObj.responses);
            return;
        }
    }
    res.status(404).send();
});

// a POST route to write response to a specific emotion
app.post("/responses", (req, res) => {
    const {emotion, text} = req.body;
    try {
        saveToDB(emotion, text);
        res.send("Successfully stored into DB.");
    } catch(e){
        res.status(500).send(e);
    }
});

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/bearyFront/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/bearyFront/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 3001;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
