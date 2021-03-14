const models = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let developeruser = await models.developeruser.findOne({ where: { email: email } });
    if (!developeruser) {
      return res.status(400).json({ message: "E-mail ou mot de passe incorrect" });
    }
    let isMatch = await bcrypt.compare(password, developeruser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    let itemUser = {
      firstName: developeruser.firstName,
      lastName: developeruser.lastName,
      username: developeruser.username,
      slugin: developeruser.slugin,
      sex: developeruser.sex,
      email: developeruser.email,
      avatar: developeruser.avatar,
      userId: developeruser.id,
    };

    const token = jwt.sign(itemUser, process.env.JWT_KEY, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(200).json({
      //message: "Authentification successfully",
      firstName: developeruser.firstName,
      lastName: developeruser.lastName,
      username: developeruser.username,
      slugin: developeruser.slugin,
      sex: developeruser.sex,
      email: developeruser.email,
      avatar: developeruser.avatar,
      userId: developeruser.id,
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
