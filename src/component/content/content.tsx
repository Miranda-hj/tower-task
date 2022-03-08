import styles from "./content.module.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface FormData {
  cardNumber: number;
  cvc: number;
  date: Date;
  singlleErrorInput: string;
}

export const Content = (props: { menu: boolean; userName: string }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      {!props.menu ? (
        <h3 className={styles.menu}>This is menu content</h3>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.basic}>
            <h3 className={styles.title}>Welcome {props.userName}</h3>
            <div>
              <input
                type={"number"}
                placeholder={"Credit card number"}
                {...register("cardNumber", { required: "This is required." })}
                className={styles.cardNumber}
              />
              <ErrorMessage
                errors={errors}
                name="singleErrorInput"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type={"number"}
                placeholder={"CVC"}
                maxLength={3}
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
