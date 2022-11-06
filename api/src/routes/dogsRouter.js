const { Dog } = require("../db");
const { Router } = require("express");
const {
  getDogs,
  createDog,
  searchDogByName,
  searchDogById,
} = require("../controllers/dogsControllers");

const dogsRouter = Router();

dogsRouter.post("/", async (req, res) => {
  try {
    const { name, height, weight, life_span } = req.body;
    console.log(req.body);

    const newDog = await createDog(req.body);

    res.status(200).json(newDog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

dogsRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      const foundDog = await searchDogByName(name);
      res.status(200).json(foundDog);
    } else {
      const dogs = await getDogs();
      res.status(200).json(dogs);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

dogsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundDog = await searchDogById(id);
    res.status(200).json(foundDog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = dogsRouter;
