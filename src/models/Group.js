const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const GroupSchema = new mongoose.Schema({
  components: {
    type: [String],    
  },
});

GroupSchema.plugin(mongoosePaginate);

mongoose.model('Group', GroupSchema);