/* RegisterView class file */

function RegisterView() {
   /* Properties - PRIVATE */
   debug(1, "RegisterView instanciated");
}


/* Properties - prototype */


/* Methods - prototype*/
RegisterView.prototype.display = function() {
   
}

RegisterView.prototype.registerUser = function(userId, username, hash) {
   alert("Trying to register...");
   $.ajax({
       type: 'POST',
       url: businessLogicLayerUrl,
       data: {
         class:"User",
         method:"register",
         userId:userId,
         username:username,
         hash:hash
       },
       success: function ( data ) {
           alert('success!' + data);
       },
       error: function () {
           alert('error');
       }
   });
}

RegisterView.prototype.setCallbacks = function() {
   self = this;
   $("#RegistrationButton").click( function() {
      var userId = $("#RegisterViewIdentifier").val();
      var username = $("#RegisterViewName").val();
      var password = $("#RegisterViewPassword").val();
      
      var hash = hashFunction( password );
      
      self.registerUser(userId, username, hash);
      //self.display();
    });
    
    debug(2, "RegisterView callbacks set");
}

/* Getters & setters */