export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
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

export const getDogDetail = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/dogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_DOG_DETAIL, payload: data });
      });
  };
};

export const searchRaceName = (name) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/dogs?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: SEARCH_RACE_NAME, payload: data });
      });
  };
};

//lo hice asi nomas. Despues fijarse
export const createDog = (dogInfo) => {
  return (dispatch) => {
    fetch("http://localhost:3001/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        dispatch({ type: CREATE_DOG, payload: dogInfo });
      });
  };
};
