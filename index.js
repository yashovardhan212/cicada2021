const express =  require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
var fs = require("fs");
const { json } = require("body-parser");
const axios = require('axios');


const editJsonFile = require("edit-json-file");
const updateJsonFile = require('update-json-file')

let file = editJsonFile("MainAuth.JSON");
const options = { defaultValue: {} }

var nodemailer = require('nodemailer');
const { emit } = require("process");


app.use(
    
    cors({ 
        origin: "null", 
        methods: 'GET,POST',
        allowedHeaders: [
            'Content-Type', 
            
            'Origin', 
           
        ], 
        preflightContinue: false 
    }),
    bodyparser.json()
    
);
app.listen(process.env.PORT || 4300, () => {
  //console.log("The server started on port 4300 !!!!!!");
});

app.get("/", (req, res) => {
  return res.send("hey welcome")
});




app.post("/level1", (req, res) => {
  
 
        const passwd = req.body.password;
       // console.log(req.body)
        if(passwd == "incorrect"){
           return  res.send("[+] Try again")
        }else if(passwd == ""){
            return res.send("Enter a Password!")
        }
        else if(passwd == "again"){
           return  res.send(" Flag: 5ds4f54sdf54sd5f4s5d4f5sd4f")
        }else{
            return res.send("Your password is incorrect.")
        }
        
  });


 


