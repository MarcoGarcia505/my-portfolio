import { TableProjects } from "@/components";
import React from "react";
import styles from "./projects.module.css";
import Link from "next/link";
import {FiArrowLeft} from 'react-icons/fi'
export default function Page() {
  return (
    <section className={styles.container_projects_list}>
      <div className={styles.container_projects_img1}></div>
      <div className={styles.container_projects_imgs}>
        <div className={styles.container_projects_imgs1}></div>
        <div className={styles.container_projects_imgs2}></div>
        <div className={styles.container_projects_imgs3}></div>
        <div className={styles.container_projects_imgs4}>
          <svg style={{ position: "absolute" }}>
            <clipPath id="wave4444">
              <path
                d="M1289.9 70.5371C1077.1 -11.3558 905.86 45.0023 728.36 66.1005C550.86 87.1986 430.248 25.3857 264.86 6.83957C99.4718 -11.7065 66.483 11.2198 -12.6395 31.0004C-12.6395 118.933 -12.6395 532.869 -12.6395 532.869L1516.96 532.869L1516 6.83949C1516 6.83949 1503.09 152.58 1289.9 70.5371Z"
                fill="url(#paint0_linear)"
              ></path>
            </clipPath>
          </svg>
        </div>
      </div>
      <div className={styles.container_projects_img2}></div>
      <div className={styles.container_projects_img3}></div>
      <div className={styles.container_projects_img4}></div>
      <div className={styles.container_info_projects}>
        <div className={styles.container_project_tittle}>
          <Link href="/" className={styles.back_to_portfolio}> 
            <FiArrowLeft className={styles.back_to_portfolio_arrow} /> 
              Back to Portfolio
          </Link>
          <h2 className={styles.all_tittle}>All Projects</h2>
        </div>
        <TableProjects />
      </div>
    </section>
  );
}
