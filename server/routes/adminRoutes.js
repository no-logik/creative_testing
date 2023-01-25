import express from "express";

import models from "../models/index.js";

const router = express.Router();

router.get("/:user", (req, res) => {
  const { user } = req.params;

  models.model.agencies
    .findAll({
      where: {
        id: 1,
      },
    })
    .then((agencies) => {
      console.log(agencies);
      res.json({ success: "true", agencies });
    })
    .catch((err) => {
      res.status(500).json({ success: false, err });
    });
});

router.get("/:agencyName/:id", (req, res) => {
  const { agencyName, id } = req.params;
  models.model.brands
    .findAll()
    .then((brands) => {
      res.json({ sucess: true, brands });
    })
    .catch((err) => {
      res.status(500).json({ success: false, err });
    });
});

router.get("/:agency/:id/listing/:brandName", (req, res) => {
  const { id, brandName } = req.params;
  console.log(req);
  models.model.projects
    .findAll()
    .then((projects) => {
      res.json({ success: true, projects });
    })
    .catch((err) => {
      res.status(500).json({ success: false, err });
    });
});

router.get("/agency/:id/listing/:brandname/:projectname", (req, res) => {
  const { id, brandname, projectname } = req.params;
  models.model.creatives
    .findAll()
    .then((creatives) => {
      res.status(200).json({ success: true, creatives });
    })
    .catch((err) => {
      res.json(500).json({ success: true, err });
    });
});

// router.get("/dashboard", getBrand);
// router.get("/dashboardlisting", getProject);
// router.get("/assets", getCreative);

export default router;
