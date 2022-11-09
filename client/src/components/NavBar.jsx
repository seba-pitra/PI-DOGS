import React from "react";
import { Link } from "react-router-dom";
import styles from "../stylesheets/NavBar.module.css";
import img from "../img/logo-dog.png";

//color: #7DCCFF

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={img} alt="logo-dogs" />
        </Link>
        <Link to={"/"}>
          <h3>Dogs</h3>
        </Link>
      </div>
      <div className={styles["page-links"]}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>Sobre Nosotros</Link>
        <input type="text" placeholder="Busca tu perro..." />
      </div>
    </div>
  );
};

export default Nav;
