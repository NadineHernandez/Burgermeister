var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(tableInput, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (" + tableInput + ")";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(affectedId, cb) {
        var queryString = "UPDATE burgers SET devoured = 'true' WHERE id = " + affectedId;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    
  };
  
  module.exports = orm;
  