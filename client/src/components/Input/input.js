import React from "react";

import styles from "./input.module.css";

const input = (props) => {
  const { type, placeholder, name, id, required, label } = props;

  const range = {
    min: "10",
    max: "100",
  };

  return (
    <>
      {type === "radio" ? (
        <div className={styles.fieldradio}>
          <input className={styles.radioInput} type={type} name={name} id={id} />
          <label className={styles.labelradio}>{label}</label>
        </div>
      ) : (
        <div className={styles.field}>
          <label for={id} className={styles.label}>
            {label}
          </label>
          <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            required={required}
            // {...register({ name }, { required: { required } })}
            min={type === "range" ? range.min : null}
            max={type === "range" ? range.max : null}
          />
        </div>
      )}
    </>
  );
};

export default input;
