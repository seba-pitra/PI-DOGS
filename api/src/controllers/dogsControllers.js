const { API_KEY } = process.env;
const fetch = require("node-fetch");

const urlApi = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}}`;

const getDogs = async () => {
  // console.log(fetch);
  const apiDogs = await fetch(urlApi).then((res) => res.json());
  const infoDogs = apiDogs.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
    };
  });

  //retornar los dogs de la api + los de la bas de datos
  return infoDogs;
};

getDogs();

module.exports = { getDogs };
