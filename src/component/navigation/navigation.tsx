import React from "react";
import { Arrow } from "../icon/arrow/arrow";
import { Burger } from "../icon/burger/burger";
import styles from "./navigation.module.scss";
interface IProps {
  title: string;
  active: boolean;
  icon: JSX.Element;
  onClick: () => void;
}
export const Navigation: React.FC<IProps> = ({
  title,
  active,
  icon,
  onClick,
}) => {
  return (
    <div className={styles.basic}>
      {active ? <Burger /> : <Arrow />}
      {console.log(active)}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
