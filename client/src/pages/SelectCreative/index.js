import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/index";
import styles from "./selectcreative.module.css";

import SelectFormStep from "../../components/SelectCreative/selectFormStep";

const selectCreative = () => {
  const [step, setStep] = useState(1);

  const prev = () => {
    if (step !== 1) setStep(step - 1);
  };

  const next = () => {
    if (step !== 3) setStep(step + 1);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}></div>
        <div className={styles.main}>
          <div className={styles.projectTitle}>UNTITLE PROJECT</div>
          <div className={styles.formHead}>
            <div
              id="creative"
              className={step === 1 ? styles.activeFormHeading : styles.formHeading}
              onClick={() => setStep(1)}
            >
              <span className={step === 1 ? null : styles.inactive}>&#10102;</span>
              <span className={step === 1 ? styles.inactive : null}>&#10112;</span>
              SELECT CREATIVE
            </div>
            <div
              id="targetAudience"
              className={step === 2 ? styles.activeFormHeading : styles.formHeading}
              onClick={() => setStep(2)}
            >
              <span className={step === 2 ? null : styles.inactive}>&#10103;</span>
              <span className={step === 2 ? styles.inactive : null}>&#10113;</span>
              SELECT TARGET AUDIENCE
            </div>
            <div
              id="budgetAndSchedule"
              className={step === 3 ? styles.activeFormHeading : styles.formHeading}
              onClick={() => setStep(3)}
            >
              <span className={step === 3 ? null : styles.inactive}>&#10104;</span>
              <span className={step === 3 ? styles.inactive : null}>&#10114;</span>
              SELECT BUDGET & SCHEDULE
            </div>
          </div>
          <SelectFormStep step={step} />
          <div className={styles.formNav}>
            <Link className={styles.back} onClick={prev}>
              {" "}
              &lt; &nbsp; Back{" "}
            </Link>
            <div>
              <button className={styles.saveDraft}>Save as Draft</button>
              <Link className={styles.next} onClick={next}>
                Next &nbsp; &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default selectCreative;
