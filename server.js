const express = require("express");

const app = express();

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
