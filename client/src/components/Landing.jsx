import React from "react";
import style from "../stylesheets/Landing.module.css";
import img from "../img/landing-dog.jpg";
import imgHappyDogs from "../img/landing-happy-dogs.png";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <div className={style["landing"]}>
      <div className={style["landing-container"]}>
        <div className={style["landing-left-container"]}>
          <div className={style["text-container"]}>
            <h1 className={style["landing-title"]}>Bienvenido</h1>
            <p>¡Conoce nuevas razas de perros!</p>
          </div>
          <img
            src={imgHappyDogs}
            alt="landing-happy-dogs"
            className={style["landing-happy-dogs-img"]}
          />
          <Link to={"/home"}>
            <button className={style["landing-button"]}>¡Hagamoslo!</button>
          </Link>
        </div>
        <img src={img} alt="landing-dog" className={style["landing-img"]} />
      </div>
    </div>
  );
};

export default Landing;
