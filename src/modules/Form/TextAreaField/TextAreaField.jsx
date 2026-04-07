import { forwardRef, useState } from "react";
import styles from "./TextAreaField.module.scss";

const TextAreaField = forwardRef(function TextAreaField(
    { id, className = "", wrapperClass = "", error, onChange, onBlur, ...props },
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
        <div className={`${styles.textarea_wrapper} ${wrapperClass}`}>
            <textarea
                id={id}
                ref={ref}
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                className={[
                    styles.textarea,
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

export default TextAreaField;
