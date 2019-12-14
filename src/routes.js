const express = require('express');
const routes = express.Router();

const TaskController = require('./controllers/TaskController');
const StudientsController = require('./controllers/StudientsController');
const GroupController = require('./controllers/GroupController');
const EventController = require('./controllers/EventController');


// tasks routes
routes.get("/tasks", TaskController.index);
routes.get("/tasks/:id", TaskController.show);
routes.post("/tasks", TaskController.store);
routes.put("/tasks/:id", TaskController.update);
routes.delete("/tasks/:id", TaskController.destroy);

// studients routes
routes.get("/studients", StudientsController.index);
routes.get("/studients/list", StudientsController.showList);
routes.get("/studients/random", StudientsController.randomStudient);
routes.get("/studients/:id", StudientsController.show);
routes.post("/studients", StudientsController.store);
routes.put("/studients/:id", StudientsController.update);
routes.delete("/studients/:id", StudientsController.destroy);

// group routes
routes.get("/groups", GroupController.index);
routes.get("/groups/:id", GroupController.show);
routes.post("/groups", GroupController.store);
routes.put("/groups/:id", GroupController.update);
routes.delete("/groups/:id", GroupController.destroy);

//events routes
routes.get("/events", EventController.index);
routes.get("/event/:id", EventController.show);
routes.post("/event", EventController.store);
routes.put("/event/:id", EventController.update);
routes.delete("/event/:id", EventController.destroy);


module.exports = routes;
