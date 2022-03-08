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
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Submit!");
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
                    maxLength: 3,
                  })}
                  className={styles.cvc}
                />
                {errors.cvc && errors.cvc.type === "required" && (
                  <span className={styles.message}>This is required</span>
                )}
                {errors.cvc && errors.cvc.type === "maxLength" && (
                  <div className={styles.message}>
                    <span>Limited 3 digital</span>
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
            <input value={"Submit"} type={"submit"} className={styles.submit} />
          </div>
        </form>
      )}
    </>
  );
};
