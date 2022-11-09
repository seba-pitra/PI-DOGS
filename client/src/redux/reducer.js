import {
  GET_ALL_DOGS,
  GET_DOG_DETAIL,
  CREATE_DOG,
  UPDATE_DOG,
  DELETE_DOG,
  SEARCH_RACE_NAME,
  GET_ALL_TEMPERAMENTS,
  //DESPUES AGREGAR MAS
} from "./actions.js";

const initialState = {
  allDogs: [],
  dogDetail: {},
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
    default:
      return { ...state };
  }
};

export default rootReducer;
