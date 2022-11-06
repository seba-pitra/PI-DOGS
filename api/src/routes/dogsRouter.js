const { Dog } = require("../db");
const { Router } = require("express");
const {
  getDogs,
  createDog,
  searchDogByName,
  searchDogById,
} = require("../controllers/dogsControllers");
const { getTemperaments } = require("../controllers/temperamentsControllers");

const dogsRouter = Router();

//BUENAS PRACTICAS:
//1- VARIAR EL STATUS CODE
//2- hacer CRUD

dogsRouter.post("/", async (req, res) => {
  try {
    await getTemperaments(); //Si no tengo temperaments en la DB,
    // no voy a poder relacionar el dog con varios temperaments(addTemperaments)
    const newDog = await createDog(req.body);

    res.status(201).json(newDog);
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
    res.status(404).send(err.message);
  }
});

dogsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundDog = await searchDogById(id);
    res.status(200).json(foundDog);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = dogsRouter;
