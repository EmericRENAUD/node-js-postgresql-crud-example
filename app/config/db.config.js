module.exports = {
  HOST: "terraform-20240617083249544800000002.cborlircdo7c.eu-west-1.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "nodeAppTutorial",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
