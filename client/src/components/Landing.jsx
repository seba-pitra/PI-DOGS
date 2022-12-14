import React from "react";
import style from "../stylesheets/Landing.module.css";
import img from "../img/landing-dog.jpg";
import imgHappyDogs from "../img/landing-happy-dogs.png";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <div className={style["all-landing"]}>
      <div className={style["landing"]}>
        <div className={style["landing-container"]}>
          <div className={style["landing-left-container"]}>
            <div className={style["text-container"]}>
              <h1 className={style["landing-title"]}>Welcome!</h1>
              <p>Discover new breeds of dogs</p>
            </div>
            <img
              src={imgHappyDogs}
              alt="landing-happy-dogs"
              className={style["landing-happy-dogs-img"]}
            />
            <Link to={"/home"}>
              <button className={style["landing-button"]}>Let's Go!</button>
            </Link>
          </div>
          <img src={img} alt="landing-dog" className={style["landing-img"]} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
