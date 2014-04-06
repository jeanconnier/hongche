/* RegisterView class file */

function RegisterView() {
   /* Properties - PRIVATE */
   
}


/* Properties - prototype */


/* Methods - prototype*/
RegisterView.prototype.display = function() {
   
}

RegisterView.prototype.hashPassword = function() {
   
}

RegisterView.prototype.registerUser = function() {
   debug(1, "User registered");
}

RegisterView.prototype.setCallbacks = function() {
   self = this;
   $("#RegistrationButton").click( function() {
      self.registerUser();
    });
}

/* Getters & setters */