import React, { useState } from "react";
import styles from "../stylesheets/Paginated.module.css";

const Paginated = ({ allDogs, dogsPerPage, paginated, currentPage }) => {
  const totalPageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    //le hago el math ceil por que la division esa me da 21.75, lo redondeo para arriba
    totalPageNumbers.push(i);
  }

  const pagesNumbers = totalPageNumbers.map((pageNum) => {
    return (
      <h1
        className={
          pageNum === currentPage
            ? styles["current-page"]
            : styles["paginated-title"]
        }
        onClick={() => paginated(pageNum)}
      >
        {pageNum}
      </h1>
    );
  });

  let slicePagesNumber = //solo se muestras 12 paginas
    currentPage < 12 ? pagesNumbers.slice(0, 11) : pagesNumbers.slice(11);

  console.log("splice", slicePagesNumber);

  const nextButtonHandler = () => {
    const totalElements = allDogs.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * dogsPerPage;

    if (firstIndex === totalElements) return; //si el index es igual al total es xq llego al final de la pagina

    if (currentPage < 22) {
      //mas de la pagina 22 no va a pasar
      paginated(nextPage);
    }

    if (currentPage > 10) {
      slicePagesNumber = pagesNumbers.slice(11);
    }
  };

  const prevButtonHandler = () => {
    const prevPage = currentPage - 1;

    if (currentPage < 11) {
      slicePagesNumber = pagesNumbers.slice(0, 11);
    }

    if (currentPage > 1) {
      //menos de la pagina 1 no va a ir
      paginated(prevPage);
    }
  };

  return (
    <div className={styles.paginated}>
      <div className={styles["paginated-container"]}>
        <button
          onClick={prevButtonHandler}
          className={styles["paginated-button"]}
        >
          PREV
        </button>
        {slicePagesNumber}
        <button
          onClick={nextButtonHandler}
          className={styles["paginated-button"]}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Paginated;
