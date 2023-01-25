export const fetchAgencies = (agencies) => {
  const fetchAll = agencies
    .findAll()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Failed to retrieve data", err);
    });

  return fetchAll;
};

// import { Sequelize, DataTypes } from "sequelize";

// const sequelize = new Sequelize("creative_testing_db", "root", "password", {
//   host: "localhost",
//   dialect: "mysql",
// });

// sequelize
//   .authenticate()
//   .then(console.log("Connection with the database is successful!"))
//   .catch((err) => {
//     console.log("Unable to connect to database", err);
//   });

// const Agencies = sequelize.define("agencies", {
//   agency_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   date_created: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   agency_img: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Agencies table created successfully");

//     // Agencies.create({
//     //   agency_name: "Agency 1",
//     //   date_created: "29-01-2023",
//     //   agency_img: "lol",
//     // });

//     Agencies.findAll()
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log("Failed to retreive data", err);
//       });
//   })
//   .catch((err) => {
//     console.log("Unable to create table", err);
//   });
