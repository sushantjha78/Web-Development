// handle the relative path in nodejs
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// manage server and routes using express
import express from "express";
const app = express();
const port = 3000;


// custom logger; middleware between processing the Request and sending the Response
function logger(req, res, next){
  console.log("just got accessed for:", req.url);
  next();
};
app.use(logger);

// recognize incoming objects as strings
app.use(express.urlencoded({ extended: true }));


// response to user requesting to get the home page
app.get('/',( req, res) =>{
  res.sendFile(__dirname + '/public/index.html');
});


//respond to submit post in the html form
app.post("/submit", (req, res) => {
  console.log(req.body.street);
  res.send(req.body.street + req.body.pet);
});


// continued listening for any requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
