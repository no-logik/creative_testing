import React from "react";

import styles from "./chipinput.module.css";

export const Chip = () => {
  return (
    <span className={styles.chip}>
      hello
      <span className={`${styles.chipcross} ${styles.hidden} `}>&#9938;</span>
    </span>
  );
};

export const ChipInput = (props) => {
  const { type, placeholder, name, id, required, label } = props;

  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        required={required}
      />
    </div>
  );
};
