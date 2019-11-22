const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

const StudientsSchema = new mongoose.Schema({
  studientsList: {
    type: [String],
  },
});

// StudientsSchema.plugin(mongoosePaginate);

mongoose.model('Studients', StudientsSchema);