// Dependencies
const express = require('express');
const fs = require('fs');


const app = express();

// creating port
const PORT = process.env.PORT || 3001;


// asks express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));
// sets up express app to handel data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());









// app listener - starts our server
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});