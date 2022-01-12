const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
});

// export to the data base model
module.exports = User = model("User", UserSchema);
