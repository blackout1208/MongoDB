const Mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  postCount: Number,
  posts: [PostSchema]
});

const User = Mongoose.model('user', UserSchema);

module.exports = User;
