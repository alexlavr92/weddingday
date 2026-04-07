import { forwardRef } from "react";
import styles from "./RadioField.module.scss";

const Radio = forwardRef(function Radio(
    { label, name, value, className = "", error, ...props },
    ref
) {
    return (
        <label
            className={[
                styles.radio,
                className,
                error ? "error-shake" : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <input
                ref={ref}
                type="radio"
                name={name}
                value={value}
                className={styles.input}
                {...props}
            />
            <span className={styles.labelText}>{label}</span>
        </label>
    );
});

export default Radio;
