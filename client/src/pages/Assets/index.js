import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import Creative from "../../components/Creative/creative";
import Header from "../../components/Header/index";
import { fetchCreative } from "../../api/index";

const assets = () => {
  const [creatives, setCreatives] = useState([]);

  useEffect(() => {
    fetchCreative().then((res) => {
      setCreatives(res);
    });
  }, []);

  return (
    <div>
      <Header />
      {creatives.map((creative) => {
        return (
          <Creative
            key={creative.id}
            creativeId={creative.id}
            creativeImg={creative.creative_media}
            name={creative.name}
            budget={creative.budget}
            cpm={creative.cpm}
            ctr={creative.ctr}
            linkClicks={creative.link_clicks}
            impressions={creative.impressions}
            reach={creative.reach}
          />
        );
      })}
    </div>
  );
};

export default assets;
