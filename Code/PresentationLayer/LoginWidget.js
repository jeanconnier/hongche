/* LoginWidget class file */

function LoginWidget() {
   /* Properties - PRIVATE */
   this._isConnected = false;
   this._user = null;
   
   debug(1, "LoginWidget instanciated");
}


/* Properties - prototype */
LoginWidget.prototype._isConnected = false;
LoginWidget.prototype._user = null;

/* Methods - prototype*/
LoginWidget.prototype.display = function() {
   
   if(this._isConnected) {
      $("#LoginWidgetUnauthentifiedUser").hide();
      $("#LoginWidgetAuthentifiedUser").show();
      $("#LoginWidgetUsername").html( this._user.getName() );
   }
   else {
      $("#LoginWidgetUnauthentifiedUser").show();
      $("#LoginWidgetAuthentifiedUser").hide();
   }
}

LoginWidget.prototype.connect = function(userId, password) {
   
   var self = this;
   
   $.ajax({
       type: 'POST',
       url: businessLogicLayerUrl,
       data: {
         class:"User",
         method:"connect",
         userId:userId,
         password:password
       },
       success: function ( data ) {
         self._user = new User();
         
         if( data === "true" )
         {
            self._user.setName( userId );
            self._user.setId( userId );
            self._isConnected = true;
            displayError("You are connected as "+self._user._id+"!");
            self.display();
         }
         else
         {
            displayError("Wrong login and/or password");
         }
         debug(2, 'success!' + data);
       },
       error: function () {
           debug(2,'error');
       }
   });
               
   debug(1, "Connection...");
}

LoginWidget.prototype.disconnect = function( userId ) {
   this._isConnected = false;
   self = this;
   
   $.ajax({
       type: 'POST',
       url: businessLogicLayerUrl,
       data: {
         class:"User",
         method:"disconnect",
         userId:userId
       },
       success: function ( data ) {
         displayError("You've been disconnected!");
         debug(2, 'success!' + data);
       },
       error: function () {
         debug(2,'error');
       }
   });
   
   this._user = null;
   
   debug(2, "Disconnection...");
}

LoginWidget.prototype.setCallbacks = function() {
   var self = this;
   
   $("#ConnectButton").click( function() {
      var userId = $("#LoginWidgetUserId").val();
      var password = $("#LoginWidgetPassword").val();
      
      self.connect(userId, password);
      
   });
   
   $("#DisconnectButton").click( function() {
      self.disconnect( self._user.getId() );
   });
   
   $(".Button").click( function() {
      loginWidget.display();
   });
   
   debug(2, "LoginWidget callbacks set");
}


/*$.ajax({ type:"POST",
              url:"landing.php",
              data:{
                           
                       },
              success:function() {
                                                debug(2,"success");
                                             },
              error:function() {
                                            debug(2,"error");
                                        }
            });*/
            
/* Getters & setters */
LoginWidget.prototype.getUser = function() {
   return this._user;
}