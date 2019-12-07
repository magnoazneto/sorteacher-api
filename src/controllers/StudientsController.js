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

  async showList(req, res){   
    const studients = await Studients.find();
    if (studients.length === 0) return res.status(206).send("Alunos não cadastrados!"); 
    var studientsList = [];
    for(let item of studients) {
      studientsList.push(item.name);
    }
    return res.json({studientsList});
  },
  
  async randomStudient(req, res){
    const studients = await Studients.find();
    if (studients.length === 0) return res.status(206).send("Alunos não cadastrados!");
    let randomIndex = Math.floor(Math.random() * ((studients.length-1) + 1));    
    return res.json(studients[randomIndex]);
  },

  async store(req, res){
    const {studientsList} = req.body; //Verificar    

    if (studientsList){
      for (const studient of studientsList) {
        await Studients.create({name:studient});
      }
      return res.json(JSON.stringify(studientsList));
    }    
    const studients = await Studients.create(req.body);    
    return res.json(studients);
  },

  async update(req, res){    
    const studients = await Studients.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.json(studients);
  },

  async destroy(req, res){
    await Studients.findByIdAndRemove(req.params.id);
    return res.send();
  },
  
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

