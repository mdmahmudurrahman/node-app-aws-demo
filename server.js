const express = require("express");
// to log all of the request from the users
const morgan = require("morgan");

const app = express();

//Middleware
app.use(morgan('dev'));



app.get("/", (req, res) => {
  let testName = "Nodejs";
  debugger;
  res.json("My name is"+ testName);
});

// app.post();
// app.put();
// app.delete();

app.listen(3000, (err) => {
  if(err) throw err;
  console.log("Server is running on port 3000");
});
