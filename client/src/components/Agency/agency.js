import React from "react";
import { Link } from "react-router-dom";

import styles from "./agency.module.css";
import useAuth from "../../hooks/useAuth";

import BrandPic from "../../assets/images/brand_img.jpg";

const agency = (props) => {
  const { auth } = useAuth();

  const toLink = `/${auth.userId}/${props.agencyId}`;
  console.log(auth);

  return (
    <div className={styles.container}>
      <div className={styles.agencyName}>
        <div className={styles.agencyImg} />
        <Link to={toLink}>
          <span>{props.agencyName || "Agency 1"}</span>
        </Link>
      </div>
      <div className={styles.brandCount}>
        <div className={styles.brandBox}>
          <span>TOTAL BRANDS:</span>
          <span className={styles.brandNumber}>{props.brandCount || 3}</span>
        </div>
        <div>
          <img className={styles.brandone} src={BrandPic} alt="brand_name" />
          <img className={styles.brandtwo} src={BrandPic} alt="brand_name" />
          <img className={styles.brandthree} src={BrandPic} alt="brand_name" />
        </div>
      </div>
      <div className={styles.projectCount}>
        <div className={styles.projectBox}>
          TOTAL PROJECTS:{" "}
          <span className={styles.projectNumber}>{props.totalProjects || 56}</span>
        </div>
        <div className={styles.brandClass}>
          <div className={styles.completedProjects}>
            Completed Projects: <span>{props.completedProjects || 30}</span>
          </div>
          <div className={styles.liveProjects}>
            Live Projects: <span>{props.liveProjects || 16}</span>
          </div>
          <div className={styles.draftProjects}>
            Draft Projects: <span>{props.draftProjects || 10}</span>
          </div>
        </div>
      </div>
      <div className={styles.totalSpends}>
        <span>TOTAL SPENDS:</span>
        <div className={styles.spend}>${props.totalSpends || 45678}</div>
      </div>
    </div>
  );
};

export default agency;
