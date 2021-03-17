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
        origin: 'https://students.iiserb.ac.in/', 
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

  app.post("/b061bb69dca57e785424524587", (req, res) => {
            fs.readFile("MainAuth.JSON", "utf-8", (err, data) => {
                const tempdata = JSON.parse(data);
            

        const auth_key = req.body.auth_key;
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_key ){
                return res.send('Im5hbWUiOiJGbGFnIiwiVmFsdWUiOiJjZTBlZTMyN2NiZDY2YjY1OTUyNmYyYjg3Njc0ODYyNSIsIm1lc3NhZ2UiOiJEb24ndCBnbyBoZXJlIGFuZCB0aGVyZSBnbyBiYWNrIHdoZXJlIHlvdSB3ZXJlIg==');
               
            }
        }
      
            return res.send("3RR0R 404 N0T F0UND");
        });

});

// First flag submit record saving function and giving response to go to l2

app.post("/dca57e78542b069452458761bb" , async (req,res) => {

    var temp_allowed = false;
    var auth_tid = req.body.auth_id;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid){
                temp_allowed = true;
                var tflag1 = req.body.flag1;
                if(tflag1=="ce0ee327cbd66b659526f2b876748625"){
                //console.log(1)
                    
                    var m = JSON.parse(fs.readFileSync("MainAuth.JSON").toString());
                        for(let item1 in m){
                            if(item1 == item){
                                m[item1].level1 = "1"
                            }
                        }
                    fs.writeFileSync("MainAuth.JSON", JSON.stringify(m));
                
                    

                     return res.send("e99fc49e1fb45c67780f112c7943a804")
            }else{
                return res.send("d21e620befc91d5c39d249e1fb4a804s")
            }
                break;
        }
    }
        if(temp_allowed == false){
            return res.send("50m3thing 15 Wr0ng with you Login!!!");
        }
});
        
    
    })
   
app.post("/544sa5f425sd4f78sd4fs4df5424sd", (req,res) => {
    const auth_tid = req.body.auth_id;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            //console.log(auth_tid==tempdata[item].auth_id)
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1"){
                    //console.log(1)
                    return res.send("e99fc49e1fb45c67780f112c7943a804");
                    break;
            }
        }
    
            //console.log(11)
           return  res.send("d21e620befc91d5c39d249e1fb4a804s");
    
    }
    );
})

app.post("/544sa5f425sd4f78sd4fs4df", (req,res) => {
    const auth_tid = req.body.auth_id;
    const cod3 = req.body.cod3;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1"){
                    if(cod3=="sasfsafsdf78787454"){
                        return res.send("e99fc49e1fb45c67780f112c7943a804")
                        break;
                    }

            }}});});


app.post("/544sa5f425sd4f7", (req,res) => {
    const song = req.body.song;const movie  = req.body.movie;
    const person = req.body.person ; const reside = req.body.reside;

    var auth_tid = req.body.auth_id;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1"){
                if(song=="downloadtorubik" && movie == "snowden" && person == "edwardsnowden" && reside == "russia" ){
                    var m = JSON.parse(fs.readFileSync("MainAuth.JSON").toString());
                        for(let item1 in m){
                            if(item1 == item){
                                m[item1].level2 = "1"
                            }
                        }
                    fs.writeFileSync("MainAuth.JSON", JSON.stringify(m));
                    return res.send("e99fc49e1fb45c67780f112c7943a804");
                    break;
                
            }
            }}});

    
})

app.post("/544sa5f425sd4f78sdlevel3", (req,res) => {
    const auth_tid = req.body.auth_id;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1"){
                
                    return res.send("e99fc49e1fb45c67780f112c7943a804");
                    break;
            }
        }
        
            return  res.send("d21e620befc91d5c39d249e1fb4a804s");
     
    }
    );
})


app.post("/544sa5f425sd4f78sdlevel33", (req,res) => {
    const auth_tid = req.body.auth_id;
    const lat = req.body.lat;
    const long = req.body.long;
    const place = req.body.place;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1"){
                if(lat == "23" && long == "77" && place == "thecityoflight"){
                        return res.send("e99fc49e1fb45c67780f112c7943a804:NDk6NTE6NTE6NTU6NjQ6NTA6NTE6NTU6NTU6NjQ6ODI6NDg6NDg6ODQ6NjQ6NDk6NTA6NTU6NDg6NDg6NDk6NjQ6NDk6NTA6NTE=")
            }else{
                return res.send("N00B")
            }
        }
    }
 } );
})

