const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController.js");

const {
  addFriend,
  removeFriend,
} = require("../../controllers/friendController.js");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
