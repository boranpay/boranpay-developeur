const models = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await models.user.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({ message: "E-mail ou mot de passe incorrect" });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    let itemUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      slugin: user.slugin,
      sex: user.sex,
      email: user.email,
      status_profile: user.status_profile,
      avatar: user.avatar,
      userId: user.id,
    };

    const token = jwt.sign(itemUser, process.env.JWT_KEY, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(200).json({
      //message: "Authentification successfully",
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      slugin: user.slugin,
      sex: user.sex,
      email: user.email,
      status_profile: user.status_profile,
      avatar: user.avatar,
      userId: user.id,
      accessToken: token
    });
  } catch (error) {
    res.status(500).json({
      message: "Identifiant incorrect",
      error: error,
    });
  }
};

module.exports = {
  login: login,
};
