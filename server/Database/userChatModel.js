const { Schema, model } = require('mongoose');

const textSchema = new Schema({
  composerEmail: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

const userChatSchema = new Schema({
  isGroup: {
    type: Boolean,
    default: false
  },
  composers: [String],
  texts: [textSchema]
})

module.exports = model('wassup_chats', userChatSchema);