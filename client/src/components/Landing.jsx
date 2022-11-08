import React from "react";
import style from "../stylesheets/Landing.module.css";
import img from "../img/landing-dog.jpg";

class Landing extends React.Component {
  render() {
    return (
      <div className={style["landing-container"]}>
        <div className={style["text-container"]}>
          <h1 className={style["landing-title"]}>Bienvenido</h1>
          <p>¡Conoce nuevas razas de perros y crea a tu mejor amigo!</p>
          <button className={style["landing-button"]}>¡Hagamoslo!</button>
        </div>
        <img src={img} alt="landing-dog" className={style["landing-img"]} />
      </div>
    );
  }
}

export default Landing;
