import React from 'react'
import styles from './projects.module.css'
import CardPorject from '../cardProjects/cardPorjects'
import surtidora from '@/public/img/img_proyectos/surtidora.png'
import fusestore from '@/public/img/img_proyectos/fusestore.png'
import gateway from '@/public/img/img_proyectos/gateway.png'
import ipifix from '@/public/img/img_proyectos/ipifix.png'
import Link from 'next/link'
import {FiArrowRight} from 'react-icons/fi'

function Projects() {
return (
    <section className={styles.container_projects} id='projects'>
        <div>
            <h1 className={styles.projects_tittle}>Projects</h1>
        </div>
        <div className={styles.container_info_projects}>
            <div className={styles.container_items_projects_1}> 
                <CardPorject 
                    name="Surtidora" 
                    description="Es un e-commerce enfocado a la venta y distribución de sus productos eléctricos y de iluminación" 
                    link="https://www.surtidoraelectrica.com/"
                    srcImage={surtidora}
                    orientation="vertical"
                    tech={["Laravel", "Laravel Jetstream", "NetPay", "Jwt", "MySQL"]}
                    color="red"
                    width={200}
                    height={100}
                />
                <CardPorject 
                    name="Gateway" 
                    description="Es un e-commerce enfocado a la venta y distribución de sus productos electrificación"
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
                <CardPorject 
                    name="Fusestore" 
                    description="Es un e-commerce enfocado a la venta y distribución de sus productos eléctricos"
                    link="https://fusestore.com.mx/"
                    srcImage={fusestore}
                    orientation="horizontal"
                    tech={["Laravel", "Jwt", "MySQL"]}
                    color="blur"
                    width={200}
                    height={100}
                    />
                <CardPorject 
                    name="Ipifix" 
                    description="Para este proyecto creamos el back-end de esta aplicación, la cual se encaraga de ofrecer los diferentes servicios de los usuarios."
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