module.exports = app => {
    //TODO: import controller
    const Users = require("../controller/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", Users.create);
  
    // Retrieve all Users
    router.get("/", Users.findAll);
   
    // Reteve a single User with id
    router.get("/:id", Users.findOne);
  
    // Update a User with id
    router.put("/:id", Users.update);
  
    // Delete a User with id
    router.delete("/:id", Users.delete);
  
    // Create a new User
    router.delete("/", Users.deleteAll);
  
    app.use("/kir9edu-api/Users", router);
  };