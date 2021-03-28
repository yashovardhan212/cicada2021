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
        origin: "https://c1cada-iiserb.000webhostapp.com", 
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
           return  res.send("Try again")
        }else if(passwd == ""){
            return res.send("Enter a Password!")
        }
        else if(passwd == "again"){
           return  res.send(" Flag: 5ds4f54sdf54sd5f4s5d4f5sd4f")
        }else if(passwd == "password"){
            return res.send("Your password is incorrect.")
        }else{
            return res.send("D0n't w0rry! w3 ar3 watching y0u l0l")
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

app.post("/quotes",(req,res) => {
    const ip  = req.body.addrs;

    if(ip == "172.26.6.131"){return res.send("Flag: 8787sdf8s7df78b8h8n8g8h7n8gn87")}else{return res.send("[+]F00l No flag ! Try again")}
})


app.post("/db" , (req,res) => {
    const code = req.body.code;
    
    if(code == "1270011337"){
        return res.send('{
        "welcome.txt":"[+] W3lc0m3 t0 C1CADA",
        "levels.txt":"There are total 7 levels in all.",
        "about.txt":"This game is brought to you by students of IISERB.",
        "contact.txt": "cicada.iiserb3301@gmail.com",
        "dont_look_into_it.md":"I knew you will come for me! Wont find anything, lol!",
        ".a-deen":"https://c1cada-iiserb.000webhostapp.com/ūnus/",
        "no-des.txt":"Lullzzzzzz",
        ".dva":"https://c1cada-iiserb.000webhostapp.com/duo/",
        "ro0t.txt":"I am invisible.",
        "look_if_you_aint_hurt.md":"I love f00ling you, hahaha!",
        ".lev3l_1":"https://c1cada-iiserb.000webhostapp.com/level_1/",
        "lev3l1.txt":"Ahh I so enjoy watching you search for the unknown.",
        ".l3vel_2":"https://c1cada-iiserb.000webhostapp.com/level_2/",
        "lev3l2.md":"Gotta agree, you wont stop until you find",
        ".tree":"https://c1cada-iiserb.000webhostapp.com/trēs/",
        ".chye-tir-ye":"https://c1cada-iiserb.000webhostapp.com/quattuor/",
        "lev3l3.txt":"So desperate, huh!",
        ".pyat":"https://c1cada-iiserb.000webhostapp.com/quīnque/",
        "lev3l4.md":"Let's just be honest. You wont find it.",
        ".shest":"https://c1cada-iiserb.000webhostapp.com/s3x/",
        ".syem":"https://c1cada-iiserb.000webhostapp.com/septem/",
        "lev3l5.txt":"How's the josh?? Could'nt find it, sir. Hahaha!!",
        ".vo-syem":"https://c1cada-iiserb.000webhostapp.com/level_5/",
        "lev3l6":"A free advice, get yourself an appointment from an Eye specialist. Probably he might help you LOOK for the right thing.",
        ".dyev-yat":"https://c1cada-iiserb.000webhostapp.com/level_6/",
        "lev3l7.txt":"Alright a free hint... Did you see it?",
        ".dyes-yat":"https://c1cada-iiserb.000webhostapp.com/level_7/"
    }')  }else{
       return res.send("")}
})
