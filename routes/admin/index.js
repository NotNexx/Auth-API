const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("this is admin section");
});

router.get("/lol", (req, res) => {
    res.send("looool");
});

module.exports = router;