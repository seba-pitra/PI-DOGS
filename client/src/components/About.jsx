import React from "react";
import { Link } from "react-router-dom";
import styles from "../stylesheets/About.module.css";
import img from "../img/about-dog.avif";
import linkedinImg from "../img/logo-linkedin-blanco.jpg";
import githubLogo from "../img/github-logo.jpg";
import Nav from "./NavBar";

const About = () => {
  return (
    <div className={styles.about}>
      <Nav />
      <div className={styles["about-container"]}>
        <img src={img} alt="about-dog" className={styles["about-img"]} />
        <span className={styles["about-description"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          aliquam iste veniam illum. Unde modi aut, facilis, repellendus
          dignissimos explicabo ipsa voluptatum in quam quis natus quisquam
          soluta. Aspernatur, perspiciatis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse labore praesentium quod provident,
          excepturi ex ipsum consequuntur odio? Nihil illum nam velit eaque
          adipisci impedit laudantium, voluptate sit explicabo deleniti.
        </span>
      </div>
      <div className={styles["about-me-container"]}>
        <div className={styles["about-me-text-container"]}>
          <h2>Hello!</h2>
          <p>I hope you have enjoyed this app</p>
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
