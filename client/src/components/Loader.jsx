import React from "react";
import styles from "../stylesheets/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.dog}>
        <div className={styles["dog-body"]}>
          <div className={styles["dog-tail"]}>
            <div className={styles["dog-tail"]}>
              <div className={styles["dog-tail"]}>
                <div className={styles["dog-tail"]}>
                  <div className={styles["dog-tail"]}>
                    <div className={styles["dog-tail"]}>
                      <div className={styles["dog-tail"]}>
                        <div className={styles["dog-tail"]}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["dog-torso"]}></div>
        <div className={styles["dog-head"]}>
          <div className={styles["dog-ears"]}>
            <div className={styles["dog-ear"]}></div>
            <div className={styles["dog-ear"]}></div>
          </div>
          <div className={styles["dog-eyes"]}>
            <div className={styles["dog-eye"]}></div>
            <div className={styles["dog-eye"]}></div>
          </div>
          <div className={styles["dog-muzzle"]}>
            <div className={styles["dog-tongue"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
