import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions.js";
import Nav from "./NavBar";
import styles from "../stylesheets/DogCard.module.css";

const DogCard = ({ name, imgUrl, match }) => {
  // const dispatch = useDispatch();

  // const id = match.params.id;

  // const handleClick = () => {
  //   dispatch(actions.getDogDetail(id));
  // };

  return (
    <div className={styles["Dog-card"]}>
      {/* <Nav /> */}
      <div className={styles["Dog-card-container"]}>
        <img
          src={imgUrl}
          alt="img-dog-card"
          className={styles["Dog-card-img"]}
        />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default DogCard;
