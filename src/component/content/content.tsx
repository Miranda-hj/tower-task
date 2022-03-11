import styles from "./content.module.scss";
import { useForm } from "react-hook-form";
import { Error } from "../error/error";

interface FormData {
  cardNumber: number;
  cvc: number;
  date: Date;
}

export const Content = (props: { userName: string }) => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Submitted!");
    reset();
  });
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.basic}>
        <h3 className={styles.title}>Welcome {props.userName}</h3>
        <div>
          <input
            type={"number"}
            placeholder={"Credit card number"}
            {...register("cardNumber", {
              required: true,
            })}
            className={styles.cardNumber}
          />
          {errors.cardNumber && errors.cardNumber.type === "required" && (
            <Error className={styles.message} message={"This is required"} />
          )}
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.errorGroup}>
            <input
              type={"number"}
              placeholder={"CVC"}
              {...register("cvc", {
                required: true,
                minLength: 3,
                maxLength: 3,
              })}
              className={styles.cvc}
            />
            {errors.cvc && errors.cvc.type === "required" && (
              <Error className={styles.message} message={"This is required"} />
            )}
            {errors.cvc &&
              errors.cvc.type === "minLength" &&
              errors.cvc.type === "maxLength" && (
                <Error
                  className={styles.message}
                  message={"CVC number is invalid"}
                />
              )}
          </div>
          <div className={styles.errorGroup}>
            <input
              type={"number"}
              onFocus={(e) => (e.target.type = "date")}
              placeholder={"Expiry"}
              {...register("date", { required: true })}
              className={styles.expiry}
            />
            {errors.date && errors.date.type === "required" && (
              <Error className={styles.message} message={"This is required"} />
            )}
          </div>
        </div>
        <input
          value={"Submit"}
          type={"submit"}
          className={styles.submit}
          disabled={!isValid || !isDirty}
        />
      </div>
    </form>
  );
};
