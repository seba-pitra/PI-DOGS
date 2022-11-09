import React from "react";
import Nav from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";

const Home = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getAllDogs());
  }, []);

  const allDogs = useSelector((state) => state.allDogs);

  console.log(allDogs);

  return (
    <div>
      <Nav />
      <div>{allDogs && allDogs.map((dog) => <span>{dog.name}</span>)}</div>
    </div>
  );
};

export default Home;
