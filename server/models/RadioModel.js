require("dotenv").config();
const mongoose = require("mongoose");
const radioSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name field is required!"],
      trim: true,
      unique: 1,
    },
    url: {
      type: String,
      required: [true, "The url field is required!"],
      minlength: 6,
    },
    country: {
      type: String,
      required: [true, "The country name field is required!"],
      trim: true,
      maxlength: 2,
    },
  },
  { collection: "radioStations" }
);

radioSchema.statics.findAll = function (name, callBack) {
  var radio = this;
  radio.findOne({ name: name }, function (err, radio) {
    if (err) return callBack(err);
    callBack(null, radio);
  });
};

const Radio = mongoose.model("Radio", radioSchema);
module.exports = { Radio };
