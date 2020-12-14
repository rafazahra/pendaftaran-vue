module.exports = app => {
    const pendaftaran = require("../controllers/pendaftaran.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", pendaftaran.create);
  
    // Retrieve all Tutorials
    router.get("/", pendaftaran.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", pendaftaran.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", pendaftaran.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", pendaftaran.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", pendaftaran.delete);
  
    // Delete all Tutorials
    router.delete("/", pendaftaran.deleteAll);
  
    app.use('/api/pendaftaran', router);
  };