var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgObject = {
      burgers: data
    };
    console.log(burgObject);
    res.render("index", burgObject);
  });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function(result) {
      res.json({ id: result.id });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var affectedId = "id = " + req.params.id;
  
    console.log("affectedId", affectedId);
  
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      affectedId,
      function(result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
  module.exports = router;
  