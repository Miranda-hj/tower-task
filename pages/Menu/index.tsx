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
          <Link href={"/home"} passHref>
            <h3 className={styles.link}>Home</h3>
          </Link>
          <Link href={"/"} passHref>
            <h3 className={styles.link}>Register card form</h3>
          </Link>
        </div>
      </Navigation>
    </div>
  );
}
