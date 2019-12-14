const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  presentationTime: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

TaskSchema.plugin(mongoosePaginate);

mongoose.model('Task', TaskSchema);