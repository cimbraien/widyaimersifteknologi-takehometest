const { Op } = require("sequelize");
const { produk } = require("../models");

class produkController {
  async getProduk(req, res, next) {
    const data = await produk.findAll({
      where: {
        harga: {
          [Op.gt]: req.query.hargaMin || 0,
        },
      },
    });
    res.status(200).json({ data });
  }

  async getProdukById(req, res, next) {
    const data = await produk.findByPk(req.params.id);
    res.status(200).json({ data });
  }

  async createProduk(req, res, next) {
    const createdData = await produk.create({
      nama: req.body.nama,
      harga: req.body.harga,
    });
    res.status(201).json({ data: createdData });
  }

  async updateProduk(req, res, next) {
    delete req.body.id;
    const updateData = await produk.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const data = await produk.findByPk(req.params.id);
    res.status(201).json({ data });
  }

  async deleteProduk(req, res, next) {
    const deleteData = await produk.destroy({
      where: {
        id: req.params.id,
      },
    });
    const message =
      deleteData == 0
        ? `Produk dengan id = ${req.params.id} tidak ditemukan.`
        : `Produk dengan id = ${req.params.id} telah dihapus.`;

    res.status(200).json({ message });
  }
}

module.exports = new produkController();
