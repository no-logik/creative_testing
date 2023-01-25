import { sequelize } from "../index.js";

import { DataTypes } from "sequelize";

import CreativeForm from "../models/creativeForm.model.js";
import Creative from "../models/creative.model.js";
import Projects from "../models/projects.model.js";
import Brands from "../models/brands.model.js";
import Agencies from "../models/agencies.model.js";

import { fetchAgencies } from "./agencies.controller.js";

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection with the database is successful!");
//   })
//   .catch((err) => {
//     console.log("Unable to connect to database", err);
//   });

// const creativeForm = CreativeForm(sequelize, DataTypes);
// const creactives = Creative(sequelize, DataTypes);
// const projects = Projects(sequelize, DataTypes);
// const brands = Brands(sequelize, DataTypes);
// const agencies = Agencies(sequelize, DataTypes);

sequelize
  .sync()
  .then(() => {
    console.log("Tables created successfully");
    fetchAgencies(agencies);
  })
  .catch((err) => {
    console.log("Unable to create table", err);
  });
