const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  beginDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  minutesDay: {
    type: Number,
    required: true,
  },
  groups: {
    type: [Object],
  }
                                      
});

mongoose.model('Event', EventSchema);