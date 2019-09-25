const mongoose = require('mongoose');

const { Schema } = mongoose;
const users = new Schema({

  name: {
    first: {
      type: String,
      required: true,
      unique: false,
      maxlength: 30,
    },
    last: {
      type: String,
      required: true,
      unique: false,
      maxlength: 30,
    },
    user: {
      type: String,
      required: true,
      unique: true,
      maxlength: 30,
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },

  gender: {
    type: String,
    required: true,
    unique: false,
    maxlength: 6,
  },

  password: {
    type: String,
    required: true,
    unique: false,
    maxlength: 70,
  },

  reg_date: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  level: {
    type: String,
    required: true,
    default: 'member',
  },

});

module.exports = mongoose.model('Users', users);
