import {
  GET_ALL_DOGS,
  CREATE_DOG,
  UPDATE_DOG,
  DELETE_DOG,
  SEARCH_RACE_NAME,
  GET_ALL_TEMPERAMENTS,
  //DESPUES AGREGAR MAS
} from "./actions.js";

const initialState = {
  dogs: [],
  dogDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
