import React from "react";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles.basic}>
      <svg viewBox="0 0 100 80" width="35" height="40">
        <rect width="80" height="10" />
        <rect y="30" width="80" height="10" />
        <rect y="60" width="80" height="10" />
      </svg>
      <h3 className={styles.title}>Register card form</h3>
    </div>
  );
};
