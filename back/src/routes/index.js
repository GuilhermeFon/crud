const router = require("express").Router();

const loginController = require("../controllers/LoginController");
const ProductController = require("../controllers/ProductController");

router.post("/", loginController.login);
router.post("/products", ProductController.index);
router.post("/products", ProductController.create);
router.patch("/product/:id", ProductController.update);

module.exports = router;
