// const greeting = require("./modules/greeting.js")
// console.log(greeting)

const items = require("./data.js")
console.log(items)

const express = require('express')
const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT || 3000, () => {
    console.log("server is running on port " + PORT);
})



