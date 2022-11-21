import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import styles from "../stylesheets/Home.module.css";
import Nav from "./NavBar";
import DogCard from "./DogCard";
import Paginated from "./Paginated";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getAllDogs());
    dispatch(actions.getTemperaments());
  }, []);

  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.allTemperaments);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8); //8 perros x page

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;

  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginated = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilterByCreatedOrApi = (e) => {
    const selectValue = e.target.value;

    if (selectValue === "Created") {
      dispatch(actions.filterByCreated());
    } else if (selectValue === "Dogs default") {
      dispatch(actions.filterByApiDogs());
    } else if (selectValue === "Default") {
      dispatch(actions.filterByDefaultDogs());
    }

    return;
  };

  const handleFilterByTemperament = (e) => {
    const temperament = e.target.value;

    dispatch(actions.filterByTemperament(temperament));
  };

  const handleOrderByAlphabeticOrder = (e) => {
    const selectValue = e.target.value;

    if (selectValue === "A - Z") {
      dispatch(actions.orderByAscendingAlphabeticalOrder(selectValue));
    } else if (selectValue === "Z - A") {
      dispatch(actions.orderByDescendingAlphabeticalOrder(selectValue));
    }

    return;
  };

  const handleOrderByWeight = (e) => {
    const selectValue = e.target.value;

    if (selectValue === "Heaver to Lighter") {
      dispatch(actions.orderByHeavierToLighter());
    } else if (selectValue === "Lighter to Heaver") {
      dispatch(actions.orderByLighterToHeavier());
    }
  };

  const handleReset = () => {
    dispatch(actions.getAllDogs());
  };

  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles["home-filters"]}>
        Filter by:
        <div className={styles["home-select-container"]}>
          <select
            name="home-select"
            onChange={handleFilterByCreatedOrApi}
            className={styles["home-selects"]}
          >
            <option>Default</option>
            <option>Dogs default</option>
            <option>Created</option>
          </select>
          <select
            name="home-select"
            onChange={handleFilterByTemperament}
            className={styles["home-selects"]}
          >
            {allTemperaments &&
              allTemperaments.map((temp) => (
                <option key={temp.name}>{temp.name}</option>
              ))}
          </select>
        </div>
        Order by:
        <div className={styles["home-select-container"]}>
          <select
            name="home-select"
            onChange={handleOrderByAlphabeticOrder}
            className={styles["home-selects"]}
          >
            <option>Alphabetical order</option>
            <option>A - Z</option>
            <option>Z - A</option>
          </select>
          <select
            name="home-select"
            onChange={handleOrderByWeight}
            className={styles["home-selects"]}
          >
            <option>Weight</option>
            <option>Heaver to Lighter</option>
            <option>Lighter to Heaver</option>
          </select>
        </div>
        <button onClick={handleReset} className={styles["reset-button"]}>
          Reset Filters
        </button>
      </div>
      <div className={styles["home-container"]}>
        {currentDogs &&
          currentDogs.map((dog) => (
            <DogCard
              key={dog.id}
              id={dog.id}
              imgUrl={dog.imgUrl}
              name={dog.name}
            />
          ))}
      </div>
      {allDogs && currentDogs && (
        <Paginated
          allDogs={allDogs.length}
          dogsPerPage={dogsPerPage}
          paginated={paginated}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Home;
