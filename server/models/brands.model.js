export default (sequelize, DataTypes) => {
  return sequelize.define(
    "brands",
    {
      brand_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      live_projects: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      draft_projects: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      completed_projects: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      agency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "brands",
      freezeTableName: true,
    }
  );
};
