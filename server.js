// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    console.log(`running on localhost: ${port}`);
  };

// GET route
// get all data from the server and here i can display it in HTML
app.get('/all', (req, res)=>{
  res.send(projectData);});


// POST route
// post dataInformations to server
app.post('/add', addInformations);

function addInformations(req,res){
  projectData = {
    date: req.body.date,
    temperature: req.body.main.temp,
    feelings: req.body.feelings
  }
    

  res.send(projectData);
  console.log(projectData);
}