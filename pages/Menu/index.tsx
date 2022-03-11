import Link from "next/link";
import React from "react";
import { Arrow } from "../../src/component/icon/arrow/arrow";
import { Navigation } from "../../src/component/navigation/navigation";
import styles from "./index.module.scss";

export default function Menu() {
  return (
    <div className={styles.basic}>
      <Navigation title={"Menu"} icon={<Arrow className={styles.icon} />}>
        <div className={styles.menu}>
          <h3> This is menu content</h3>
          <Link href={"/home"} passHref>
            <h3 className={styles.link}> Home </h3>
          </Link>
        </div>
      </Navigation>
    </div>
  );
}