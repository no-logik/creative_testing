import express from "express";
import cors from "cors";

import models from "./models/index.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(adminRoutes);
app.use(userRoutes);

models.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection with the database is successful!");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  });

//uncomment the below line and run nodemon index.js to create the tables in the database

// models.sequelize.sync(()=>{
//   console.log("Tables synced successfully")
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
