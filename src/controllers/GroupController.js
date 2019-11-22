const mongoose = require('mongoose');

const Group = mongoose.model('Group');

module.exports = {
  async index(req, res){
    const { page = 1 } = req.query;
    const groups = await Group.paginate({}, {page, limit: 5});


    return res.json(groups);
  },

  async show(req, res){
    const group = await Group.findById(req.params.id);

    return res.json(group);
  },

  async store(req, res){
    const group = await Group.create(req.body);

    return res.json(group);
  },

  async update(req, res){
    const group = await Group.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(group);
  },

  async destroy(req, res){
    await Group.findByIdAndRemove(req.params.id);

    return res.send();
  }

};