const mongoose = require('mongoose');

const Studients = mongoose.model('Studients');

module.exports = {
  async index(req, res){
    const studients = await Studients.find();
    if (studients.length === 0) return res.status(206).send("Alunos não cadastrados!");
    return res.json(studients);
  },

  async show(req, res){
    const studient = await Studients.findById(req.params.id, (err, doc) =>{
      if (err) return res.status(404).send("Not found.");
    });
    return res.json(studient);
  },

  async store(req, res){
    const studients = await Studients.create(req.body);    
    return res.json(studients);
  },

  async storeFromList(req, res){
    for (const studient of req.body) {
      await Studients.create(studient);
    }
    return res.json(JSON.stringify(res.body));
  },

  async update(req, res){
    // await Studients.remove();
    // const studients = await Studients.create(req.body);
    const studients = await Studients.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.json(studients);
  },

  async destroy(req, res){
    await Studients.findByIdAndRemove(req.params.id);
    return res.send();
  }
};

