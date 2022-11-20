import {
  GET_ALL_DOGS,
  GET_DOG_DETAIL,
  SEARCH_RACE_NAME,
  CREATE_DOG,
  GET_ALL_TEMPERAMENTS,
  FILTER_BY_CREATED,
  FILTER_BY_API_DOGS,
  FILTER_BY_TEMPERAMENT,
  FILTER_BY_DEFAULT_DOGS,
  ORDER_BY_ASCENDING_ALPHABETICAL_ORDER,
  ORDER_BY_DESCENDING_ALPHABETICAL_ORDER,
  ORDER_BY_HEAVIER_TO_LIGHTER,
  ORDER_BY_LIGHTER_TO_HEAVIER,
  // UPDATE_DOG,
  // DELETE_DOG,
  //DESPUES AGREGAR MAS
} from "./actions.js";

const initialState = {
  allDogs: [],
  dogs: [],
  dogDetail: {},
  allTemperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        dogs: action.payload,
      };
    case CREATE_DOG:
      return {
        ...state,
        allDogs: [action.payload, ...state.allDogs],
        dogs: [action.payload, ...state.allDogs],
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
      };
    case SEARCH_RACE_NAME:
      return {
        ...state,
        allDogs: action.payload,
        dogs: action.payload,
      };
    case FILTER_BY_CREATED:
      return {
        ...state,
        dogs: state.allDogs.filter((dog) => isNaN(dog.id)),
      };
    case FILTER_BY_API_DOGS:
      return {
        ...state,
        dogs: state.allDogs.filter((dog) => !isNaN(dog.id)),
      };
    case FILTER_BY_DEFAULT_DOGS:
      return {
        ...state,
        dogs: state.allDogs,
      };
    case FILTER_BY_TEMPERAMENT:
      const mappedDogs = state.allDogs.map((dog) => {
        let temperament;

        const validate =
          typeof dog.temperaments[0] === "object" &&
          dog.temperaments[0] !== null;

        if (validate) {
          //si es un dog creado lo tengo que mapear para que mre traiga los parametros como quiero,
          //exactamente como vienen en la api
          temperament = [
            dog.temperaments
              .map((temp) => {
                return temp.name;
              })
              .join(","),
          ];
        }

        return {
          ...dog,
          temperaments: temperament
            ? temperament
            : dog.temperaments[0] !== null && [dog.temperaments],
        };
      });

      const filterDogs = mappedDogs.filter(
        (dog) =>
          dog.temperaments && dog.temperaments[0].includes(action.payload)
      );

      return {
        ...state,
        dogs: filterDogs,
      };
    case ORDER_BY_ASCENDING_ALPHABETICAL_ORDER:
      const ascendingOrder = state.dogs.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
      });

      return {
        ...state,
        dogs: [...ascendingOrder],
      };
    case ORDER_BY_DESCENDING_ALPHABETICAL_ORDER:
      const descendingOrder = state.dogs.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        return 0;
      });

      return {
        ...state,
        dogs: [...descendingOrder],
      };
    case ORDER_BY_HEAVIER_TO_LIGHTER:
      const sortedHigherToLower = state.dogs.sort((a, b) => {
        let weightA = parseInt(a.weight.split(" - ")[0]);
        let weightB = parseInt(b.weight.split(" - ")[0]);

        if (!isNaN(weightA) && !isNaN(weightB)) {
          return weightB - weightA;
        }
        return 0;
      });

      return {
        ...state,
        dogs: [...sortedHigherToLower],
      };
    case ORDER_BY_LIGHTER_TO_HEAVIER:
      const sortedLowerToHigher = state.dogs.sort((a, b) => {
        let weightA = parseInt(a.weight.split(" - ")[0]);
        let weightB = parseInt(b.weight.split(" - ")[0]);

        if (!isNaN(weightA) && !isNaN(weightB)) {
          return weightA - weightB;
        }
        return 0;
      });

      return {
        ...state,
        dogs: [...sortedLowerToHigher],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
