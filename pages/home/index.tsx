import Link from "next/link";
import React from "react";
import { Arrow } from "../../src/component/icon/arrow/arrow";
import { Navigation } from "../../src/component/navigation/navigation";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.basic}>
      <Navigation title={"Home"} icon={<Arrow className={styles.icon} />}>
        <h3 className={styles.content}> This is home page</h3>
      </Navigation>
    </div>
  );
}
