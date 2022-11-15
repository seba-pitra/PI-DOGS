import React, { useState } from "react";
import styles from "../stylesheets/CreateDog.module.css";
import img from "../img/about-dog.avif";

const CreateDog = (props) => {
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperaments: [],
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

    if (!input.height) {
      errors.height = "* Height is required";
    }

    if (!input.weight) {
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

  return (
    <form className={styles.form}>
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
          <div className={styles["input-container"]}>
            <label htmlFor="height">Altura *</label>
            <input
              type="text"
              className={
                (errors.height && styles.danger) || styles["form-input"]
              }
              placeholder="30 - 40"
              name="height"
              value={input.height}
              onChange={handleInputChange}
            />
            {errors.height && (
              <p className={styles["form-error-input"]}>{errors.height}</p>
            )}
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="weight">Peso *</label>
            <input
              type="text"
              className={
                (errors.weight && styles.danger) || styles["form-input"]
              }
              placeholder="10 - 15"
              name="weight"
              value={input.weight}
              onChange={handleInputChange}
            />
            {errors.weight && (
              <p className={styles["form-error-input"]}>{errors.weight}</p>
            )}
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
          <div className={styles["form-temperaments"]}>
            <select name="" id="">
              {/* poner temperamentos */}
            </select>
          </div>
          <button
            type="submit"
            disabled={errors.name || errors.height || errors.weight}
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
