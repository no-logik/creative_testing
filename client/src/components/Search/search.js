import React from "react";

import Styles from "./search.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const search = () => {
  return (
    <div className={Styles.container}>
      <form className={Styles.search}>
        <div>
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
      </form>
    </div>
  );
};

export default search;
