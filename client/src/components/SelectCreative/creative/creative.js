import React from "react";

import Input from "../../Input/input";

import styles from "./creative.module.css";
import ChooseFile from "../../../assets/images/dragndrop.png";

const selectCreative = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fileSection}>
        <label className={styles.file}>
          <img src={ChooseFile} alt="drangndrop" />
          <input
            className={styles.fileInput}
            type="file"
            name="chooseFile"
            id="choosefile"
            placeholder="choose file"
          />
        </label>
      </div>
      <div className={styles.text}>
        <Input
          type="text"
          placeholder="Primary Text..."
          name="primaryText"
          id="primaryText"
          required
          label="Primary Text"
        />
        <Input
          type="text"
          placeholder="Description"
          name="description"
          id="description"
          label="Description"
        />
        <Input
          type="text"
          placeholder="URL..."
          name="uel"
          id="url"
          required
          label="URL"
        />
      </div>
    </div>
  );
};

export default selectCreative;
