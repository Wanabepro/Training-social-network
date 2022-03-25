import React from "react";
import styles from './FormControls.module.css'
import { Field } from 'redux-form';

export const Input = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error

    return <>
        {hasError
            ? <span className={styles.message}> {String(error)} </span>
            : undefined
        }
        <input className={hasError ? styles.error : undefined} {...input} {...props} />
    </>
}

export const createField = (name, component, props) => {
    return (
        <div>
            <Field
                name={name}
                component={component}
                {...props}
            />
        </div>
    )
}