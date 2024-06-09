const User = require("../models/user");

exports.createUser = (req, res, next) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;

  console.log(userName,email,phoneNumber)

  User.create({
    userName,
    email,
    phoneNumber,
  })
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};

exports.getAllUser = (req, res, next) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
};

exports.deleteUserById = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      user.destroy();
      res.status(200).send("User deleted successfully");
    })
    .catch((err) => console.log(err));
};
