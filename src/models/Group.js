const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const GroupSchema = new mongoose.Schema({
  components: {
    type: [Object],   
  },
  groupName: {
    type: String,
    required: true,
  },
  relatedTask: {
    type: String,
  },
  relatedTaskID: {
    type: String,
  },
});

GroupSchema.plugin(mongoosePaginate);

mongoose.model('Group', GroupSchema);