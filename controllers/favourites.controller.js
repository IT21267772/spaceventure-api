const User = require("../models/user.model");

const addToFavourites = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.currentUser.id,
    {
      $addToSet: { favourites: req.params.postId },
    },
    { new: true }
  );

  res.status(201).send(user);
};

const removeFromFavourites = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.currentUser.id,
    {
      $pull: { favourites: req.params.postId },
    },
    { new: true }
  );

  res.status(200).send(user);
};

module.exports = {
  addToFavourites,
  removeFromFavourites,
};
