import React from "react";
import { Arrow } from "../icon/arrow/arrow";
import { Burger } from "../icon/burger/burger";
import styles from "./navigation.module.scss";

interface IProps {
  title?: string;
  active: boolean;
  onClick: () => void;
}

export const Navigation: React.FC<IProps> = ({
  title,
  children,
  active,
  onClick,
}) => {
  return (
    <div className={styles.basic}>
      <div className={styles.heading}>
        {active ? <Burger onClick={onClick} /> : <Arrow onClick={onClick} />}
        <h3 className={styles.title}>
          {active ? "Register card form" : "Menu"}
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
