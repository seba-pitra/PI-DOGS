import React from "react";
import { Link } from "react-router-dom";
import styles from "../stylesheets/About.module.css";
import myImg from "../img/my-profile.png";
import linkedinImg from "../img/logo-linkedin-blanco.jpg";
import githubLogo from "../img/github-logo.jpg";
import Nav from "./NavBar";

const About = () => {
  return (
    <div className={styles.about}>
      <Nav />
      <div className={styles["about-container"]}>
        <img src={myImg} alt="about-dog" className={styles["about-img"]} />
        <span className={styles["about-description"]}>
          Hello! My name is Sebastian. I'm a passionate full stack developer and
          this was my first single page app. This project was made with: <br />
          ·PostgresSQL <br /> ·Express <br /> ·React <br /> ·Redux
          <br /> ·CSS modules <br />
          My goal was that all users can have the best experience looking for
          dog breeds and enjoy creating one breed or their own dog.
        </span>
      </div>
      <div className={styles["about-me-container"]}>
        <div className={styles["about-me-text-container"]}>
          <h2>I hope you have enjoyed this app</h2>
          <p>
            If you want to know more about me, you can send me a message to my
            e-mail:
            <br />
            sebastian.pitra10@gmail.com
          </p>
        </div>
        <div className={styles["my-links"]}>
          <div className={styles["my-link"]}>
            <img
              src={linkedinImg}
              alt="link-logo"
              className={styles["linkedin-logo"]}
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sebasti%C3%A1n-pitra-97b5b7248/"
            >
              Linkedin
            </a>
          </div>
          <div className={styles["my-link"]}>
            <img
              src={githubLogo}
              alt="link-logo"
              className={styles["github-logo"]}
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/seba-pitra"
              className={styles["github-text"]}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
