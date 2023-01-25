import React from "react";

import Creative from "./creative/creative";
import TargetAudience from "./targetAudience/targetAudience";
import BudgetAndSchedule from "./budgetAndSchedule/budgetAndSchedule";

const selectFormStep = (props) => {
  const { step } = props;

  switch (step) {
    case 1:
      return <Creative />;
    case 2:
      return <TargetAudience />;
    case 3:
      return <BudgetAndSchedule />;
    default:
    //do nothing
  }
};

export default selectFormStep;
