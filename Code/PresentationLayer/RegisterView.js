/* RegisterView class file */

function RegisterView() {
   /* Properties - PRIVATE */
   debug(1, "RegisterView instanciated");
}


/* Properties - prototype */


/* Methods - prototype*/
RegisterView.prototype.display = function() {
   
}

RegisterView.prototype.registerUser = function(userId, username, password) {
   debug(2,"Trying to register...");
   $.ajax({
       type: 'POST',
       url: businessLogicLayerUrl,
       data: {
         class:"User",
         method:"register",
         userId:userId,
         username:username,
         password:password
       },
       success: function ( data ) {
            debug(2,'success!' + data);
            var str = null;
            if( data === "true") {
               str = "You are registered as a new user!";
            }
            else {
               if(userId === '' || username === '' || password === '') {
                  str = "Please fill all fields.";
               }
               else {
                  str = "This userId is already used";
               }
            }
            displayError(str);
       },
       error: function () {
           debug(2,'error');
       }
   });
}

RegisterView.prototype.setCallbacks = function() {
   var self = this;
   $("#RegistrationButton").click( function() {
      var userId = $("#RegisterViewIdentifier").val();
      var username = $("#RegisterViewName").val();
      var password = $("#RegisterViewPassword").val();
      
      self.registerUser(userId, username, password);
    });
    
    debug(2, "RegisterView callbacks set");
}

/* Getters & setters */