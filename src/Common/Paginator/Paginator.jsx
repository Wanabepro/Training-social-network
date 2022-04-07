import React, { useState, useEffect } from "react"
import styles from './Paginator.module.css'

const Paginator = ({ totalCount, count, currentPage, onPageChange }) => {
    let [windowWidth, setWindowWidth] = useState(window.screen.width)

    const resizeHandler = () => {
        setWindowWidth(window.screen.width)
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        return () => window.removeEventListener('resize', resizeHandler)
    }, [])

    const portionSize = windowWidth < 1280
        ? Math.ceil(windowWidth / 1280 * 25)
        : 25
    const portionsCount = Math.ceil(totalCount / count / portionSize)
    const currentPortion = Math.ceil(currentPage / portionSize)
    const leftPortionLim = (currentPortion - 1) * portionSize + 1
    const rightPortionLim = (currentPortion * portionSize * count) > totalCount
        ? Math.ceil(totalCount / count)
        : currentPortion * portionSize

    let pages = []
    for (let i = leftPortionLim; i <= rightPortionLim; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.container}>
            <div className={styles.portionsInfo}>{`${currentPortion}/${portionsCount}`}</div>
            <div className={styles.pagination}>
                <div
                    className={`${styles.left} ${styles.Arrow} ${currentPortion === 1
                        ? styles.inactiveArrow
                        : undefined
                        }`}
                    onClick={currentPortion === 1
                        ? undefined
                        : () => { onPageChange((currentPortion - 1) * portionSize) }}
                ></div>

                {pages.map(page => {
                    return <div
                        key={page}
                        className={`${styles.page} ${(currentPage === Number(page)) ? styles.selected : undefined}`}
                        onClick={() => { onPageChange(page) }}
                    >
                        {page}
                    </div>
                })}

                <div
                    className={`${styles.right} ${styles.Arrow} ${currentPortion === portionsCount
                        ? styles.inactiveArrow
                        : undefined
                        }`}
                    onClick={currentPortion === portionsCount
                        ? undefined
                        : () => { onPageChange(currentPortion * portionSize + 1) }}
                ></div>
            </div>
        </div>
    )
}

export default Paginator