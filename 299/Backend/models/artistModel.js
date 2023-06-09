const mongoose = require('mongoose')

const Schema = mongoose.Schema

const artistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  artistImg: {
    type: String,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Artist', artistSchema)