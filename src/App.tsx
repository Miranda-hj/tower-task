import React, { useState } from "react";
import styles from "./App.module.scss";
import { Content } from "./component/content/content";
import { Navigation } from "./component/navigation/navigation";

export default function App() {
  const [active, setActive] = useState(true);
  return (
    <div className={styles.basic}>
      <Navigation active={active} onClick={() => setActive(!active)}>
        <Content menu={active} userName={`{ User. firstName }`} />
      </Navigation>
    </div>
  );
}
