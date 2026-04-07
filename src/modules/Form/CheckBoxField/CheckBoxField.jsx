import { forwardRef } from "react";
import styles from "./CheckBoxField.module.scss";

const Checkbox = forwardRef(function Checkbox(
    { label, value, className = "", error, ...props },
    ref
) {
    return (
        <label
            className={[
                styles.checkbox,
                className,
                error ? "error-shake" : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <input
                ref={ref}
                type="checkbox"
                value={value}
                className={styles.input}
                {...props}
            />
            <span>{label}</span>
        </label>
    );
});

export default Checkbox;
