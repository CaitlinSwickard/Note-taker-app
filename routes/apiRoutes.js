// api routes

// dependencies 
const path = require('path');
const fs = require('fs')
// npm app that allows for unique ids to be created
var uniqid = require('uniqid');


// routing
module.exports = (app) => {


  // GET /api/notes should read the db.json file and return all saved notes as JSON.
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
  // You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);

    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });
  // to delete notes
  // app.post('/notes/:id', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../db/db.json'));
  // })
};


// taking the input create a page for the functionality of that, put it in here