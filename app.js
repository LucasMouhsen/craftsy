const express = require("express");
const app = express();
const port = 3030;
const path = require("path")

app.listen(port,()=> console.log("servidor corriendo en http://localhost:"+port));

app.use(express.static("public"));

app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views","index.html")))