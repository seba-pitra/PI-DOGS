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
  const foundDog = await fetch(
    `https://api.thedogapi.com/v1/breeds/search?q=${name}`
  ).then((res) => res.json());

  if (!foundDog.length) {
    throw new Error("No se encontró ningún raza de perro con ese nombre");
  }

  return foundDog;
};

const searchDogById = async (id) => {
  //Maneje los errores con un try-catch xq me mandaba un msj de error que no queria recibir
  //detallado en lineas comentadas abajo.
  try {
    const foundDogApi = await (
      await getDogs()
    ).find((dog) => dog.id === parseInt(id));

    if (!foundDogApi) {
      const foundDogDb = await Dog.findOne({ where: { id } });
      //findByPk no me funciona. Me mandaba el error:
      // "la sintaxis de entrada no es válida para tipo uuid: «39696325-7668-499d-8682-add042d922a7324»"
      //Queria poner un IF aqui pero el finder de sequelize tiraba error y no llegaba a esta linea
      return foundDogDb;
    }

    return foundDogApi;
  } catch {
    throw new Error(`El id ${id} no corresponde a un personaje existente`);
  }
};

module.exports = {
  getDogs,
  createDog,
  searchDogByName,
  searchDogById,
};
