const express = require("express");
const Meme = require("../models/Meme.model");
const router = express.Router();
const {getMeme,AddMemes} = require('../Controllers/MemeControllers')

//FIND Meme By Id
router.get("/:id", getMeme);

//Post a Meme
router.post("/add", AddMemes);




module.exports = router;