export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const CREATE_DOG = "CREATE_DOG";
export const UPDATE_DOG = "UPDATE_DOG";
export const DELETE_DOG = "DELETE_DOG";
export const SEARCH_RACE_NAME = "SEARCH_RACE_NAME";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";

//ACTIONS CREATORS
export const getAllDogs = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/dogs")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_ALL_DOGS, payload: data });
      });
  };
};

export const createDog = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/dogs", {
      method: "POST",
    }).then;
  };
};
