import React from "react";
import styles from "./NewsCard.module.css"

const NewsCard = props => {
    return (
        <section className={styles.container}>
            <article>
                <h2 className={styles.title}>{props.title}</h2>
                <p className="">{props.text}</p>
            </article>
        </section>
    )
}

export default NewsCard