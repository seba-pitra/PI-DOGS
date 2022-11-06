const { API_KEY } = process.env;
const fetch = require("node-fetch");
const { Temperament } = require("../db");
const { getDogs } = require("./dogsControllers");

//X Este controller debe separar todos los temperamentos de los perros
//que estan mal hechos en la API
//cuando los separo por coma algunos quedan asi:
//'Trainable,Stubborn'
//ver como solucionarlo.

//X Despues guardar todo en la base de datos y trabajar, luego, solo con los datos de la DB

const getTemperaments = async () => {
  const dogs = await getDogs(); //All dogs

  let allTemperaments = [];
  while (dogs.length) {
    let dog = dogs.shift();
    allTemperaments.push(dog.temperaments);
  }

  const myTemperaments = allTemperaments.join(",").split(",").sort(); //tener TODOS los temps en un array

  const filterTemperaments = []; //temperamentos NO REPETIDOS

  for (const temperament of myTemperaments) {
    if (!filterTemperaments.includes(temperament) && temperament) {
      filterTemperaments.push(temperament);
    }
  }

  const mappedTemps = filterTemperaments.map((temp) => {
    //se crea la collection para el bulkCreate
    return { name: temp };
  });

  let dbTemperaments = await Temperament.bulkCreate(mappedTemps);

  return dbTemperaments;
};

module.exports = { getTemperaments };
