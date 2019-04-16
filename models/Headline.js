var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var HeadlineSchema = new Schema({
  // `headline` is required and of type String
  headline: {
    type: String,
    required: true,
    unique: { index: {unique: true}},
  },
  // `link` is required and of type String
  summary: {
    type: String,
    required: true
  },
  // `url` is an object
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Headline = mongoose.model("Headline", HeadlineSchema);

// Export the Headline model
module.exports = Headline;
