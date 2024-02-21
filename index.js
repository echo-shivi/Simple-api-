const express = require ("express");

const cors = require("cors");
const { apiData } = require("./apis");

const app = express();


app.use(cors())

// const apiData = require("./data.json");
console.log(apiData);


const port = process.env.PORT || 8001;


app.get("/",(req,res) => {
    res.send("Hello I am live");
});

app.get("/service" , (req, res) => {
    console.log(apiData);
    res.send(apiData);
    // res.send("Hello I am live");
    // res.send("hello")

});

app.listen(port,()=>{
    console.log("I am live again");
});
