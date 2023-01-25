export default (sequelize, DataTypes) => {
  return sequelize.define(
    "creatives",
    {
      creative_media: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      budget: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      cpm: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ctr: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      link_clicks: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      impressions: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      reach: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      creative_start_date: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date().toJSON().slice(0, 10),
      },
      creative_end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      creative_spends: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: "creatives",
      freezeTableName: true,
    }
  );
};
