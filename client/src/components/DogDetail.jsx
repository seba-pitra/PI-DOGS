import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions.js";

const DogDetail = ({ match }) => {
  const dispatch = useDispatch();

  const id = match.params.id;

  React.useEffect(() => {
    dispatch(actions.getDogDetail(id));
  }, []);

  const dog = useSelector((state) => state.dogDetail);
  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.imgUrl} alt="" />
      <span>{dog.temperaments}</span>
      <span>{dog.life_span}</span>
      <span>{dog.height}</span>
      <span>{dog.weight}</span>
    </div>
  );
};

export default DogDetail;
