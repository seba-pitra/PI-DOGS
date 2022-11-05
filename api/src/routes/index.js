const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("./dogsRouter.js");
const temperamentsRouter = require("./temperamentsRouter.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogsRouter);
//***********DESCOMENTAR LA SIGUIENTE PAPI */
// router.use("/temperaments", temperamentsRouter);

// router.post("/dogs", async (req, res) => {
//   const { name, heigth, weigth, life_span } = req.body;

//   const newDog = await Dog.create(req.body);

//   res.status(200).json(newDog);
// });

module.exports = router;
