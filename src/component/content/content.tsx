import React from "react";
import { useForm } from "react-hook-form";
import styles from "./content.module.scss";

export const Content = (props: { menu: boolean }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      {!props.menu ? (
        <h4 className={styles.menu}>This is menu content</h4>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.basic}>
            <h3 className={styles.title}>Welcome </h3>
            <div>
              <input
                type={"number"}
                placeholder={"Credit card number"}
                {...(register("number"), { required: true })}
                className={styles.cardNumber}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type={"number"}
                placeholder={"CVC"}
                {...(register("cvc"), { required: true })}
                className={styles.cvc}
              />
              <input
                type={"text"}
                onFocus={(e) => (e.target.type = "date")}
                placeholder={"Expiry"}
                {...(register("expiry"), { required: true })}
                className={styles.expiry}
              />
            </div>
            <input type={"submit"} value={"Submit"} className={styles.submit} />
          </div>
        </form>
      )}
    </>
  );
};
