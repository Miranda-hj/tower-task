import React from "react";
import styles from "./index.module.scss";
import { Content } from "../src/component/content/content";
import { Navigation } from "../src/component/navigation/navigation";
import { Burger } from "../src/component/icon/burger/burger";

export default function App() {
  return (
    <div className={styles.basic}>
      <Navigation
        title={"Register card form"}
        icon={<Burger className={styles.icon} />}>
        <Content userName={`{ User. firstName }`} />
      </Navigation>
    </div>
  );
}
