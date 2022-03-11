import React from "react";
import styles from "./navigation.module.scss";

interface IProps {
  title?: string;
  icon: JSX.Element;
}

export const Navigation: React.FC<IProps> = ({ children, title, icon }) => {
  return (
    <div className={styles.basic}>
      <div className={styles.heading}>
        {icon}
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
