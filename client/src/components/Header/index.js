import React from "react";

import styles from "./header.module.css";
import { ChevronDownIcon, BellIcon } from "@heroicons/react/24/outline";

import LogoPic from "../../assets/images/pixis_black_logo.png";
import UserPic from "../../assets/images/user.jpeg";

const header = () => {
  return (
    <div className={styles.nav}>
      <img className={styles.logo} src={LogoPic} alt="logo" />
      <div className={styles.user}>
        <BellIcon className={styles.notification} />
        <div className={styles.profile}>
          <img className={styles.profPic} src={UserPic} alt="user-dp" />
          <ChevronDownIcon className={styles.downicon} />
        </div>
      </div>
    </div>
  );
};

export default header;
