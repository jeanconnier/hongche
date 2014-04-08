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
           //debug(2,"fronf");
       },
       error: function () {
           debug(2,'error');
       }
   });
}

RegisterView.prototype.setCallbacks = function() {
   self = this;
   $("#RegistrationButton").click( function() {
      var userId = $("#RegisterViewIdentifier").val();
      var username = $("#RegisterViewName").val();
      var password = $("#RegisterViewPassword").val();
      
      var password = passwordFunction( password );
      
      self.registerUser(userId, username, password);
      //self.display();
    });
    
    debug(2, "RegisterView callbacks set");
}

/* Getters & setters */