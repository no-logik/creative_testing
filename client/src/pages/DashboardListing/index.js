import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import Header from "../../components/Header/index";
import Project from "../../components/Project/project";

import { fetchProject } from "../../api/index";

const dashboardListing = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProject().then((res) => {
      console.log(res);
      setProjects(res);
    });
  }, []);

  return (
    <div>
      <Header />
      {projects ? (
        projects.map((project) => {
          return (
            <Project
              key={project.id}
              projectId={project.id}
              projectName={project.project_name}
              dateCreated={project.date_created}
              status={project.status}
              projectImg={project.project_img}
              brandId={project.brand_id}
              budget={project.budget}
              startDateTime={project.start_date_time}
              endDateTime={project.end_date_time}
            />
          );
        })
      ) : (
        <Project />
      )}
    </div>
  );
};

export default dashboardListing;
