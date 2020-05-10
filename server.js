const express = require('express')
const bodyParser = require('body-parser')
const firebase = require('firebase');

const cors = require('cors')

const PORT = process.env.PORT || 3000;
const app = express();
const delay = require('delay');
var admin = require("firebase-admin");

var serviceAccount = require("./admin.json");

 var pass,email;

 admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://codellion-connect.firebaseio.com"
  });
  let db = admin.firestore();
  var firebaseConfig = {
    apiKey: "AIzaSyBA-MDWxrP6d_yG6NBaKm_lI7HQenp6vNo",
    authDomain: "codellion-connect.firebaseapp.com",
    databaseURL: "https://codellion-connect.firebaseio.com",
    projectId: "codellion-connect",
    storageBucket: "codellion-connect.appspot.com",
    messagingSenderId: "441848860273",
    appId: "1:441848860273:web:c9696369cc466551c415d0",
    measurementId: "G-K94DZ9SRPC"  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://alexajovo-c6937.web.app');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(bodyParser.json());


let sess;
 global.checkuser;
 global.checkpass;
 app.get('/',function(req,res)
 {
    
  // res.sendFile('index.html');
    res.send("Hello server");
 })


app.post('/login',function(req,res)
{

  console.log(req.body.email,req.body.password)

      firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).
      then(function(result) {

        res.json({
            message:"sucessfull"
          })
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        res.json({
            message:"failed"
          })
        console.log(errorMessage);      
    });
      
     
});




 app.listen(PORT,function()
 {
     console.log("sunn raha hu ")
 });