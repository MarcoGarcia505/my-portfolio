import React from 'react'
import styles from './card.module.css'

function Cardexperience({tittle, date, description}) {
  return (
        <div className={styles.card_container}>
            <div className="">
            </div>
            <h3 className={styles.card_experience_tittle}>{tittle}</h3>
            <p className={styles.card_experience_date}>{date}</p>
            <p className={styles.card_experience_description}>{description}</p>
        </div>
    )
}

export default Cardexperience