app.post("/jdhbkasbdahbdhasbjdlevel3" , (req,res) => {
    const auth_tid = req.body.auth_id;
    const flag2 = req.body.flag2;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1"){
                if(flag2 == "49 51 51 55 64 50 51 55 55 64 82 48 48 84 64 49 50 55 48 48 49 64 49 50 51"){
                    var m = JSON.parse(fs.readFileSync("MainAuth.JSON").toString());
                        for(let item1 in m){
                            if(item1 == item){
                                m[item1].level3 = "1"
                            }
                        }
                    fs.writeFileSync("MainAuth.JSON", JSON.stringify(m));
                    return res.send("e99fc49e1fb45c67780f112c7943a804");

                }else{
                    return res.send("N00B")
                }
            }}});
})

app.post("/544sa5f424444444444" , (req,res) => {
    const auth_tid = req.body.auth_id;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1" && tempdata[item].level3 == "1"){
                
                    return res.send("e99fc49e1fb45c67780f112c7943a804");
                    break;
            }
        }
       
            return  res.send("d21e620befc91d5c39d249e1fb4a804s");
     
    }
    );
})


app.post("/qlsdsdfsdfqlsdfsdfql", (req,res) => {
    const uname = req.body.uname;
    const passwd = req.body.passwd;

    var format = /^[A-Za-z0-9 ]+$/;
    if(uname=='Root"&&this.password==true){login_success(1)}//' && passwd.length>=0){
        
            return res.send("jasndkashdashbdjashbdasgdghasvdhgasvdgasvd78342587346578435:bG9nZ2VkIDFuIGFzICBNci4gUjAwVA==")
      }else if(!format.test(uname)){
          //this.errorstat = true;
          //this.invalidstat = false;
          var strsnd = 'if(this.username=="this.Username"&&this.password=="this.passwd"){login_success(1)}'.replace("this.Username",uname).replace("this.passwd",passwd);
          
          //datalol = Base64.encode(strsnd);

            strsnd = Buffer.from(strsnd).toString('base64');
          return res.send(strsnd);
      }
      else{
        //this.invalidstat = true;
        //this.errorstat = false;
        return res.send("SU5WQUxJRCBDUkVERU5USUFMUw==")
      }
})

app.post("/544sa5f42444444prf",(req,res)=> {
    const auth_tid = req.body.auth_id;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1" && tempdata[item].level3 == "1"){
                
                    return res.send("UjAwVDoxMjcuMC4wLjE6UjAwVDEzMzdAcHJvdG9ubWFpbC5jb206MTk5OQ==");
                    break;
            }
        }
        
            return  res.send("d21e620befc91d5c39d249e1fb4a804s");
     
    });
})


app.post("/544sa5f42444444prfnot5s", (req,res)=> {
    res.send("cHdkX2RzTUxfMl9za3k6SSBoYXZlIGEgbWVldGluZyB0b21vcnJvdy46MTMgJiAyNiA=")
})

app.post("/544sa5f42sdifjFLag3", (req,res)=>
    {
        const auth_tid = req.body.auth_id;
        const flag3 = req.body.flag3;
        fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
            const tempdata = JSON.parse(data);
            
            for(var item in tempdata){
                if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1" && tempdata[item].level3 == "1"){
                    
                        if(flag3=="ksjdfusebfgtryuhdsfrohuhj"){
                            var m = JSON.parse(fs.readFileSync("MainAuth.JSON").toString());
                        for(let item1 in m){
                            if(item1 == item){
                                m[item1].level4 = "1"
                            }
                        }
                    fs.writeFileSync("MainAuth.JSON", JSON.stringify(m));
                            return res.send("e99fc49e1fb45c67780f112c7943a804");
                        }
                }
            }
           
                return  res.send("d21e620befc91d5c39d249e1fb4a804s");
         
        });
    }
)


app.post("/ledfvelsdf5asddceid" ,(req,res) => {
    const auth_tid = req.body.auth_id;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1" && tempdata[item].level3 == "1" && tempdata[item].level4 == "1"){
                
                    return res.send("e99fc49e1fb45c67780f112c7943a804");
                    break;
            }
        }
       
            return  res.send("d21e620befc91d5c39d249e1fb4a804s");
     
    }
    );
})


