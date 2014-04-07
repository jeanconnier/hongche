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
      $("#LoginWidgetUsername").html( this._user.getName() );
   }
   else {
      $("#LoginWidgetUnauthentifiedUser").show();
      $("#LoginWidgetAuthentifiedUser").hide();
   }
}

LoginWidget.prototype.connect = function(userId, hash) {
   this._isConnected = true;
   self = this;
   
   $.ajax({
       type: 'POST',
       url: businessLogicLayerUrl,
       data: {
         class:"User",
         method:"connect",
         userId:userId,
         hash:hash
       },
       success: function ( data ) {
       
         self._user.setHash( hash );
         self._user.setName( data );
         self._user.setId( userId );
         
         alert( userId + 'success!' + data);
       },
       error: function () {
           alert('error');
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
         alert( userId + 'success!' + data);
       },
       error: function () {
         alert('error');
       }
   });
   
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
      self.disconnect( this._user.getId() );
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