module.exports = app => {
    const cultiva = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new cultiva
    router.post("/", cultiva.create);
  
    // Retrieve all cultiva
    router.get("/", cultiva.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", cultiva.findAllPublished);
  
    // Retrieve a single cultiva with id
    router.get("/:id", cultiva.findOne);
  
    // Update a cultiva with id
    router.put("/:id", cultiva.update);
  
    // Delete a cultiva with id
    router.delete("/:id", cultiva.delete);
  
    // Create a new cultiva
    router.delete("/", cultiva.deleteAll);
  
    app.use('/api/cutiva', router);
  };