const express = require("express");
const {
  getJsonData,
  createJsonData,
  updateJsonData,
  deleteJsonData,
} = require("../controllers/jsonController");

const router = express.Router();

router.get("/", getJsonData);
router.post("/", createJsonData);
router.put("/:id", updateJsonData);
router.delete("/:id", deleteJsonData);

module.exports = router;
