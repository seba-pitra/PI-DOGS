const { Dog } = require("../db");
const { Router } = require("express");
const { getDogs } = require("../controllers/dogsControllers");

const dogsRouter = Router();

dogsRouter.get("/", async (req, res) => {
  try {
    const dogs = res.status(200).send("todo funca");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = dogsRouter;
