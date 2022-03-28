import React from "react";
import styles from './FieldCreator.module.css'
import { Field } from 'redux-form';

export const createFieldForPersonalDataSettings = (textBefore, name, component, props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBefore}>
                {textBefore}
            </div>
            <div className={styles.fieldDiv}>
                <Field
                    name={name}
                    component={component}
                    {...props}
                />
            </div>
        </div>
    )
}

export default createFieldForPersonalDataSettings