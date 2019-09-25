const User = require("../../models/user/user__models");

module.exports = {
  // get all users
  getAllUsers: (req, res, next) => {
    User.find().populate("addresses", "address")
    .then(result => res.send(result))
  },
  
  // create user
  createUser: (req, res, next) => {
    const user = new User(req.body);
    user
      .save()
      .then(data => res.send(data))
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the user."
        });
      });
  },

 
 // get single user
  getSingleUser: (req, res, next) => {
    User.findById({ _id: req.params.userID })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User not found with id " + req.params.userID
          });
        }
        res.send(user);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "User not found with id " + req.params.userID
          });
        }
        return res.status(500).send({
          message: "Error retrieving user with id " + req.params.userID
        });
      });
  },

  // update user by id
  updateUser: (req, res, next) => {
    User.findByIdAndUpdate(
      { _id: req.params.userID },
      {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email
      },
      { new: true }
    )
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User not found with id " + req.params.userID
          });
        }
        res.send(user);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "user not found with id " + req.params.userID
          });
        }
        return res.status(500).send({
          message: "Error updating user with id " + req.params.userID
        });
      });
  },

  // delete user by given id
  deleteUser: (req, res, next) => {
    User.findByIdAndRemove({ _id: req.params.userID }, (error, data) => {
      if (error) {
        res.status(400).send({
          message: "Cannot delete user",
          error
        });
      } else {
        res.status(200).send({
          message: "User successfully deleted",
          data
        });
      }
    });
  }
};

// exec((err, address) => {
//   if (err) {
//       console.log(err);
//   } else{
//       console.log(`populate user with ${address}`);
//       res.send({
//         message: "Successfully popolate user with address",
//         address
//       })
//   }
// })