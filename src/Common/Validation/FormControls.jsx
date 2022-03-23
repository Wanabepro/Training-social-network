import React from "react";
import styles from './FormControls.module.css'

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>
            {hasError
                ? <span className={styles.message}>
                    {String(meta.error)}
                </span>
                : undefined
            }
            <input className={hasError ? styles.error : undefined} {...input} {...props} />
        </>
    )
}