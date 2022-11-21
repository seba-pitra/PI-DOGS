import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import * as actions from "../redux/actions.js";
import styles from "../stylesheets/DogCard.module.css";

const DogCard = ({ name, imgUrl, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.getDogDetail(id));
  };

  return (
    <div className={styles["Dog-card"]}>
      <Link to={`/dog/${id}`} onClick={handleClick}>
        <div className={styles["Dog-card-container"]}>
          <p className={styles["Dog-card-link"]}>Know more!</p>
          <img
            src={imgUrl}
            alt="img-dog-card"
            className={styles["Dog-card-img"]}
          />
          <h2 className={styles["Dog-card-title"]}>{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default DogCard;
