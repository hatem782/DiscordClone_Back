const express = require("express");
const {
  CreateUser,
  LoginUser,
  GetUserById,
} = require("../controllers/User.controller");

const router = express.Router();

router.post("/create", CreateUser);
router.post("/login", LoginUser);
router.get("/getuser", GetUserById);
/*
router.get("/getAll", protect, GetAllContacts);
router.get("/getOne/:id", protect, GetOneContact);
router.delete("/delete/:id", protect, DeleteContact);
*/

//export
module.exports = router;
