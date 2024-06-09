const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("backend", "root", "Node@1234567", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;