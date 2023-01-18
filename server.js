// const express = require("express");
const mysql = require("mysql2");

// const app = express();
// app.use(express.json());

// app.get("/", function(req,res) {
//  res.send("here  is our express")
// })

const connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "root",
  database : "recipebook",
})
connection.connect();

connection.query(`SELECT * FROM recipebook.user`, (error,res)=>{
    if (error) throw error;
    console.log(res);
})


// app.listen(3001,function(){
//     console.log("express server is runnnig on port: 3001");

// })

