/* LoginWidget class file */

function LoginWidget() {
   /* Properties - PRIVATE */
   this._isConnected = false;
   this._user = '';
   
   debug(1, "LoginWidget instanciated");
}


/* Properties - prototype */
LoginWidget.prototype._isConnected = false;
LoginWidget.prototype._user = '';

/* Methods - prototype*/
LoginWidget.prototype.display = function() {
   
   if(this._isConnected) {
      $("#LoginWidgetUnauthentifiedUser").hide();
      $("#LoginWidgetAuthentifiedUser").show();
   }
   else {
      $("#LoginWidgetUnauthentifiedUser").show();
      $("#LoginWidgetAuthentifiedUser").hide();
   }
}

LoginWidget.prototype.connect = function(username, hash) {
   this._isConnected = true;
   
   $.ajax({
       type: 'POST',
       url: '../BusinessLayer/landing.php',
       data: {
         class:"LoginWidget",
         method:"connect",
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
               
   debug(1, "Connection...");
}

LoginWidget.prototype.disconnect = function() {
   this._isConnected = false;
   debug(2, "Disconnection...");
}

LoginWidget.prototype.setCallbacks = function() {
   var self = this;
   
   $("#ConnectButton").click( function() {
      var userId = $("#LoginWidgetUserId").val();
      var password = $("#LoginWidgetPassword").val();
      
      var hash = hashFunction( password );
      
      self.connect(userId, hash);
   });
   
   $("#DisconnectButton").click( function() {
      self.disconnect();
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
                                                alert("success");
                                             },
              error:function() {
                                            alert("error");
                                        }
            });*/
            
/* Getters & setters */