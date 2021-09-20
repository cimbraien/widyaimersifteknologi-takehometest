const { DataTypes } = require("sequelize");
const { db } = require("./index");

const Produk = db.define(
  "produk",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: DataTypes.INTEGER,
  },
  {
    tableName: "produk",
    timestamps: false,
  }
);

module.exports = Produk;
