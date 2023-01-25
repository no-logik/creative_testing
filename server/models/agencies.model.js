export default (sequelize, DataTypes) => {
  return sequelize.define(
    "agencies",
    {
      agency_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agency_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brand_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_projects: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      completed_projects: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
      total_spends: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "agencies",
      freezeTableName: true,
    }
  );
};
