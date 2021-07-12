// Setup empty JS object to act as endpoint for api data
let projectAPIData = {};
var path = require('path')
// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
const dotenv = require('dotenv');
dotenv.config();

let url="https://api.meaningcloud.com/sentiment-2.1?";
let apiKey="key="+process.env.API_KEY;
let lang='&lang=en';
const fetch = require('node-fetch');


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
//As after express ver 4 body-parser is deprecated and included in express packages instead
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors =require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));



// Setup Server
// set port to listen through
// // designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//GET and POST routes

app.get('/', function (req, res) {
    //change it to dist html
    res.sendFile('dist/index.html')
})


// //GET Data function  
const getData= async(url,apiKey,inputUrl,lang)=>{
    const res=await fetch(url+apiKey+inputUrl+lang);
       try {
           const data = await res.json();
           console.log(data);
           return data;
         } catch(error) {
           console.log("error", error);
           // appropriately handle the error
         }
       }

app.post("/article", function(req,res){
const inputUrl = "&url="+req.body.inputUrl
getData(url,apiKey,inputUrl,lang)
.then(data=>
    {
        const newData={
            model:data.model,
            score_tag : data.score_tag,
            agreement : data.agreement,
            subjectivity : data.subjectivity,
            confidence : data.confidence,
            irony : data.irony,
            text:data.sentence_list[0].text
        }
        projectAPIData=newData
        res.send(projectAPIData);
        console.log(projectAPIData);
    }
)
.catch(error=>console.log("error", error))   
});


