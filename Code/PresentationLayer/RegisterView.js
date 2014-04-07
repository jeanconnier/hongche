/* RegisterView class file */

function RegisterView() {
   /* Properties - PRIVATE */
   debug(1, "RegisterView instanciated");
}


/* Properties - prototype */


/* Methods - prototype*/
RegisterView.prototype.display = function() {
   
}

RegisterView.prototype.registerUser = function( userId, userName, hash) {
   debug(1, "User registered");
}

RegisterView.prototype.setCallbacks = function() {
   self = this;
   $("#RegistrationButton").click( function() {
      var userId = $("#RegisterViewIdentifier").val();
      var userName = $("#RegisterViewName").val();
      var password = $("#RegisterViewPassword").val();
      
      var hash = hashFunction( password );
      
      self.registerUser( userId, userName, hash );
    });
    
    debug(2, "RegisterView callbacks set");
}

/* Getters & setters */