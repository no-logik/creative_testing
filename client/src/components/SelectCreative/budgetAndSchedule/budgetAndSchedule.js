import React from "react";

import Input from "../../Input/input";
import styles from "./budgetAndSchedule.module.css";

const BudgetAndSchedule = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.h3}> Budget Selections</h3>
        <Input type="radio" label="Lifetime Budget" />
        <Input type="radio" label="Daily Budget" />
      </div>
      <Input type="number" label="Budget" />
      <Input type="date" label="Select Publish Date" />
      <Input type="time" label="Select Publish Time" />
    </div>
  );
};

export default BudgetAndSchedule;
