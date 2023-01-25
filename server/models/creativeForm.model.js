export default (sequelize, DataTypes) => {
  return sequelize.define(
    "creativeforms",
    {
      primary_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      target_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creative_media: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      interest: {
        type: DataTypes.TEXT,
      },
      language: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female", "both"],
      },
      min_age: {
        type: DataTypes.INTEGER,
        defaultValue: 10,
      },
      max_age: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
      },
      budgetSelections: {
        type: DataTypes.ENUM,
        values: ["lifetime Budget", "Daily Budget"],
      },
      budget: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      publish_date: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date().toJSON().slice(0, 10),
      },
      publish_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      budget_selection: {
        type: DataTypes.ENUM,
        values: ["Lifetime Budget", "Daily Budget"],
      },
    },
    {
      tableName: "creativeForms",
      freezeTableName: true,
    }
  );
};
