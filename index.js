const express =  require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
var fs = require("fs");
const { json } = require("body-parser");
const axios = require('axios');

const fetch = require('node-fetch');


const editJsonFile = require("edit-json-file");
const updateJsonFile = require('update-json-file')

let file = editJsonFile("MainAuth.JSON");
const options = { defaultValue: {} }

var nodemailer = require('nodemailer');
const { emit } = require("process");


app.use(
    
    cors({ 
<<<<<<< HEAD
        origin: "*", 
=======
        origin: 'https://students.iiserb.ac.in', 
>>>>>>> 8c8e24478142fdd977ef5847327fbd9020f162c8
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


<<<<<<< HEAD
=======
app.get("/b061bb69dca57e5c39d21e620befc91d", (req, res) => {
    return res.send("D0n't 1nsp3ct t00 muCh ,GO BACK AND PLAY CICADA ! Y0U W0N'T GET ANYTHING HERE!!!")
  });
//main auth post request handling
app.post("/b061bb69dca57e5c39d21e620befc91d", (req, res) => {
  
  fs.readFile("MainAuth.JSON", "utf-8", (err, data) => {
        const tempdata = JSON.parse(data);
       
        var allowed = false;
        for(var item in tempdata){
            if(tempdata[item].uname == req.body.uname && tempdata[item].passwd == req.body.passwd){
                
                return res.send("e99fc49e1fb45c67780f112c7943a804"+":"+(tempdata[item].auth_id)+":"+"Hey " + req.body.uname+", " + "Welcome to CICADA 2021");
                this.allowed = true;
                break;
            }
        }
        if(this.allowed == false){
            return res.send("d21e620befc91d5c39d249e1fb4a804s"+':'+"You AR3  n0T aLL0W3D ON TH1$ $3rV3r!!!");
        }
        this.allowed = false;}
        
  );});


  //function to check if user is valid or not 
function IsuserValid(auth_id_value){
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        var temp_allowed = false;
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_id_value){
                return (true);
                break;
                temp_allowed = true;
                console.log("true user")
                
        }
    }
        if(temp_allowed==false){return (false); console.log("wrong user")};
    });
    
  }

  //robots txt data handling by post request
>>>>>>> 8c8e24478142fdd977ef5847327fbd9020f162c8


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



 app.post("/Randomlevel", (req, res) => {
  
 
        const location_name = req.body.lol;
       if(location_name == "Oymyakon"){return res.send("7656asda7sd675as6d7gdas7dg7agsd76gd")}else{return res.send("[+]F00l No flag ! Try again")}
        
  });




  app.post("/levelc", (req, res) => {
  
    const idnum = req.body.idnumber;
    const role  = req.body.role;
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
     const passwd = makeid(20);
     console.log(role)
     if(role == "user"){
         return  res.send("[+] Y0ur passw0rd 15 "+passwd)
     }else if(role=="admin"){
         return res.send("Y0ur FLAG is 67dsf6767sd76f765fgs5df5f3v32v3")
     }else{
         return res.send("0")
     }

});


app.post("/secret", (req, res) => {
  
 
    const usernm = req.body.usernm;
    const passwd = req.body.passwd;

   if(usernm == "administrator" && passwd == "dfg67tdfg7df67gfg32yt34frytf391298923g674"){return res.send("Flag: 7656asda7s-s0df90fs0d9s09dfsd76gd")}else{return res.send("[+]F00l No flag ! Try again")}
    
});

app.post("/code",(req,res) => {
    const code  = req.body.code;

    if(code == "3301962047958106"){return res.send("Flag: 6546sdf45sd21f56sd4f6s8df46s5df4")}else{return res.send("[+]F00l No flag ! Try again")}
})


app.post("/levelsj",(req,res) => {
    const msg  = req.body.msg;
    if(msg=="Hello" || msg=="hello" || msg=="hi"){
        console.log(msg)
        return res.send("Hii Root")
    }else if(msg==""){
        return res.send("What ?")
    }else {
        fetch('http://127.0.0.1:4300' +'/alskkdjasdkjajsdasdkjaslkdjalskjdlkasjdlkasjdlkjasdlkjjasdj/'+msg)
    .then(res => res.text())
    .then(text => console.log(text))
    }

} )

app.get("/alskkdjasdkjajsdasdkjaslkdjalskjdlkasjdlkasjdlkjasdlkjjasdj/:code", (req, res) => {
    const code = req.params.code;
    //console.log(code)
    return res.send('<input id="password" value="adminpassword1234@1234@pop@123"> <p id="secret"></p>  '+code)
  });
  

app.get("/check/:lol",(req,res) => {
    console.log(req.params.lol);

} )
  
  