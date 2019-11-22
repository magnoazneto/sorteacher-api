const express = require('express');
const routes = express.Router();

const TaskController = require('./controllers/TaskController');
const StudientsController = require('./controllers/StudientsController');

// tasks routes
routes.get("/tasks", TaskController.index);
routes.get("/tasks/:id", TaskController.show);
routes.post("/tasks", TaskController.store);
routes.put("/tasks/:id", TaskController.update);
routes.delete("/tasks/:id", TaskController.destroy);

// studients routes
routes.get("/studients", StudientsController.index);
routes.post("/studients", StudientsController.store);
routes.put("/studients", StudientsController.update);
routes.delete("/studients", StudientsController.destroy);


module.exports = routes;
