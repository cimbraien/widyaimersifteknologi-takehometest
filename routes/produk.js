const express = require("express");
const {
  getProduk,
  createProduk,
  getProdukById,
  updateProduk,
  deleteProduk,
} = require("../controllers/produk");
const router = express.Router();

router.get("/", getProduk);
router.get("/:id", getProdukById);
router.post("/", createProduk);
router.put("/:id", updateProduk);
router.delete("/:id", deleteProduk);

module.exports = router;
