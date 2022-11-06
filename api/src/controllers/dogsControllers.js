const { API_KEY } = process.env;
const fetch = require("node-fetch");
const { Dog } = require("../db");

const urlApi = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}}`;

const createDog = async ({ name, height, weight, life_span }) => {
  if (!name || !height || !weight || !life_span) {
    throw new Error("Faltan enviar datos obligatorios");
  }

  const newDog = await Dog.create({ name, height, weight, life_span });

  return newDog;
};

const getDogs = async () => {
  const apiDogs = await fetch(urlApi).then((res) => res.json());
  const infoDogs = apiDogs.map((dog) => {
    //me traigo solo las propiedades que quiero
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      imgUrl: dog.image.url,
    };
  });

  const dbDogs = await Dog.findAll();

  if (!infoDogs && !dbDogs) {
    throw new Error("No se encontró ningún perro");
  }

  //no me retorna dos arrays diferentes. Estan todos los dogs, de la api y la DB adentro del mismo array
  return [...infoDogs, ...dbDogs];
};

const searchDogByName = async (name) => {
  // const foundDog = await (await getDogs()).find((dog) => dog.name == name); //1ro se resuelve el get dogs y despues el find

  const foundDog = await fetch(
    `https://api.thedogapi.com/v1/breeds/search?q=${name}`
  ).then((res) => res.json());

  if (!foundDog.length) {
    throw new Error("No se encontró ningún raza de perro con ese nombre");
  }

  return foundDog;
};

const searchDogById = async (id) => {
  if (!id) {
    throw new Error("No se encontró ninguna raza con ese id");
  }

  // const foundDog = await Dog.findByPk(id);

  console.log(foundDog);
};

module.exports = {
  getDogs,
  createDog,
  searchDogByName,
  searchDogById,
};
