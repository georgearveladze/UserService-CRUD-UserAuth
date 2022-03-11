const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    isAdmin: { type: 'boolean', default: false },
    salt: { type: 'string' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
