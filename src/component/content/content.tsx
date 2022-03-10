import styles from "./content.module.scss";
import { useForm } from "react-hook-form";

interface FormData {
  cardNumber: number;
  cvc: number;
  date: Date;
}

export const Content = (props: { menu: boolean; userName: string }) => {
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
                {...register("cardNumber", {
                  required: true,
                })}
                className={styles.cardNumber}
              />
              {errors.cardNumber && errors.cardNumber.type === "required" && (
                <div className={styles.message}>
                  <span>This is required</span>
                </div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.errorGroup}>
                <input
                  type={"number"}
                  placeholder={"CVC"}
                  {...register("cvc", {
                    required: true,
                    max: 999,
                  })}
                  className={styles.cvc}
                />
                {errors.cvc && errors.cvc.type === "required" && (
                  <span className={styles.message}>This is required</span>
                )}
                {errors.cvc && errors.cvc.type === "max" && (
                  <div className={styles.message}>
                    <span>CVC number is invalid</span>
                  </div>
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
                  <span className={styles.message}>This is required</span>
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
      )}
    </>
  );
};
