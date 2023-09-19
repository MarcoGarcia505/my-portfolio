
import Image from 'next/image'
import React from 'react'
import styles from './cardprojects.module.css'
import {FiArrowUpRight} from 'react-icons/fi'

function CardPorject({name, description, srcImage, orientation, tech, color, width, height, link}) {
    
    const setColor = {
        orange: styles.project_img_orange,
        pink: styles.project_img_pink,
        blur: styles.project_img_blur,
        red: styles.project_img_red,
        purple: styles.project_img_purple,
        white: styles.project_img_white
    }

  return (
    <div className={`${orientation == "vertical" ? styles.card_projects_vertical : styles.card_projects_horizontal}`}>
        <div className={`${styles.project_img} ${color == "orange" ? setColor.orange : color == "pink" ? setColor.pink : color == "blur" ? setColor.blur : color == "red" ? setColor.red : color == "purple" ? setColor.purple : setColor.white}`}>
            <Image width={width} height={height} src={srcImage} alt='iamges projets' />
        </div>
        <div className={styles.project_contain_info}>
            <a href={link} target='_blank' className={styles.project_tittle}>{name} <FiArrowUpRight className={styles.project_icon}/></a>    
            <p className={styles.project_description}>{description}</p>
            <div className={styles.projects_tech}>
                {
                    tech.map(item => {
                        return (<span className={styles.project_tech_item} key={item}>{item}</span>)
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CardPorject