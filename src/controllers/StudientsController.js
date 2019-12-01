const mongoose = require('mongoose');

const Studients = mongoose.model('Studients');

module.exports = {
  async index(req, res){
    const studients = await Studients.find();
    if (studients.length === 0) return res.status(206).send("Alunos não cadastrados!");
    return res.json(studients);
  },

  async show(req, res){
    const studient = await Studients.findById(req.params.id);
    if (!studient) return res.status(404).send("Não encontrado.")
    return res.json(studient);
  },

  async store(req, res){
    const studients = await Studients.create(req.body);    
    return res.json(studients);
  },

  async update(req, res){
    await Studients.remove();
    const studients = await Studients.create(req.body);
    return res.json(studients);
  },

  async destroy(req, res){
    await Studients.findByIdAndRemove(req.params.id);
    return res.send();
  }
};

