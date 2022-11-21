export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const CREATE_DOG = "CREATE_DOG";
export const ERROR_CREATE_DOG = "ERROR_CREATE_DOG";
// export const UPDATE_DOG = "UPDATE_DOG";
// export const DELETE_DOG = "DELETE_DOG";
export const SEARCH_RACE_NAME = "SEARCH_RACE_NAME";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const FILTER_BY_API_DOGS = "FILTER_BY_API_DOGS";
export const FILTER_BY_DEFAULT_DOGS = "FILTER_BY_DEFAULT_DOGS";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const ORDER_BY_HEAVIER_TO_LIGHTER = "ORDER_BY_HEAVIER_TO_LIGHTER";
export const ORDER_BY_LIGHTER_TO_HEAVIER = "ORDER_BY_LIGHTER_TO_HEAVIER";
export const ORDER_BY_ASCENDING_ALPHABETICAL_ORDER =
  "ORDER_BY_ASCENDING_ALPHABETICAL_ORDER";
export const ORDER_BY_DESCENDING_ALPHABETICAL_ORDER =
  "ORDER_BY_DESCENDING_ALPHABETICAL_ORDER";

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

export const createDog = (dogInfo) => {
  return (dispatch) => {
    fetch("http://localhost:3001/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dogInfo),
    })
      .then((res) =>
        res.ok
          ? res.json()
          : res.text().then((err) => {
              throw new Error(err);
            })
      )
      .then((data) => {
        dispatch({ type: CREATE_DOG, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ERROR_CREATE_DOG, payload: err.message });
      });
  };
};

export const getTemperaments = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/temperaments")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_ALL_TEMPERAMENTS, payload: data });
      });
  };
};

export const filterByCreated = () => {
  return { type: FILTER_BY_CREATED };
};

export const filterByApiDogs = () => {
  return { type: FILTER_BY_API_DOGS };
};

export const filterByDefaultDogs = () => {
  return { type: FILTER_BY_DEFAULT_DOGS };
};

export const filterByTemperament = (temperament) => {
  return { type: FILTER_BY_TEMPERAMENT, payload: temperament };
};

export const orderByDescendingAlphabeticalOrder = () => {
  return { type: ORDER_BY_DESCENDING_ALPHABETICAL_ORDER };
};

export const orderByAscendingAlphabeticalOrder = () => {
  return { type: ORDER_BY_ASCENDING_ALPHABETICAL_ORDER };
};

export const orderByHeavierToLighter = () => {
  return { type: ORDER_BY_HEAVIER_TO_LIGHTER };
};

export const orderByLighterToHeavier = () => {
  return { type: ORDER_BY_LIGHTER_TO_HEAVIER };
};
