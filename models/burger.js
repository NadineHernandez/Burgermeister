var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      // This is like: SELECT * FROM cats
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(tableInput, cb) {
      orm.insertOne("burgers", tableInput, function(res) {
        cb(res);
      });
    },
    updateOne: function(affectedId, cb) {
      orm.updateOne("burgers", affectedId, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  