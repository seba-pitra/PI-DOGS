import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions.js";
import styles from "../stylesheets/DogDetail.module.css";

const DogDetail = ({ match }) => {
  const dispatch = useDispatch();

  const id = match.params.id;

  React.useEffect(() => {
    dispatch(actions.getDogDetail(id));
  }, []);

  const dog = useSelector((state) => state.dogDetail);

  return (
    <div className={styles["dog-detail"]}>
      <Link to={"/home"}>{"<"}</Link>
      <div className={styles["dog-detail-container"]}>
        <h2 className={styles["dog-detail-title"]}>{dog.name}</h2>
        <img src={dog.imgUrl} alt="" className={styles["dog-detail-img"]} />
        <div className={styles["dog-detail-description"]}>
          <span className={styles["dog-detail-span"]}>{dog.temperaments}</span>
          <span className={styles["dog-detail-span"]}>{dog.height}</span>
          <span className={styles["dog-detail-span"]}>{dog.weight}</span>
          <span className={styles["dog-detail-span"]}>{dog.life_span}</span>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
