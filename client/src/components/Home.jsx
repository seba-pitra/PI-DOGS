import React from "react";
import { connect } from "react-redux";
import Nav from "./NavBar";

const Home = (props) => {
  return (
    <div>
      <Nav />
      <h1>soy el Home</h1>
    </div>
  );
};

export default Home;
