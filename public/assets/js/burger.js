$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newdevoured = $(this).data("newdevoured");
  
      var newdevouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          console.log("changed devoured to", newdevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#enterBurger").val().trim(),
      };

      console.log(newBurger)
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  