const Meme = require("../models/Meme.model");



//FIND SINGLE PRODUCT
const getMeme = async (req, res) => {
  try {
    const { id } = req.params;
    const meme = await Meme.findOne({code: id});
       res.status(200).json(meme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//ADD PRODUCTS
const AddMemes = async (req, res) => {
  console.log(req.body)
  try {
    const meme = await Meme.create(req.body);
    res.status(200).json(meme);
  } catch (error) {
    res.status(500).json({message: "Already added"})
  }
};




module.exports = {getMeme,AddMemes}
