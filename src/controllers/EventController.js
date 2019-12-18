const mongoose = require('mongoose');

const Event = mongoose.model('Event');
const Students = mongoose.model('Studients');
const Group = mongoose.model('Group');

module.exports = {
  async index(req, res){
    const events = await Event.find();
    if (events.length === 0) return res.status(206).send("Eventos não cadastrados!");       
    return res.json(events);
  },
  
  async getGroups(req, res){
    console.log("entrei");
    const groupsAmount = parseInt(req.params.amount); // group's amount
    const students = await Students.find();
    const studentsPerGroup = Math.trunc(students.length / groupsAmount);
    var overFlowStudents = students.length % groupsAmount;
    var groupNameCounter = 1;
    var groups = [];
    for (let i=0; i<groupsAmount; i++){
      var group = {
        groupName: "Grupo " + String(groupNameCounter),
        components: [],
      };
      for (let i=0; i<studentsPerGroup; i++){  
        let randomIndex = Math.floor(Math.random() * ((students.length-1) + 1));
        group.components.push(students.splice(randomIndex, 1)[0]);
      }
      if(overFlowStudents > 0){
        let randomIndex = Math.floor(Math.random() * ((students.length-1) + 1));
        group.components.push(students.splice(randomIndex, 1)[0]);
        overFlowStudents--; 
      }
      const groupResponse = await Group.create(group);
      groups.push(groupResponse);
      groupNameCounter++;
    }
    console.log(groups);
    return res.json(groups);
  },

  async show(req, res){
    const event = await Event.findById(req.params.id);

    return res.json(event);
  },

  async store(req, res){
    const event = await Event.create(req.body);

    return res.json(event);
  },

  async update(req, res){
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(event);
  },

  async destroy(req, res){
    await Event.findByIdAndRemove(req.params.id);

    return res.send();
  }

};