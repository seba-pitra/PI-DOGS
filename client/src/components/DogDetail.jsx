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

  let mappedTemperaments;
  if (typeof dog.temperaments !== "string") {
    //estos son para los detalles de los perros de la base de datos
    mappedTemperaments =
      dog.temperaments && dog.temperaments.map((d) => d.name);
  }

  return (
    <div className={styles["dog-detail"]}>
      <Link to={"/home"} className={styles["back-link"]}>
        {"<"} Back
      </Link>
      <div className={styles["dog-detail-container"]}>
        <h2 className={styles["dog-detail-title"]}>{dog.name}</h2>
        <img
          src={dog.imgUrl && dog.imgUrl}
          alt="dog-detail-img"
          className={styles["dog-detail-img"]}
        />

        <div className={styles["dog-detail-description"]}>
          <div className={styles["dog-description-left"]}>
            This dog breed has the next temperaments: <br />
            <span className={styles["dog-detail-temperaments"]}>
              {typeof dog.temperaments === "string"
                ? dog.temperaments.split(",").map((temp) => (
                    <span className={styles.temperament} key={temp}>
                      {temp}
                    </span>
                  ))
                : mappedTemperaments &&
                  mappedTemperaments.map((temp) => (
                    <span className={styles.temperament} key={temp}>
                      {temp}
                    </span>
                  ))}
            </span>
          </div>
          <div className={styles["dog-description-right"]}>
            <span className={styles["dog-detail-span"]}>{dog.height}</span>
            <span className={styles["dog-detail-span"]}>{dog.weight}</span>
            <span className={styles["dog-detail-span"]}>{dog.life_span}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
