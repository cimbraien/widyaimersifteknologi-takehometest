const Sequelize = require("sequelize");

exports.db = new Sequelize(
  "wit-crud",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
  }
);

exports.produk = require("./produk");
