import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../stylesheets/NavBar.module.css";
import img from "../img/logo-dog.png";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions";

const Nav = (props) => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    dispatch(actions.searchRaceName(inputValue));
  }, [inputValue]);

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link to={"/home"}>
          <img src={img} alt="logo-dogs" />
        </Link>
        <Link to={"/home"}>
          <h3>Dogs</h3>
        </Link>
      </div>
      <div className={styles["page-links"]}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About me</Link>
        <Link to={"/dogs/create"}>Create your breed</Link>
        <input
          type="text"
          placeholder="Search your breed..."
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default Nav;
