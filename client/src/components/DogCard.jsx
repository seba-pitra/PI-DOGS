import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions.js";

const DogCard = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch();
  };

  return (
    <div>
      <Nav />
      <div></div>
    </div>
  );
};

export default DogCard;
