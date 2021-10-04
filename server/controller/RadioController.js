const { Radio } = require("../models/RadioModel");

//get all radio-stations user details
exports.getRadioStations = (req, res) => {
  Radio.find({})
    .lean()
    .exec(function (err, radioStations) {
      if (err) {
        return res.status(422).json({ errors: err });
      } else {
        // console.log(radioStations);
        return res.status(200).json({
          success: true,
          message: "Successfully radio stations loaded",
          radioStations,
        });
      }
    });
};
