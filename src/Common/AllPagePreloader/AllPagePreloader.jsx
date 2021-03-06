import React from "react";
import styles from './AllPagePreloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloader__row}>
                <div className={styles.preloader__item}></div>
                <div className={styles.preloader__item}></div>
            </div>
        </div>
    )
}

export default Preloader