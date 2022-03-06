import React, { useState } from "react";
import styles from "./App.module.scss";
import { Content } from "./component/content/content";
import { Arrow } from "./component/icon/arrow/arrow";
import { Burger } from "./component/icon/burger/burger";
import { Navigation } from "./component/navigation/navigation";

export default function App() {
  const [active, setActive] = useState(true);
  return (
    <div className={styles.basic}>
      <Navigation title={"Register card form"}>
        {active ? (
          <Burger onClick={() => setActive(!active)} />
        ) : (
          <Arrow onClick={() => setActive(!active)} />
        )}
      </Navigation>
      <Content menu={active} userName={`{ User. firstName }`} />
    </div>
  );
}
