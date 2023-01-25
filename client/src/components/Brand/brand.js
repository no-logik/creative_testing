import React from "react";
import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

import styles from "./brand.module.css";
import brandLogo from "../../assets/images/creative_image.png";

const brand = (props) => {
  // const auth = useAuth();

  const toLink = `listing/${props.brandName}`;
  // const location = useLocation();
  // const { auth } = useAuth();

  return (
    <div className={styles.brandBox}>
      <div className={styles.brandName}>
        <Link to={toLink}>
          <h1>{props.brandName || "Brand Name"}</h1>

          <img
            src={props.brandImg || brandLogo}
            className={styles.brandLogo}
            alt="brand logo"
          />
        </Link>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectCompleted}>
          <h3>Completed Projects</h3>
          <span>{props.completedProjects || 20}</span>
        </div>
        <div className={styles.projectLive}>
          <h3>Live Projects</h3>
          <span>{props.liveProjects || 10}</span>
        </div>
        <div className={styles.projectDraft}>
          <h3>Draft Projects</h3>
          <span>{props.draftProjects || 8}</span>
        </div>
      </div>
    </div>
  );
};

export default brand;
