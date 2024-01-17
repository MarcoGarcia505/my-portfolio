import React from 'react'
import styles from './tableProjects.module.css'
import {FiArrowUpRight} from 'react-icons/fi'

const projects = [
    {
        year: 2019,
        name: "TuMedic",
        description: "Una herramienta pensada para llevar la administración de Hospital, así como también brindar a los usuarios consultas online, resolviendo un problemática llamada COVID-19",
        madeAt: "CWA",
        buildWith: ["Laravel", "Blade Templetes", "Vue",  "PayPal", "MySQL"],
        link: ""
    },
    {
        year: 2019,
        name: "Normex",
        description: "Con este proyecto nos encargamos de resolver una problemática que tenia la empresa normex y es hacer que sus productos industriales tengan un alcance mundial, partiendo de mostrar un catalogo de los diferentes productos y un contacto uno a uno con el usuario",
        madeAt: "CWA",
        buildWith: ["Laravel", "Angular", "NetPay", "Jwt", "MySQL"],
        link: "",
        name_link: ""
    },
    {
        year: 2019,
        name: "Levery",
        description: "Se realizo una propuesta de diseño para el desarrollo de su app movil la cual tiene como fin ofrecer sus diferentes productos y llevar el control de cada uno de ellos siendo esta una app de delivery",
        madeAt: "CWA",
        buildWith: ["Adobe XD"],
        link: "https://levery.com.mx/",
        name_link: "levery.com.mx"

    },
    {
        year: 2020,
        name: "Profumo",
        description: "Es un e-commerce encargado de la venta y distribucion los diferentes productos mas enfocados a la industria perfumería ",
        madeAt: "CWA",
        buildWith: ["WordPress"],
        link: "https://profumo.mx/",
        name_link: "profumo.mx"
    },
    {
        year: 2020,
        name: "Sandarely",
        description: "Con la creación de este sitio web buscamos brindar un alcance mucho mas grande del que ya se tenia, creando un catalogo de la amplia gama de productos de esta empresa zapatera ",
        madeAt: "CWA",
        buildWith: ["WordPress"],
        link: "https://sandarely.com/",
        name_link: "sandarely.com"
    },
    {
        year: 2020,
        name: "BlackSheep",
        description: "Para la resolución de esta problemática buscamos expandir el alcance de los productos así como también dandole un toque único para que los usuarios puedan personalizar estos mismos, siendo esto un punto clave para el auge de esta web orientada a la industria textil",
        madeAt: "CWA",
        buildWith: ["WordPress"],
        link: "https://blacksheep.com.mx/",
        name_link: "blacksheep.com.mx"
    },
    {
        year: 2021,
        name: "Scotia Bank",
        description: "Para este proyecto creamos un canal privado de video conferencias exclusivo para un grupo selecto de integrantes de esta empresa ",
        madeAt: "CWA",
        buildWith: ["Laravel", "Blade Templates", "Websockets", "MySQL"],
        link: "",
        name_link: ""
    },
    {
        year: 2021,
        name: "Banorte",
        description: "Para este proyecto creamos un canal privado de video conferencias exclusivo para un grupo selecto de integrantes de esta empres",
        madeAt: "CWA",
        buildWith: ["Laravel", "Blade Templates", "Websockets", "MySQL"],
        link: "",
        name_link: ""
    },
    {
        year: 2021,
        name: "Izzi",
        description: "Para este proyecto creamos un canal privado de video conferencias exclusivo para un grupo selecto de integrantes de esta empresa",
        madeAt: "CWA",
        buildWith: ["Laravel", "Blade Templates", "Websockets", "MySQL"],
        link: "",
        name_link: ""
    },
    {
        year: 2021,
        name: "China Market",
        description: "Con la creación de este e-commerce buscamos estandarizar y gerarquizar los mas de 5000 productos con los que esta empresa cuenta ",
        madeAt: "CWA",
        buildWith: ["WordPress"],
        link: "https://chinamarketmx.com/",
        name_link: "chinamarketmx.com"
    },
    {
        year: 2022,
        name: "Modulary",
        description: "reamos uno de los merketplace orientados a la industria de equipos de DJs, siendo este uno de los pioneros en esta industria ",
        madeAt: "CWA",
        buildWith: ["Laravel", "Laravel Jetstream", "NetPay", "Jwt", "MySQL"],
        link: "https://modulary.com.mx/",
        name_link: "modulary.com.mx"
    },
    {
        year: 2023,
        name: "Lush",
        description: "Creamos uno de los mejores e-commerce para la empresas mas reconocidas en el ámbito cosmético",
        madeAt: "CWA",
        buildWith: ["Shopify"],
        link: "https://lush.mx/",
        name_link: "lush.mx"
    },
    {
        year: 2023,
        name: "Surtidora",
        description: "Es un e-commerce enfocado a la venta y distribución de sus productos eléctricos y de iluminación ",
        madeAt: "CWA",
        buildWith: ["Laravel", "Laravel Jetstream", "NetPay", "Jwt", "MySQL"],
        link: "https://www.surtidoraelectrica.com/",
        name_link: "surtidoraelectrica.com"
    },
    {
        year: 2023,
        name: "Gateway",
        description: "Es un e-commerce enfocado a la venta y distribución de sus productos electrificación",
        madeAt: "CWA",
        buildWith: ["Laravel", "Laravel Jetstream", "NetPay", "Jwt", "MySQL"],
        link: "https://gatewaysureste.com/",
        name_link: "gatewaysureste.com"
    },
    {
        year: 2023,
        name: "Fusestore",
        description: "Es un e-commerce enfocado a la venta y distribución de sus productos eléctricos",
        madeAt: "CWA",
        buildWith: ["Laravel", "Laravel Jetstream", "NetPay", "Jwt", "MySQL"],
        link: "https://fusestore.com.mx/",
        name_link: "fusestore.com.mx"
    },
    {
        year: 2023,
        name: "Cdosa",
        description: "Es un e-commerce enfocado a la venta y distribución de sus componentes electrónicos",
        madeAt: "CWA",
        buildWith: ["Laravel", "Laravel Jetstream", "NetPay", "Jwt", "MySQL"],
        link: "http://cdosa.mx/",
        name_link: "cdosa.mx"
    },
    {
        year: 2023,
        name: "Ipifix",
        description: "Para este proyecto creamos el back-end de esta aplicación, la cual se encaraga de ofrecer los diferentes servicios de los usuarios dependiendo del rol con el que cuenten cada uno de ellos",
        madeAt: "CWA",
        buildWith: ["Laravel", "WebSockets", "JWT", "MySQL ", ],
        link: "https://www.ipifix.com/",
        name_link: "ipifix.com"
    }
]
function TableProjects() {
  return (
    <div className={styles.container_table_projects}>
        <table className={styles.table_container}>
          <thead>
            <tr className={styles.table_head}>
              <th className={styles.table_head_year}>Year</th>
              <th className={styles.table_head_project}>Project</th>
              <th className={styles.table_head_description}>Description</th>
              <th className={styles.table_head_madeat}>Made at</th>
              <th className={styles.table_head_build}>Built with</th>
              <th className={styles.table_head_link}>Link</th>
            </tr>
          </thead>
          <tbody>
            {
                projects.map(item => {
                    return (
                        <tr key={item.name} className={styles.table_body}>
                            <td className={styles.table_year}>{item.year}</td>
                            <td>{item.name}</td>
                            <td className={styles.table_description}>{item.description}</td>
                            <td className={styles.table_madeat}>{item.madeAt}</td>
                            <td className={styles.table_build}>{item.buildWith.map(tech => <span className={styles.table_tech_item} key={tech}>{tech}</span>)}</td>
                            <td className={styles.table_link}>
                                <a href={item.link} target="_blank" className={styles.table_link_send}> {item.name_link} {!item.name_link ? "" : <FiArrowUpRight className={styles.project_icon}/>}</a>
                            </td>
                        </tr>
                    );
                }).reverse()
            }
          </tbody>
        </table>
      </div>
  )
}

export default TableProjects