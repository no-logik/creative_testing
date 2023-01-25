import { Sequelize, DataTypes } from "sequelize";

import agenciesModel from "./agencies.model.js";
import brandsModel from "./brands.model.js";
import creativeFormsModel from "./creativeForm.model.js";
import creativesModel from "./creative.model.js";
import projectsModel from "./projects.model.js";

const sequelize = new Sequelize("creative_testing_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const agencies = agenciesModel(sequelize, DataTypes);
const brands = brandsModel(sequelize, DataTypes);
const creativeForms = creativeFormsModel(sequelize, DataTypes);
const creatives = creativesModel(sequelize, DataTypes);
const projects = projectsModel(sequelize, DataTypes);

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  model: {
    agencies,
    brands,
    creatives,
    creativeForms,
    projects,
  },
};

export default db;
