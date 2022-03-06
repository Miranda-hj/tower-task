import React from "react";
import { useForm } from "react-hook-form";
import styles from "./content.module.scss";

interface FormData {
  cardNumber: number;
  cvc: number;
  date: Date;
}

export const Content = (props: { menu: boolean }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      {!props.menu ? (
        <h4 className={styles.menu}>This is menu content</h4>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.basic}>
            <h3 className={styles.title}>Welcome </h3>
            <div>
              <input
                type={"number"}
                placeholder={"Credit card number"}
                {...register("cardNumber", { required: true })}
                className={styles.cardNumber}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type={"number"}
                placeholder={"CVC"}
                {...register("cvc", { required: true })}
                className={styles.cvc}
              />
              <input
                type={"text"}
                onFocus={(e) => (e.target.type = "date")}
                placeholder={"Expiry"}
                {...register("date", { required: true })}
                className={styles.expiry}
              />
            </div>
            <input value={"Submit"} type={"submit"} className={styles.submit} />
          </div>
        </form>
      )}
    </>
  );
};
