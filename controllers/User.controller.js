const Modeluser = require("../models/user.model");

exports.CreateUser = async (req, res) => {
  try {
    const userFF = req.body;
    const exist = await Modeluser.findOne({ login: userFF.login });
    if (exist) {
      return res.status(400).json({ msg: "Login name exist , try other one" });
    }

    const user = await Modeluser.create({ ...req.body });
    await user.save();
    return res
      .status(200)
      .json({ msg: "user created with success", user: user });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "erreur", error: err });
  }
};

exports.LoginUser = async (req, res) => {
  try {
    const userFF = req.body;
    const user = await Modeluser.findOne({
      login: userFF.login,
      password: userFF.password,
    });

    if (user == null) {
      return res
        .status(400)
        .json({ msg: `Wrong Login or Password `, user: user });
    } else {
      return res
        .status(200)
        .json({ msg: `Wellcome again ${user.name} `, user: user });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "erreur", error: err });
  }
};

/*
exports.GetAllContacts = async (req, res) => {
  try {
    const conts = await contact.find();

    console.log(conts);
    return res.status(200).send({ data: conts });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.GetOneContact = async (req, res) => {
  try {
    let id = req.params.id;
    const cont = await contact.findById(id);
    return res.status(200).send({ data: cont });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.DeleteContact = async (req, res) => {
  try {
    let id = req.params.id;
    const cont = await contact.findById(id);

    console.log(cont);

    if (!cont) {
      return res.status(302).json({ msg: "le modele n'éxiste pas" });
    }

    await cont.remove();
    const conts = await contact.find();

    return res.status(200).send({
      success: true,
      msg: "contact à été suprimé avec succès",
      data: conts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};
*/
