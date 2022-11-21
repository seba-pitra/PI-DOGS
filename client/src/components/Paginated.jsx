import React, { useState } from "react";
import styles from "../stylesheets/Paginated.module.css";

const Paginated = ({ allDogs, dogsPerPage, paginated, currentPage }) => {
  const totalPageNumbers = [];

  const [limitNumbersPage, setLimitNumbersPage] = useState(10);
  const [minLimitNumberPage, setMinLimitNumberPage] = useState(0);
  const [maxLimitNumberPage, setMaxLimitNumberPage] = useState(10);

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

  const slicePagesNumber = pagesNumbers.slice(
    minLimitNumberPage,
    maxLimitNumberPage
  );

  const nextButtonHandler = () => {
    const nextPage = currentPage + 1;

    if (nextPage > pagesNumbers.length) return; //si el index es igual al total es xq llego al final de la pagina

    if (currentPage + 1 > maxLimitNumberPage) {
      setMaxLimitNumberPage(maxLimitNumberPage + limitNumbersPage);
      setMinLimitNumberPage(minLimitNumberPage + limitNumbersPage);
    }

    paginated(nextPage);
  };

  const prevButtonHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage === 0) return;

    if ((currentPage - 1) % limitNumbersPage === 0) {
      setMaxLimitNumberPage(maxLimitNumberPage - limitNumbersPage);
      setMinLimitNumberPage(minLimitNumberPage - limitNumbersPage);
    }

    paginated(prevPage);
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
