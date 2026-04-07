import { forwardRef, useState } from "react";
import styles from "./InputField.module.scss";

const InputField = forwardRef(function InputField(
    { label, id, className = "", wrapperClass = "", error, onChange, onBlur, ...props },
    ref
) {
    const [filled, setFilled] = useState(false);

    const handleChange = (e) => {
        setFilled(e.target.value.trim() !== "");
        if (onChange) onChange(e); // пробрасываем в RHF
    };

    const handleBlur = (e) => {
        setFilled(e.target.value.trim() !== "");
        if (onBlur) onBlur(e); // пробрасываем в RHF
    };

    return (
        <div className={`${styles.input_wrapper} ${wrapperClass}`}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}

            <input
                id={id}
                ref={ref}
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                className={[
                    styles.input,
                    className,
                    filled ? styles.filled : "",
                    error ? "error-input" : "",
                ]
                    .filter(Boolean)
                    .join(" ")}
            />

            {error && (
                <p className="error-message">{error}</p>
            )}
        </div>
    );
});

export default InputField;
