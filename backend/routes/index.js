const express = require("express");
const router = express.Router();

const Data = require("../model/data");

router.get("/", (req, res) => {
	res.send("hello world");
});

module.exports = router;
