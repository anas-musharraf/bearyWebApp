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
    origin: ['http://localhost:3000', 'https://bearyapp.herokuapp.com'],
    credentials: true
  };
  
  app.use(cors(corsOptions)); // to accept request from other ports

/////////// DB operations //////////////////
const responsesDBPath = `${__dirname}/db/responses.json`;
const interactionsDBPath = `${__dirname}/db/interactions.json`;


function readDB(dbPath) {
    log("reading the db file");
    var data;

    try {
        data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    } catch (e) {
        data = [];
    }
    return data;
}

function saveResponses(dbPath, emotion, text) {
    let matched = false;
    log("writing the db file");
    // read the db file
    const responseObj = readDB(dbPath);

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



function saveInteractions(dbPath, emotion, input, response) {
    log("writing the db file");
    // read the db file
    const responseObj = readDB(dbPath);
    
    responseObj.push(
        {
            emotion: emotion,
            input: input,
            response: response
        });

    log(responseObj);
    // write back to db file
    try {
        fs.writeFileSync(dbPath, JSON.stringify(responseObj));

    } catch (e) {
        log(e)
    }
}

function deleteInteractions(dbPath) {
    console.log("deleting interactions");
    const responseObj = [];
    try {
        fs.writeFileSync(dbPath, JSON.stringify(responseObj));

    } catch (e) {
        log(e)
    }
}

function deleteResponse(dbPath, emotion, text) {
    console.log("deleting a response");
    // read the db file
    const responseObj = readDB(dbPath);

    for (var i = 0; i < responseObj.length; i++) {
        const emotionObj = responseObj[i];
        if (emotionObj.emotion === emotion) {
            const index = emotionObj.responses.indexOf(text);
            if (index > -1) {
                emotionObj.responses.splice(index, 1);
            }
            break;
        }
    }

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
    const responses = readDB(responsesDBPath);
    res.send( responses);
});

// a GET route to get responses of a specific emotion
app.get("/responses/:emotion", (req, res) => {
    const emotion = req.params.emotion;

    log(emotion)

    const responseObj = readDB(responsesDBPath);
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
        saveResponses(responsesDBPath, emotion, text);
        res.send("Successfully stored into DB.");
    } catch(e){
        res.status(500).send(e);
    }
});


// a GET route to read all interactions to a specific emotion
app.get("/interactions", (req, res) => {
    const interactions = readDB(interactionsDBPath);
    res.send(interactions);
});

// a POST route to write interaction to a specific emotion
app.post("/interactions", (req, res) => {
    const {emotion, input, response} = req.body;
    try {
        saveInteractions(interactionsDBPath, emotion, input, response);
        res.send("Successfully stored into DB.");
    } catch(e){
        res.status(500).send(e);
    }
});

// a POST route to delete a response to a specific emotion
app.post("/deleteresponse", (req, res) => {
    const {emotion, text} = req.body;
    try {
        deleteResponse(responsesDBPath, emotion, text);
        res.send("Successfully deleted from db.");
    } catch(e){
        res.status(500).send(e);
    }
});

// a POST route to delete a response to a specific emotion
app.post("/deleteinteractions", (req, res) => {
    try {
        deleteInteractions(interactionsDBPath);
        res.send("Successfully deleted from db.");
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
