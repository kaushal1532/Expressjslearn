// const path = require("path");
const express = require("express");
const app = express();

// const staticpath = path.join(__dirname, "../public");
//to set the view engine:-
// app.set("view engine", "hbs");
app.use(express.static(staticpath));

//template engine route:-
// app.get("", (req, res) => {
//     res.render('index');
// })

app.get("/", (req, res) => {
    res.send("jay mataji form the express.");
});
app.get("/about", (req, res) => {
    res.send("jay mataji about.");
});

app.listen(8000, () => {
    console.log("listing the port at 8000");
});