const express = require("express");
const router = express.Router();
const { requireSignIn } = require("../middleware/require-signin");

const {
  addToFavourites,
  removeFromFavourites,
} = require("../controllers/favourites.controller");

router.post("/:postId", requireSignIn, addToFavourites);
router.delete("/:postId", requireSignIn, removeFromFavourites);

module.exports = router;
