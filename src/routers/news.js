const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewController");
// newsController.index
router.get("/s", newsController.search);
router.get("/", newsController.index);
module.exports = router;