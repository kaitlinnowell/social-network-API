const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
        type: String,
        required: true,
        max_length: 280,
        min_length: 1,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss'),
      },
      username : {
        type: String,
        required: true,
      },
      reactions : [reactionSchema],
    },
    {
      toJSON: {
        getters: true,
        virtuals: true,
      },
      id: false
    }
  );

  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;