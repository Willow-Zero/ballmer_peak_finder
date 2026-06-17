import express from "express";
import hbs from "hbs";
import path from "path";

let port = 3000;
export let server = null;
export const app = express();
app.set("view engine","hbs");

app.listen(port, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});

app.get('/', function(req, res) {
    res.render("index")
});

app.get('/test',function(req,res){
    res.render("test")
});
