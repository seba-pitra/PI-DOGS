import React from "react";
import Nav from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import DogCard from "./DogCard";
import styles from "../stylesheets/Home.module.css";

const Home = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getAllDogs());
  }, []);

  const allDogs = useSelector((state) => state.allDogs);

  console.log(allDogs);

  return (
    <div className={styles.home}>
      {/* <Nav /> */}
      <div className={styles["home-container"]}>
        {allDogs &&
          allDogs.map((dog) => (
            <DogCard id={dog.id} imgUrl={dog.imgUrl} name={dog.name} />
          ))}
      </div>
    </div>
  );
};

export default Home;
