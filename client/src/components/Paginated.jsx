import React, { useState } from "react";
import styles from "../stylesheets/Paginated.module.css";

const Paginated = ({ allDogs, dogsPerPage, paginated, currentPage }) => {
  const totalPageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    totalPageNumbers.push(i);
  }

  const pagesNumbers = totalPageNumbers.map((pageNum) => {
    //si la page que se itera es la pagina actual se tiñe de color
    if (pageNum === currentPage) {
      return (
        <h1
          className={styles["current-page"]}
          onClick={() => paginated(pageNum)}
        >
          {pageNum}
        </h1>
      );
    }

    return (
      <h1
        className={styles["paginated-title"]}
        onClick={() => paginated(pageNum)}
      >
        {pageNum}
      </h1>
    );
  });

  let splicePagesNumber =
    currentPage < 12 ? pagesNumbers.slice(0, 11) : pagesNumbers.slice(11);

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
      splicePagesNumber = pagesNumbers.slice(11);
    }
  };

  const prevButtonHandler = () => {
    const prevPage = currentPage - 1;

    if (currentPage < 11) {
      splicePagesNumber = pagesNumbers.slice(0, 11);
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
        {splicePagesNumber}
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
