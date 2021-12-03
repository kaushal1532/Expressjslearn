const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.write("<h1>jay mataji form the jay meladi ma. jay ambe ma</h1>");
    res.send();
});
app.get("/about", (req, res) => {
    res.send("jay mataji about.");
});
app.get("/contact", (req, res) => {
    res.send("jay mataji contact.");
});
app.get("/temp", (req, res) => {
    res.json([{
            id: 1,
            name: "vinod",
        },
        {
            id: 1,
            name: "vinod",
        }
    ]);
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});