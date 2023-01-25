import React, { useEffect, useState } from "react";

import Header from "../../components/Header/index";
import Agency from "../../components/Agency/agency";

import { fetchAgency } from "../../api/index";

const admin = () => {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    fetchAgency().then((res) => {
      setAgencies(res);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <Header />
      {agencies.map((agency) => {
        return (
          <Agency
            key={agency.id}
            agencyId={agency.id}
            agencyName={agency.agency_name}
            brandCount={agency.brand_count}
            totalProjects={agency.total_projects}
            completedProjects={agency.completed_projects}
            liveProjects={agency.live_projects}
            draftProjects={agency.draft_projects}
            totalSpends={agency.total_spends}
          />
        );
      })}
    </div>
  );
};

export default admin;
