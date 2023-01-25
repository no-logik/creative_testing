export default (sequelize, DataTypes) => {
  return sequelize.define(
    "projects",
    {
      project_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["live", "draft", "completed"],
      },
      project_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultVaue: 0,
      },
      start_date_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      end_date_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      agency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "projects",
      freezeTableName: true,
    }
  );
};
