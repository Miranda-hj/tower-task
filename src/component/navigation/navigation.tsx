import React from "react";
import styles from "./navigation.module.scss";

interface IProps {
  title: string;
}

export const Navigation: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className={styles.basic}>
      {children}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
