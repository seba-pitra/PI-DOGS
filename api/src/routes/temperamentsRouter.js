const { Router } = require("express");
const {
  getTemperaments,
} = require("../controllers/temperamentsControllers.js");

const temperamentRouter = Router();

temperamentRouter.get("/" = async(req,res) => {
  try {
    const temperaments = await getTemperaments()
    res.status(200).json(temperaments)
  } catch (err) {
    res.status(200).send(err.message)
  }
})
