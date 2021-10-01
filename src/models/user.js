const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  namo: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('user', UserSchema)

module.exports
