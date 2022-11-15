import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import styles from "../stylesheets/Home.module.css";
import Nav from "./NavBar";
import DogCard from "./DogCard";
import Paginated from "./Paginated";

const Home = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getAllDogs());
  }, []);

  const allDogs = useSelector((state) => state.allDogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8); //8 perros x page

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;

  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginated = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles["home-container"]}>
        {currentDogs &&
          currentDogs.map((dog) => (
            <DogCard id={dog.id} imgUrl={dog.imgUrl} name={dog.name} />
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
