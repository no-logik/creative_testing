import React, { useState } from "react";
import { Chart } from "react-google-charts";

import styles from "./performance.module.css";
import Header from "../../components/Header/index";
import CreativePic from "../../assets/images/creative_pic.jpg";

const Performance = () => {
  const options = {
    curveType: "function",
    chartArea: {
      backgroundColor: "cyan",
    },
  };

  const data = [
    ["Year", "Sales"],
    ["2004", 1000],
    ["2005", 1170],
    ["2006", 660],
    ["2007", 1030],
  ];

  return (
    <div>
      <div className={styles.criteriaBar}>
        <button className={styles.criteriaBtn}>
          <img alt="cpm" className={styles.icon} />
          <div>
            <span className={styles.data}>{30}</span> <br />
            <span>Spends</span>
          </div>
        </button>
        <button className={styles.criteriaBtn}>
          <img alt="cpm" className={styles.icon} />
          <div>
            <span className={styles.data}>{20}</span> <br />
            <span>CPM</span>
          </div>
        </button>
        <button className={styles.criteriaBtn}>
          <img alt="cpm" className={styles.icon} />
          <div>
            <span className={styles.data}>{10}</span> <br />
            <span>CTR</span>
          </div>
        </button>
        <button className={styles.criteriaBtn}>
          <img alt="cpm" className={styles.icon} />
          <div>
            <span className={styles.data}>{5}</span> <br />
            <span>Link Clicks </span>
          </div>
        </button>
        <button className={styles.criteriaBtn}>
          <img alt="cpm" className={styles.icon} />
          <div>
            <span className={styles.data}>{1}</span> <br />
            <span>Impressions</span>
          </div>
        </button>
        <button className={styles.criteriaBtn}>
          <img alt="cpm" className={styles.icon} />
          <div>
            <span className={styles.data}>{2}</span> <br />
            <span>Reach</span>
          </div>
        </button>
      </div>
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        graphID="LineChart"
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

const Insights = () => {
  return (
    <div className={styles.insightcontainer}>
      <div>
        <div className={styles.dataBox}>
          <h2>PRIMARY TEXT</h2>
          <span>
            {
              "Bookmark your design ideas today with Livspace. Design a dream home with Livspace. "
            }
          </span>
        </div>
        <div className={styles.dataBox}>
          <h2>DESCRIPTION</h2>
          <span>{"Bookmark your design ideas today with Livspace."}</span>
        </div>
        <div className={styles.dataBox}>
          <h2>URL</h2>
          <span>{"http//Lorum Ipsum Bookmark.com"}</span>
        </div>
        <div>
          <div className={styles.dataBox}>
            <h2>AUDIENCE:</h2>
            <span>{"30"}</span>
          </div>
          <div className={styles.dataBox}>
            <h2>BUDGET:</h2>
            <span>{"30k"}</span>
          </div>
        </div>
        <div className={styles.dataBox}>
          <h2>SCHEDULE TIME:</h2>
          <span>{"12/04/2022 - 13/05/2022"}</span>
        </div>
      </div>
      <div>
        <img src={CreativePic} alt={"creative media will be shown here"} />
      </div>
    </div>
  );
};

// const Insights = () => {};

const PerformancenInsights = () => {
  const [page, setPage] = useState(0);

  // const switchPage = (e) => {
  //   if (page === 0) {
  //     setPage(page + 1);
  //   } else if (page === 1) {
  //     setPage(page - 1);
  //   }
  // };

  return (
    <div>
      <Header />
      <div>
        <div className={styles.btnDiv}>
          <button className={styles.btn} onClick={() => setPage(0)}>
            Performance
          </button>
          <button className={styles.btn} onClick={() => setPage(1)}>
            Insights & Details
          </button>
        </div>
        <div>{!page ? <Performance /> : <Insights />}</div>
      </div>
    </div>
  );
};

export default PerformancenInsights;
