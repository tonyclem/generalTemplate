const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// description  fetch all products
// route        GET ~/products
// access       public
router.get("/", getProducts);

// description  fetch single product
// route        GET ~/products/:id
// access       public
router.get("/:id", getProduct);

// description  add single product
// route        POST ~/products
// access       private
router.post("/", protect, addProduct);

// description  update single product
// route        PUT ~/products
// access       private
router.put("/:id", protect, updateProduct);

// description  delete single product
// route        DELETE ~/products/:id
// access       private
router.delete("/:id", protect, deleteProduct);

module.exports = router;
