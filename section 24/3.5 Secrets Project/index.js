//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming



// handle the relative path in nodejs
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// manage server and routes using express
import express from "express";
const app = express();
const port = 3000;

// recognize incoming objects as strings
app.use(express.urlencoded({ extended: true }));


// custom logger; middleware between processing the Request and sending the Response
function logger(req, res, next){
  console.log("just got accessed for:", req.url);
  next();
};
app.use(logger);


// response to user requesting to get the home page
app.get('/',( req, res) =>{
  res.sendFile(__dirname + '/public/index.html');
});


//respond to submit post in the html form
app.post("/check", (req, res) => {
  console.log(req.body["password"]);
  if (req.body["password"] == "SJ"){
    res.sendFile(__dirname + '/public/secret.html');
  }
  else {
    res.sendFile(__dirname + '/public/index.html');
  }
});


// continued listening for any requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
