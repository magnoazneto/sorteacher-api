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

TaskSchema.plugin(mongoosePaginate);

mongoose.model('Task', TaskSchema);