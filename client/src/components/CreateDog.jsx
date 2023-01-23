import React, { useState, useEffect } from "react";
import styles from "../stylesheets/CreateDog.module.css";
import img from "../img/about-dog.avif";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CreateDog = (props) => {
  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    imgUrl: "",
    life_span: "",
    temperaments: [],
    nameTemperaments: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    temperaments: [],
  });

  const [successfullyCreated, setSuccessfullyCreated] = useState("");

  const validate = (input) => {
    let errors = {};

    if (!input.name) {
      errors.name = "* Name is required";
    }

    if (!input.minHeight) {
      errors.minHeight = "* min Height is required";
    }

    if (!input.maxHeight) {
      errors.maxHeight = "* max Height is required";
    }

    if (!input.minWeight) {
      errors.minWeight = "*min Weight is required";
    }

    if (!input.maxWeight) {
      errors.maxWeight = "*max Weight is required";
    }

    return errors;
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    setInput({
      ...input,
      [property]: value,
    });

    setErrors(
      validate({
        ...input,
        [property]: value,
      })
    );
  };

  const handleSelect = (e) => {
    const inputTemperament = e.target.value;
    const validate =
      input.temperaments.length < 9 &&
      !input.nameTemperaments.includes(inputTemperament);

    if (validate) {
      const foundTemp = allTemperaments.find(
        (temp) => temp.name === inputTemperament
      );

      setInput({
        ...input,
        temperaments: [...input.temperaments, foundTemp.id],
        nameTemperaments: [...input.nameTemperaments, inputTemperament],
      });
    }
  };

  const handleDeleteTemperament = (temperament) => {
    const foundTemperament = allTemperaments.find(
      (temp) => temp.name === temperament
    );

    setInput({
      ...input,
      temperaments: input.temperaments.filter(
        (temp) => temp !== foundTemperament.id
      ),
      nameTemperaments: input.nameTemperaments.filter(
        (temp) => temp !== foundTemperament.name
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dispatchInput = {
      ...input,
      height: `${input.minHeight} - ${input.maxHeight} cm`,
      weight: `${input.minWeight} - ${input.maxWeight} kg`,
      life_span: `${input.life_span} years`,
    };

    dispatch(actions.createDog(dispatchInput));

    setTimeout(() => setSuccessfullyCreated("Successfully created"), 2000);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getTemperaments());
  }, []);

  const allTemperaments = useSelector((state) => state.allTemperaments);

  const formError = useSelector((state) =>
    state.formError.includes("Validation error:")
      ? state.formError.split("Validation error:")[1]
      : state.formError
  );

  return (
    <div className={styles["container-all-form"]}>
      <Link to={"/home"} className={styles["form-back-link"]}>
        {"<"} Back
      </Link>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles["form-container"]}>
          <img src={img} alt="form-img" className={styles["form-img"]} />
          <div className={styles["all-inputs-container"]}>
            <h1 className={styles["form-title"]}>
              Add or create your own breed
            </h1>
            <div className={styles["input-container"]}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                className={
                  (errors.name && styles.danger) || styles["form-input"]
                }
                name="name"
                value={input.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className={styles["form-error-name-input"]}>{errors.name}</p>
              )}
            </div>
            <div className={styles["height-input-container"]}>
              <div className={styles["input-container"]}>
                <label htmlFor="minHeight">Min Height {"(cm)"} *</label>
                <input
                  type="number"
                  className={
                    (errors.minHeight && styles.danger) || styles["form-input"]
                  }
                  placeholder="5"
                  name="minHeight"
                  value={input.minHeight}
                  onChange={handleInputChange}
                />
                {errors.minHeight && (
                  <p className={styles["form-error-input"]}>
                    {errors.minHeight}
                  </p>
                )}
              </div>
              <div className={styles["input-container"]}>
                <label htmlFor="maxHeight">Max Height {"(cm)"} *</label>
                <input
                  type="number"
                  className={
                    (errors.maxHeight && styles.danger) || styles["form-input"]
                  }
                  placeholder="30"
                  name="maxHeight"
                  value={input.maxHeight}
                  onChange={handleInputChange}
                />
                {errors.maxHeight && (
                  <p className={styles["form-error-input"]}>
                    {errors.maxHeight}
                  </p>
                )}
              </div>
            </div>
            <div className={styles["weight-input-container"]}>
              <div className={styles["input-container"]}>
                <label htmlFor="minWeight">Min Weight {"(kg)"} *</label>
                <input
                  type="number"
                  className={
                    (errors.minWeight && styles.danger) || styles["form-input"]
                  }
                  placeholder="5"
                  name="minWeight"
                  value={input.weight}
                  onChange={handleInputChange}
                />
                {errors.minWeight && (
                  <p className={styles["form-error-input"]}>
                    {errors.minWeight}
                  </p>
                )}
              </div>
              <div className={styles["input-container"]}>
                <label htmlFor="maxWeight">Max Weight {"(kg)"} *</label>
                <input
                  type="number"
                  className={
                    (errors.maxWeight && styles.danger) || styles["form-input"]
                  }
                  placeholder="15"
                  name="maxWeight"
                  value={input.maxWeight}
                  onChange={handleInputChange}
                />
                {errors.maxWeight && (
                  <p className={styles["form-error-input"]}>
                    {errors.maxWeight}
                  </p>
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
              <label htmlFor="life-span">Life Span</label>
              <input
                type="number"
                className={styles["form-input"]}
                placeholder="10"
                name="life_span"
                value={input.life_span}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles["select-container"]}>
              <label htmlFor="select">Choose Temperaments</label>
              <select
                className={styles["form-select"]}
                name="select"
                onChange={handleSelect}
              >
                {allTemperaments.map((temp) => (
                  <option
                    className={styles["input-container"]}
                    value={temp.name}
                    key={temp.name}
                  >
                    {temp.name}
                  </option>
                ))}
              </select>
              <div className={styles["chosen-temperaments"]}>
                {input.nameTemperaments.map((temp) => (
                  <div className={styles["name-temperaments"]}>
                    <p>{temp}</p>
                    <button
                      className={styles["delete-temperament"]}
                      type="button"
                      onClick={() => handleDeleteTemperament(temp)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              {input.temperaments.length === 9 ? (
                <span className={styles["form-error-temperaments"]}>
                  You can only select 9 temperaments
                </span>
              ) : (
                ""
              )}
            </div>
            {formError && (
              <p className={styles["form-error-back"]}>{formError}</p>
            )}
            {!formError && successfullyCreated && (
              <p className={styles["form-succesfully-created"]}>
                {successfullyCreated}
              </p>
            )}
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
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateDog;
