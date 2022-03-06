import React from "react";
import styles from "./content.module.scss";

export const Content = () => {
  return (
    <div className={styles.basic}>
      <form method={"get"}>
        <h3 className={styles.title}>Welcome </h3>
        <div>
          <input type={"number"} placeholder={"Credit card number"} />
        </div>
        <div>
          <input type={"number"} placeholder={"CVC"} />
          <input type={"date"} placeholder={"expiry"} />
        </div>
        <input type={"button"} value={"Submit"} />
      </form>
    </div>
  );
};
