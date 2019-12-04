const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

const StudientsSchema = new mongoose.Schema({  
  name:{
    type: String,
    required: true
  },
  group:{
    type: String,
    default: null
  }
});

// StudientsSchema.plugin(mongoosePaginate);

mongoose.model('Studients', StudientsSchema);