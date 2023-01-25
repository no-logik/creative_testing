import React from "react";

import Input from "../../Input/input";

import styles from "./targetAudience.module.css";

const targetAudience = () => {
  return (
    <div className={styles.container}>
      <Input type="text" label="Location" />
      <Input type="text" label="Interest" />
      <Input type="text" label="Language" />
      <div>
        <h3 className={styles.h3}>Gender</h3>
        <div className={styles.gender}>
          <Input type="radio" label="Male" />
          <Input type="radio" label="Female" />
          <Input type="radio" label="Both" />
        </div>
      </div>
      <Input type="range" label="Age" />
    </div>
  );
};

export default targetAudience;
