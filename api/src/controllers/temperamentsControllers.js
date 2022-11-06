const { API_KEY } = process.env;
const fetch = require("node-fetch");
const { Temperament } = require("../db");
const { getDogs } = require("./dogsControllers");

//X Este controller debe separar todos los temperamentos de los perros
//que estan mal hechos en la API
//cuando los separo por coma algunos quedan asi:
//'Trainable,Stubborn'
//ver como solucionarlo.

//Despues guardar todo en la base de datos
const getTemperaments = async () => {
  const dogs = await getDogs();

  let allTemperaments = [];
  while (dogs.length) {
    let dog = dogs.shift();
    allTemperaments.push(dog.temperaments);
  }

  const myTemperaments = allTemperaments.join(",").split(",").sort(); //obtener TODOS los temps en un array

  const filterTemperaments = []; //temperamentos NO REPETIDOS

  for (const temperament of myTemperaments) {
    if (!filterTemperaments.includes(temperament) && temperament) {
      filterTemperaments.push(temperament);
      await Temperament.create({ name: temperament });
    }
  }

  return filterTemperaments;
};

module.exports = { getTemperaments };
