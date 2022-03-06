import React from "react";
import styles from "./content.module.scss";

export const Content = () => {
  return (
    <form method={"get"}>
      <div className={styles.basic}>
        <h3 className={styles.title}>Welcome </h3>
        <div>
          <input
            type={"number"}
            placeholder={"Credit card number"}
            className={styles.cardNumber}
          />
        </div>
        <div className={styles.inputGroup}>
          <input type={"number"} placeholder={"CVC"} className={styles.cvc} />
          <input
            type={"text"}
            onChange={(e) => console.log(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            placeholder={"Expiry"}
            className={styles.expiry}
          />
        </div>
        <input type={"button"} value={"Submit"} className={styles.submit} />
      </div>
    </form>
  );
};
