import React from 'react'
import styles from './projects.module.css'
import surtidora from '../../public/img/img_proyectos/surtidora.png'
import fusestore from '../../public/img/img_proyectos/fusestore.png'
import gateway from '../../public/img/img_proyectos/gateway.png'
import ipifix from '../../public/img/img_proyectos/ipifix.png'
import Link from 'next/link'
import {FiArrowRight} from 'react-icons/fi'
import CardProject from './CardProject'

function Projects() {
return (
    <section className={styles.container_projects} id='projects'>
        <div>
            <h1 className={styles.projects_tittle}>Projects</h1>
        </div>
        <div className={styles.container_info_projects}>
            <div className={styles.container_items_projects_1}> 
                <CardProject 
                    name="Surtidora" 
                    description="Creating one e-commerce about electronic products and lightn" 
                    link="https://www.surtidoraelectrica.com/"
                    srcImage={surtidora}
                    orientation="vertical"
                    tech={["Laravel", "Laravel Jetstream", "NetPay", "Jwt", "MySQL"]}
                    color="red"
                    width={200}
                    height={100}
                />
                <CardProject 
                    name="Gateway" 
                    description="E-commerce focused on the sale and distribution of electrification products."
                    link="https://gatewaysureste.com/"
                    srcImage={gateway} 
                    orientation="vertical"
                    tech={["Laravel", "Blade Templates", "Jwt", "MySQL"]}
                    color="purple"
                    width={200}
                    height={100}
                    />
            </div>
            <div className={styles.container_items_projects_2}>
                <CardProject 
                    name="Fusestore" 
                    description="I've been collaborated in the development of this e-commerce using:"
                    link="https://fusestore.com.mx/"
                    srcImage={fusestore}
                    orientation="horizontal"
                    tech={["Laravel", "Jwt", "MySQL"]}
                    color="blur"
                    width={200}
                    height={100}
                    />
                <CardProject 
                    name="Ipifix" 
                    description="Creation of the backend to application that is the first in the industrial sector to offer services"
                    link="https://www.ipifix.com/"
                    srcImage={ipifix} 
                    orientation="horizontal"
                    tech={["Laravel", "Jwt", "MySQL"]}
                    color="white"
                    width={150}
                    height={200}
                />
            </div>
        </div>
        <div className={styles.footer_projects}>
            <Link href="/projects" className={styles.footer_projects_link}>View All Projects <FiArrowRight className={styles.footer_projects_link_row} /></Link>
        </div>
    </section>
  )
}

export default Projects