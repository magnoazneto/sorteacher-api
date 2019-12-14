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
    type: Object,
  },
  relatedEvent: {
    type: Object,
  }
});

GroupSchema.plugin(mongoosePaginate);

mongoose.model('Group', GroupSchema);