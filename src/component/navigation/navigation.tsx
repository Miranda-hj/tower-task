import React, { useState } from "react";
import { Arrow } from "../icon/arrow/arrow";
import { Burger } from "../icon/burger/burger";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  const [active, setActive] = useState(true);
  return (
    <div className={styles.basic}>
      {active ? (
        <Burger onClick={() => setActive(false)} />
      ) : (
        <Arrow onClick={() => setActive(true)} />
      )}
      <h3 className={styles.title}>{"Register card form"}</h3>
    </div>
  );
};
