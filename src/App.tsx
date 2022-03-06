import React from "react";
import styles from "./App.module.scss";
import { Content } from "./component/content/content";
import { Navigation } from "./component/navigation/navigation";

export default function App() {
  return (
    <div className={styles.basic}>
      <Navigation />
      <Content />
    </div>
  );
}
