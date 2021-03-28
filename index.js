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
        return res.send("ewogICAgICAgICJ3ZWxjb21lLnR4dCI6IlsrXSBXM2xjMG0zIHQwIEMxQ0FEQSIsCiAgICAgICAgImxldmVscy50eHQiOiJUaGVyZSBhcmUgdG90YWwgNyBsZXZlbHMgaW4gYWxsLiIsCiAgICAgICAgImFib3V0LnR4dCI6IlRoaXMgZ2FtZSBpcyBicm91Z2h0IHRvIHlvdSBieSBzdHVkZW50cyBvZiBJSVNFUkIuIiwKICAgICAgICAiY29udGFjdC50eHQiOiAiY2ljYWRhLmlpc2VyYjMzMDFAZ21haWwuY29tIiwKICAgICAgICAiZG9udF9sb29rX2ludG9faXQubWQiOiJJIGtuZXcgeW91IHdpbGwgY29tZSBmb3IgbWUhIFdvbid0IGZpbmQgYW55dGhpbmcsIGxvbCEiLAogICAgICAgICIuYS1kZWVuIjoiaHR0cHM6Ly9jMWNhZGEtaWlzZXJiLjAwMHdlYmhvc3RhcHAuY29tL8WrbnVzLyIsCiAgICAgICAgIm5vLWRlcy50eHQiOiJMdWxsenp6enp6IiwKICAgICAgICAiLmR2YSI6Imh0dHBzOi8vYzFjYWRhLWlpc2VyYi4wMDB3ZWJob3N0YXBwLmNvbS9kdW8vIiwKICAgICAgICAicm8wdC50eHQiOiJJIGFtIGludmlzaWJsZS4iLAogICAgICAgICJsb29rX2lmX3lvdV9haW50X2h1cnQubWQiOiJJIGxvdmUgZjAwbGluZyB5b3UsIGhhaGFoYSEiLAogICAgICAgICIubGV2M2xfMSI6Imh0dHBzOi8vYzFjYWRhLWlpc2VyYi4wMDB3ZWJob3N0YXBwLmNvbS9sZXZlbF8xLyIsCiAgICAgICAgImxldjNsMS50eHQiOiJBaGggSSBzbyBlbmpveSB3YXRjaGluZyB5b3Ugc2VhcmNoIGZvciB0aGUgdW5rbm93bi4iLAogICAgICAgICIubDN2ZWxfMiI6Imh0dHBzOi8vYzFjYWRhLWlpc2VyYi4wMDB3ZWJob3N0YXBwLmNvbS9sZXZlbF8yLyIsCiAgICAgICAgImxldjNsMi5tZCI6IkdvdHRhIGFncmVlLCB5b3Ugd29udCBzdG9wIHVudGlsIHlvdSBmaW5kIiwKICAgICAgICAiLnRyZWUiOiJodHRwczovL2MxY2FkYS1paXNlcmIuMDAwd2ViaG9zdGFwcC5jb20vdHLEk3MvIiwKICAgICAgICAiLmNoeWUtdGlyLXllIjoiaHR0cHM6Ly9jMWNhZGEtaWlzZXJiLjAwMHdlYmhvc3RhcHAuY29tL3F1YXR0dW9yLyIsCiAgICAgICAgImxldjNsMy50eHQiOiJTbyBkZXNwZXJhdGUsIGh1aCEiLAogICAgICAgICIucHlhdCI6Imh0dHBzOi8vYzFjYWRhLWlpc2VyYi4wMDB3ZWJob3N0YXBwLmNvbS9xdcSrbnF1ZS8iLAogICAgICAgICJsZXYzbDQubWQiOiJMZXQncyBqdXN0IGJlIGhvbmVzdC4gWW91IHdvbnQgZmluZCBpdC4iLAogICAgICAgICIuc2hlc3QiOiJodHRwczovL2MxY2FkYS1paXNlcmIuMDAwd2ViaG9zdGFwcC5jb20vczN4LyIsCiAgICAgICAgIi5zeWVtIjoiaHR0cHM6Ly9jMWNhZGEtaWlzZXJiLjAwMHdlYmhvc3RhcHAuY29tL3NlcHRlbS8iLAogICAgICAgICJsZXYzbDUudHh0IjoiSG93J3MgdGhlIGpvc2g/PyBDb3VsZCdudCBmaW5kIGl0LCBzaXIuIEhhaGFoYSEhIiwKICAgICAgICAiLnZvLXN5ZW0iOiJodHRwczovL2MxY2FkYS1paXNlcmIuMDAwd2ViaG9zdGFwcC5jb20vbGV2ZWxfNS8iLAogICAgICAgICJsZXYzbDYiOiJBIGZyZWUgYWR2aWNlLCBnZXQgeW91cnNlbGYgYW4gYXBwb2ludG1lbnQgZnJvbSBhbiBFeWUgc3BlY2lhbGlzdC4gUHJvYmFibHkgaGUgbWlnaHQgaGVscCB5b3UgTE9PSyBmb3IgdGhlIHJpZ2h0IHRoaW5nLiIsCiAgICAgICAgIi5keWV2LXlhdCI6Imh0dHBzOi8vYzFjYWRhLWlpc2VyYi4wMDB3ZWJob3N0YXBwLmNvbS9sZXZlbF82LyIsCiAgICAgICAgImxldjNsNy50eHQiOiJBbHJpZ2h0IGEgZnJlZSBoaW50Li4uIERpZCB5b3Ugc2VlIGl0PyIsCiAgICAgICAgIi5keWVzLXlhdCI6Imh0dHBzOi8vYzFjYWRhLWlpc2VyYi4wMDB3ZWJob3N0YXBwLmNvbS9sZXZlbF83LyIKICAgIH0=")
       }else{
       return res.send("")}
})
