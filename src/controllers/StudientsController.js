const mongoose = require('mongoose');

const Studients = mongoose.model('Studients');

module.exports = {
  async index(req, res){
    const studients = await Studients.find();

    return res.json(studients);
  },

  async store(req, res){
    const studients = await Studients.create(req.body);

    return res.json(studients);
  },

  async update(req, res){
    //const id = await Studients.find().id;
    //const studients = await Studients.findByIdAndUpdate(id, req.body, { new: true });
    await Studients.remove();
    const studients = await Studients.create(req.body);

    return res.json(studients);
  }
};