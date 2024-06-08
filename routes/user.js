const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/add-user", userController.createUser);
router.get("/", userController.getAllUser);
router.delete("/:userId", userController.deleteUserById);

module.exports = router;
