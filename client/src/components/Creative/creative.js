import React from "react";

import styles from "./creative.module.css";
import creativeLogo from "../../assets/images/creative_image.png";

const creative = (props) => {
  const { creativeImg, name, budget, cpm, ctr, linkClicks, impressions, reach } = props;

  return (
    <div className={styles.creativeBox}>
      <img
        src={creativeLogo || creativeImg}
        className={styles.creativeLogo}
        alt="creative Logo"
      />
      <div className={styles.creativeItem}>
        <h1>NAME</h1>
        <span>{name}</span>
      </div>

      <div className={styles.creativeItem}>
        <h1>BUDGET & SPENT</h1>
        <span>{budget}</span>
      </div>
      <div className={styles.creativeItem}>
        <h1>CPM</h1>
        <span>{cpm}</span>
      </div>
      <div className={styles.creativeItem}>
        <h1>CTR</h1>
        <span>{ctr}</span>
      </div>
      <div className={styles.creativeItem}>
        <h1>LINK CLICKS</h1>
        <span>{linkClicks}</span>
      </div>
      <div className={styles.creativeItem}>
        <h1>IMPRESSIONS</h1>
        <span>{impressions}</span>
      </div>
      <div className={styles.creativeReach}>
        <h1>REACH</h1>
        <span>{reach}</span>
      </div>
    </div>
  );
};

export default creative;
