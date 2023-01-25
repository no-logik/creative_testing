import React, { useEffect, useState } from "react";

import Header from "../../components/Header/index";
import Brand from "../../components/Brand/brand";

import { fetchBrand } from "../../api/index";

const dashboard = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrand().then((res) => {
      setBrands(res);
    });
  }, []);

  return (
    <div>
      <Header />
      {brands.map((brand) => {
        return (
          <Brand
            key={brand.id}
            projectId={brand.id}
            brandName={brand.brand_name}
            brandImg={brand.brand_img}
            completedProjects={brand.completed_projects}
            liveProjects={brand.live_projects}
            draftProjects={brand.draft_projects}
            agencyId={brand.agency_id}
          />
        );
      })}
    </div>
  );
};

export default dashboard;
