const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  studients: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Task', TaskSchema);