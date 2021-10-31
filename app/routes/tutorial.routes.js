module.exports = app => {
    const cultiva = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", cultiva.create);
  
    // Retrieve all Tutorials
    router.get("/", cultiva.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", cultiva.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", cultiva.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", cultiva.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", cultiva.delete);
  
    // Create a new Tutorial
    router.delete("/", cultiva.deleteAll);
  
    app.use('/api/cutiva', router);
  };