import React from 'react'
import styles from './card.module.css'

function CardExperience({tittle, date, description}) {
  return (
        <div className={styles.card_container}>
            <div className="">
                {/* <Image src="//images.ctfassets.net/ooa29xqb8tix/7cW1QUayUN0KMVqqLtKnqZ/382b7002fe454d7a727d745611fa7baa/Kushal.jpg?w=400&amp;q=50" alt="avatar" className="TestimonialCard__Avatar-sc-1625tot-1 hoZIGu" width={200} height={200} /> */}
            </div>
            <h3 className={styles.card_experience_tittle}>{tittle}</h3>
            <p className={styles.card_experience_date}>{date}</p>
            <p className={styles.card_experience_description}>{description}</p>
        </div>
    )
}

export default CardExperience