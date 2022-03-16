import React from "react";
import preloaderStyles from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={preloaderStyles.preloader}>
            <div className={preloaderStyles.preloader__row}>
                <div className={preloaderStyles.preloader__item}></div>
                <div className={preloaderStyles.preloader__item}></div>
            </div>
        </div>
    )
}

export default Preloader