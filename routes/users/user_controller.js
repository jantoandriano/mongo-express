const User = require("../../models/user/user__models");

module.exports = {
  getAllUsers: (req, res, next) => {
    User.find().then(data => res.send(data));
    console.log();
  },

  createUser: (req, res, next) => {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email
    });
    user
      .save()
      .then(data => res.send(data))
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Note."
        });
      });
  },

  getSingleUser: (req, res, next) => {
    User.findById(req.params.userID)
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

  updateUser: (req, res, next) => {
    // Find note and update it with the request body
    User.findByIdAndUpdate(
      req.params.userID,
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
            message: "Note not found with id " + req.params.userID
          });
        }
        return res.status(500).send({
          message: "Error updating note with id " + req.params.userID
        });
      });
    },

    deleteUser : (req, res, next) => {
        User.findByIdAndRemove(req.params.userID, (error, data) => {
            if (error) {
                console.log(errro);
            }
            else {
                res.status(200)
                res.send(data)
            }
        })
    }
};
