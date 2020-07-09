const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutschema = new Schema({
    name: {
      type: String,
      unique: true,
      require:true
    },
    

  });
  
  const Workout = mongoose.model("Workout", workoutschema);
  
  module.exports = Workout;