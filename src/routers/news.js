const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewController");
// newsController.index
router.use("/s", newsController.search);
router.use("/", newsController.index);
module.exports = router;