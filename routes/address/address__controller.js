const Address = require("../../models/adress/adress__models");
const User = require("../../models/user/user__models");

module.exports = {
  createAddress: async (req, res) => {
      // create the address first to generate its `_id`
    const address = await Address.create({
        address: req.body.address
    });

    // then pas the `address._id` to user
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { addresses: address._id } },
      { new: true }
    );
    
    // send adress and user data to client with messages success to create
    res.status(200).send({
        message: "create new address success",
        address,
        user
    })
  }
};
