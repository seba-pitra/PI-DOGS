import {
  GET_ALL_DOGS,
  GET_DOG_DETAIL,
  SEARCH_RACE_NAME,
  CREATE_DOG,
  UPDATE_DOG,
  DELETE_DOG,
  GET_ALL_TEMPERAMENTS,
  //DESPUES AGREGAR MAS
} from "./actions.js";

const initialState = {
  allDogs: [],
  dogDetail: {},
  allTemperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case GET_ALL_TEMPERAMENTS: {
      return {
        ...state,
        allTemperaments: action.payload,
      };
    }
    case SEARCH_RACE_NAME:
      return {
        ...state,
        allDogs: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
