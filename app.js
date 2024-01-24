// const greeting = require("./modules/greeting.js")
// console.log(greeting)

const items = require("./data/data.js")
console.log(items)

const express = require('express');
const { response } = require("express");
const app = express();

app.use(express.json());

// failed to fetch error fix
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
// -------------------------

// GETS

app.get("/my/route", (req, res) => {
    res.send(items)
})

app.get("/my/route/:id", (req, res) => {
    const item = items.find((item)=> item.id === parseInt(req.params.id))
    if(!item){
        res.status(404).send("item not found")
    } else{
        res.send(item)
    }
})

// POSTS

app.post("/my/route",(req, res) => {
    const newItem = {
        id: 5,
        item: 'Yogurt',
    }
    items.push(newItem)
    res.send(items)
})

// PUT

app.put("/my/route/:id", (req, res) => {
    const item = items.find((item)=>item.id === parseInt(req.params.id))
    if (!item){
        res.status(404).send("item not found")
    }
item.title = req.body.title
res.send(item)
})

// DELETE

app.delete("/my/route/:id", (req, res) => {
    const item = items.find((item)=>item.id === parseInt(req.params.id))
    if (!item){
        res.status(404).send("item not found")
    }

    const itemIndex = items.indexOf(item)
    items.splice(itemIndex, 1);

    res.send(item)

})


// ----------------------------------

const PORT = 3000;

app.listen(PORT || 3000, () => {
    console.log("server is running on port " + PORT);
})



