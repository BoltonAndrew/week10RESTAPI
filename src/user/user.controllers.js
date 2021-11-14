const User = require("./user.model");

exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const token = await newUser.generateAuthToken();
    res.status(200).send({
      message: "Successfully created user",
      user: newUser.username,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please check the logs" });
  }
};

exports.getUser = async (req, res) => {
  try {
    res.status(200).send({ user: req.user.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please check logs" });
  }
};

exports.getUserToken = async (req, res) => {
  try {
    res.status(200).send({
      message: "Successfully logged in with token",
      user: req.user.username,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please check the logs" });
  }
};
