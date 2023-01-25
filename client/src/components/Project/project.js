import React from "react";
import { Link } from "react-router-dom";

import styles from "./project.module.css";
import projectLogo from "../../assets/images/brand_img.jpg";
import brandLogo from "../../assets/images/creative_image.png";
import Edit from "../../assets/images/write.png";
import View from "../../assets/images/images.png";

const project = (props) => {
  const toLink = `project/${props.projectName}`;
  const toEdit = `project/${props.projectName}/edit`;
  const toView = `project/${props.projectName}/view`;

  return (
    <div className={styles.projectBox}>
      <div className={styles.projectName}>
        <div className={styles.tag}>LIVE</div>
        <div className={styles.projectText}>
          <img
            src={props.projectImg || projectLogo}
            className={styles.projectLogo}
            alt="projlogo"
          />
          <Link to={toLink}>
            <div>
              <h1>{props.projectName || "PROJECT NAME"}</h1>
              <span>In progress</span>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.budget}>
        <h1>BUDJET</h1>
        <span>${props.budget || "10000"}</span>
      </div>
      <div className={styles.time}>
        <h1>START DATE & TIME:</h1>
        <span>{props.startDateTime || "Oct 29, 2020 at 12:23 pm"}</span>
      </div>
      <div className={styles.time}>
        <h1>END DATE & TIME:</h1>
        <span>{props.endDateTime || "Oct 29, 2020 at 12:23 pm"}</span>
      </div>
      <div className={styles.preview}>
        <img src={brandLogo} className={styles.previewImg} alt="preview img" />
        <img src={brandLogo} className={styles.previewImg} alt="preview img" />
        <div className={styles.plusImg}>+{4}</div>
      </div>
      <div className={styles.edit}>
        <Link to={toView}>
          <img className={styles.editIcon} src={View} alt="save" />
        </Link>
        <Link to={toEdit}>
          <img className={styles.editIcon} src={Edit} alt="edit" />
        </Link>
      </div>
    </div>
  );
};

export default project;
