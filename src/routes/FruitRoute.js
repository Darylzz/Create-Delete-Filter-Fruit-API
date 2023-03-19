const express = require("express");
const upload = require("../middlewares/upload");
const router = express.Router();
const FruitController = require("../controller/FruitController");

router.get("/get", FruitController.getAllFruit);
router.post("/add", upload.single("image"), FruitController.createFruitList);
router.get("/name", FruitController.getFruitListByName);

module.exports = router;
