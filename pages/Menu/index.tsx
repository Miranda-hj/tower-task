import React, { useState } from "react";
import { Arrow } from "../../src/component/icon/arrow/arrow";
import { Navigation } from "../../src/component/navigation/navigation";
import styles from "./index.module.scss";

export default function Menu() {
  const [active, setActive] = useState(true);
  return (
    <div className={styles.basic}>
      <Navigation title={"Menu"} icon={<Arrow className={styles.icon} />}>
        <h3 className={styles.menu}> This is menu content</h3>
      </Navigation>
    </div>
  );
}
