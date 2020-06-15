const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  director_id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, "`{PATH}` alanı zorunludur."],
    maxlength:15,
    minlength:1
    
  },
  category: {
      type:String,
      maxlength:15,
      minlength:3
    },
  country: {
      type:String,
      maxlength:25,
      minlength:1
    },
  year: {
      type:Number,
      max:2020,
      min:1900
    },
  imdb_score: {
      type:Number,
        max:10,
        min:0
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("movie", MovieSchema);
