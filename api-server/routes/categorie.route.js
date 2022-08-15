
    const Categories = require("../controllers/categorie.controller");
    const express = require('express');
    const router = express.Router()

    // Create a new Categorie
    router.post("/", Categories.create);
  
    // Retrieve all Categories
    router.get("/", Categories.findAll);
  
    // Retrieve a single Categorie with id
    router.get("/:id", Categories.findOne);
  
    // Update a Categorie with id
    router.put("/:id", Categories.update);
  
    // Delete a Categorie with id
    router.delete("/:id", Categories.delete);
  
    // Delte all Categories
    router.delete("/", Categories.deleteAll);
  
   
module.exports = router;