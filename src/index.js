const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/view");
const partialspath = path.join(__dirname, "../templates/partials");

//to set the view engine:-
app.set("view engine", "hbs");
app.set("views engine", templatepath);
hbs.registerPartials(partialspath)

// console.log(__dirname);
app.use(express.static(staticpath));

//template engine route:-
app.get("/", (req, res) => {
    res.render("index");

});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("*/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "one page couldn't be found ",
    });
});
app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "one page couldn't be found ",
    });
});
app.get("/", (req, res) => {
    res.send("jay mataji form the express.");
});
app.get("/about", (req, res) => {
    res.send("jay mataji about.");
});

app.listen(8000, () => {
    console.log("listing the port at 8000");
});