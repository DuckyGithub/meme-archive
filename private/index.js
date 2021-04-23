const express = require("express");
const path = require("path");
const fs = require("fs");
var app = express();

const PUBLIC = path.resolve(__dirname, "../public");
const INFO = path.resolve(__dirname, "info");
const PORT = process.env.PORT || 80;

app.use("/res", express.static(path.resolve(PUBLIC, "res")));
app.use("/dev", express.static(path.resolve(PUBLIC, "page/dev")));
app.use("/api", express.static(path.resolve(__dirname, "info")));

app.get("/", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/index.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/index.html"));
});


app.listen(process.env.PORT || 80, function () {
    console.log("Listening on *:" + (process.env.PORT || 80));
});
