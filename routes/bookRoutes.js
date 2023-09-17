const express = require("express");
const {
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookControllers");
const validateToken = require("../middleware/validateToken");

const router = express.Router();

router.use(validateToken);
router.route("/").get(getBook);
router.route("/").post(createBook);
router.route("/:id").put(updateBook);
router.route("/:id").delete(deleteBook);

module.exports = router;
