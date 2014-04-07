/* LoginWidget class file */

function LoginWidget() {
   /* Properties - PRIVATE */
   this._isConnected = false;
   this._user = '';
}


/* Properties - prototype */
LoginWidget.prototype._isConnected = false;
LoginWidget.prototype._user = '';

/* Methods - prototype*/
LoginWidget.prototype.display = function() {
   
   if(this._isConnected == true) {
      $("#LoginWidgetUnauthentifiedUser").hide();
      $("#LoginWidgetAuthentifiedUser").show();
   }
   else {
      $("#LoginWidgetUnauthentifiedUser").show();
      $("#LoginWidgetAuthentifiedUser").hide();
   }
}

LoginWidget.prototype.connect = function(username, hash) {
   debug(1, "Connection...");
}

LoginWidget.prototype.disconnect = function() {
   debug(2, "Disconnection...");
}

LoginWidget.prototype.hashFunction = function( x ) {
   return x;
}

LoginWidget.prototype.setCallbacks = function() {
   var self = this;
   
   $("#ConnectButton").click( function() {
      var userId = $("#LoginWidgetUserId").val();
      var password = $("#LoginWidgetPassword").val();
      
      var hash = self.hashFunction( password );
      
      self.connect(userId, hash);
   });
   
   $("#DisconnectButton").click( function() {
      self.disconnect();
   });
}


/* Getters & setters */