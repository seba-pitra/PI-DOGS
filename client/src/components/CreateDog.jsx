import React, { useState, useEffect } from "react";
import styles from "../stylesheets/CreateDog.module.css";
import img from "../img/about-dog.avif";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CreateDog = (props) => {
  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    imgUrl: "",
    lifeSpan: "",
    temperaments: [],
    nameTempermants: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
  });

  const validate = (input) => {
    //si tiene un error lo setea en el estao local "errors" de la linea 13.
    //Esto se ejecuta en la linea 47, "setErrors(validate())"
    let errors = {};

    if (!input.name) {
      errors.name = "* Name is required";
    }

    if (!input.minHeight) {
      errors.height = "* min Height is required";
    }

    if (!input.maxHeight) {
      errors.height = "* max Height is required";
    }

    if (!input.minWeight) {
      errors.weight = "* Weight is required";
    }

    if (!input.maxWeight) {
      errors.weight = "* Weight is required";
    }

    return errors;
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name; //el name del input que quiero cambiar

    setInput({
      ...input,
      [property]: value, //se cambia el estado local en la propiedad indicada
    });

    setErrors(
      validate({
        ...input,
        [property]: value, //hay q ponerle asi x el delay, el estado input no cambia al instante, asi q se lo paso manualmente
      })
    );
  };

  const handleSelect = (e) => {
    const inputTemperament = e.target.value;

    const foundTemp = allTemperaments.find(
      (temp) => temp.name === inputTemperament
    );

    setInput({
      ...input,
      temperaments: [...input.temperaments, foundTemp.id],
      nameTempermants: [...input.nameTempermants, inputTemperament],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dispatchInput = {
      ...input,
      height: `${input.maxHeight} - ${input.maxHeight} cm`,
      weight: `${input.minWeight} - ${input.maxWeight} kg`,
    };

    dispatch(actions.createDog(dispatchInput));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getTemperaments());
  }, []);

  const allTemperaments = useSelector((state) => state.allTemperaments);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Create tu propia raza</h1>
      <div className={styles["form-container"]}>
        <img src={img} alt="form-img" className={styles["form-img"]} />
        <div className={styles["all-inputs-container"]}>
          <div className={styles["input-container"]}>
            <label htmlFor="name">Nombre *</label>
            <input
              type="text"
              className={(errors.name && styles.danger) || styles["form-input"]}
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className={styles["form-error-input"]}>{errors.name}</p>
            )}
            {/* se muestar el string que tengo guardado en errors */}
          </div>
          <div className={styles["height-input-container"]}>
            <div className={styles["input-container"]}>
              <label htmlFor="minHeight">Altura minima*</label>
              <input
                type="number"
                className={
                  (errors.height && styles.danger) || styles["form-input"]
                }
                placeholder="30 - 40"
                name="minHeight"
                value={input.minHeight}
                onChange={handleInputChange}
              />
              {errors.height && (
                <p className={styles["form-error-input"]}>{errors.height}</p>
              )}
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="maxHeight">Altura maxima *</label>
              <input
                type="number"
                className={
                  (errors.height && styles.danger) || styles["form-input"]
                }
                placeholder="30 - 40"
                name="maxHeight"
                value={input.maxHeight}
                onChange={handleInputChange}
              />
              {errors.height && (
                <p className={styles["form-error-input"]}>{errors.height}</p>
              )}
            </div>
          </div>
          <div className={styles["weight-input-container"]}>
            <div className={styles["input-container"]}>
              <label htmlFor="minWeight">Peso minimo*</label>
              <input
                type="text"
                className={
                  (errors.weight && styles.danger) || styles["form-input"]
                }
                placeholder="10 - 15"
                name="minWeight"
                value={input.weight}
                onChange={handleInputChange}
              />
              {errors.weight && (
                <p className={styles["form-error-input"]}>{errors.weight}</p>
              )}
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="maxWeight">Peso maximo*</label>
              <input
                type="text"
                className={
                  (errors.weight && styles.danger) || styles["form-input"]
                }
                placeholder="10 - 15"
                name="maxWeight"
                value={input.maxWeight}
                onChange={handleInputChange}
              />
              {errors.weight && (
                <p className={styles["form-error-input"]}>{errors.weight}</p>
              )}
            </div>
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="life-span">Image URL</label>
            <input
              type="text"
              className={styles["form-input"]}
              placeholder="http://..."
              name="imgUrl"
              value={input.imgUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="life-span">Esperanza de vida</label>
            <input
              type="text"
              className={styles["form-input"]}
              placeholder="10 - 15"
              name="lifeSpan"
              value={input.lifeSpan}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles["select-container"]}>
            <label htmlFor="select">Selecciona temperamentos</label>
            <select
              className={styles["form-select"]}
              name="select"
              onChange={handleSelect}
            >
              {allTemperaments.map((temp) => (
                <option className={styles["input-container"]} value={temp.name}>
                  {temp.name}
                </option>
              ))}
            </select>
            <div className={styles["chosen-temperaments"]}>
              {input.nameTempermants.map((temp) => (
                <p className={styles["name-temperaments"]}>{temp}</p>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={
              errors.name ||
              errors.height ||
              errors.weight ||
              !input.name ||
              !input.minHeight ||
              !input.maxHeight ||
              !input.minWeight ||
              !input.maxWeight
            }
            className={styles["form-button"]}
          >
            Crear
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateDog;