app.post("/ledfvelsdf5asdid" ,(req,res) => {
    const auth_tid = req.body.auth_id;
    const val = req.body.val;
    //console.log(Number.isInteger(Number(val)))
    if(Number.isInteger(Number(val))==true && Number(val) >= 1 && Number(val) <= 6){

        fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
            const tempdata = JSON.parse(data);
            
            for(var item in tempdata){
                if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1" && tempdata[item].level3 == "1" && tempdata[item].level4 == "1"){
                        if(tempdata[item].val == val){
                            return res.send("e99fc49e1fb45c67780f112c7943a804");
                        break;
                        }else{
                            var m = JSON.parse(fs.readFileSync("MainAuth.JSON").toString());
                            for(let item1 in m){
                                if(item1 == item){
                                    m[item1].val = val;
                                }
                            }
                        fs.writeFileSync("MainAuth.JSON", JSON.stringify(m));
                        }
                        
                }
            }
           
                return  res.send("d21e620befc91d5c39d249e1fb4a804s");
         
        }
        );

    }else{return res.send("d21e620befc91d5c39d249e1fb4a804s")}
    
})


app.post("/level5asdkjnjknda", (req,res) => {
    const auth_tid = req.body.auth_id;
    const keys = req.body.keys;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1" && tempdata[item].level3 == "1" && tempdata[item].level4 == "1"){
                    if(keys == "Alt:Ctrl:Delete:"){
                        res.send("e99fc49e1fb45c67780f112c7943a804");
                    }else{
                        res.send("[+] Try Hard");
                    }

            }
        
        }
    
    });
})


app.post("/level5asdkknda",(req,res) => {
    const uname = req.body.uname;
    const passwd = req.body.passwd;
    const auth_tid = req.body.auth_id;
    fs.readFile("MainAuth.JSON", "utf-8", (err, data) => { 
        const tempdata = JSON.parse(data);
        
        for(var item in tempdata){
            if(tempdata[item].auth_id == auth_tid && tempdata[item].level1 == "1" && tempdata[item].level2 == "1" && tempdata[item].level3 == "1" && tempdata[item].level4 == "1"){
                    if(uname == "administrator" && passwd =="administrator"){
                            return res.send("[+]Flag:54DFG65T5G45DG46D5G48ER4G8D48F4G6D5G654")
                    }else if(uname == "administrator" && passwd ==""){
                        return res.send("[+]Flag:54DFG65T5G45DG46D5G48ER4G8D48F4G6D5G654")
                    }else{
                        return res.send("[+] Try Harder")
                    }
            }
        }
    }
    );
})


app.post("/alskdjh87657776", (req,res) => {
    const flag1 = req.body.flag1;
    const flag2 = req.body.flag2;

    const flag3 = req.body.flag3;

    const flag4 = req.body.flag4;
    const uname = req.body.uname;
    const passwd = req.body.passwd;
    const email = req.body.email;

    if(flag1 =="ce0ee327cbd66b659526f2b876748625" && flag2 == "49 51 51 55 64 50 51 55 55 64 82 48 48 84 64 49 50 55 48 48 49 64 49 50 51" && flag3 == "ksjdfusebfgtryuhdsfrohuhj" && flag4 == "54DFG65T5G45DG46D5G48ER4G8D48F4G6D5G654"){
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
  port: 587,

  service: 'gmail',
  auth: {
    user: 'cicada.iiserb3301@gmail.com',
    pass: 'asdf;lkj567%^&'
  }
});

var mailOptions = {
  from: 'cicada.iiserb3301@gmail.com',
  to: 'cicada.iiserb3301@gmail.com',
  subject: 'Sending Email using Node.js',
  text: email.toString()+Date().toString()
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); /*axios.post('https://cicada2021.herokuapp.com/data-clt', {"email":email})
    .then((res) => {
        ///console.log(`Status: ${res.status}`);
        //console.log('Body: ', res.data);
        
    }).catch((err) => {
        console.error(err);
    });*/


          
            return res.send("[+]Thank you for playing C1CADA 3301.Further Communication will be mailed to you in the email address provided earlier");
    }else{
            return res.send("[+]D0n't Try T0 B3c0m3 0v3r$m@rT");
    }

})


