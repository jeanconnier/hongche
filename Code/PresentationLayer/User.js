/* User class file */

/* Class declaration */
function User() {

   /* Properties - PRIVATE */
   this._name = '';
   this._id = '';
   this._password = '';
   
}

/* Properties - prototype */
User.prototype._name = '';
User.prototype._id = '';
User.prototype._password = '';

/* Methods - prototype*/
User.prototype.connect = function() {
   
}

User.prototype.disconnect = function() {
   
}

User.prototype.register = function() {

}

User.prototype.getOffers = function() {

}

User.prototype.getDemands = function() {
   debug(2, "Getting "+this._id+"\'s demands...");
   var self = this;
   var ret = null;
   /*$.ajax({
      type: 'POST',
      url: businessLogicLayerUrl,
      data: {
         class:"User",
         method:"getDemands",
         userId:self._id
      },
      success: function( data ) {
         debug(2, "success" + data );
         ret = data;
      },
      error: function() {
         debug(2, "error");
      }
   });*/
   return promise = $.ajax({
      type: 'POST',
      url: businessLogicLayerUrl,
      data: {
         class:"User",
         method:"getDemands",
         userId:self._id
      }
   });
}

/* Getters & setters */
User.prototype.getName = function() {
   return this._name;
}

User.prototype.getId = function() {
   return this._id;
}

User.prototype.getPassword = function() {
   return this._password;
}

User.prototype.setName = function(name) {
   this._name = name;
}

User.prototype.setId = function(id) {
   this._id = id;
}

User.prototype.setPassword = function(password) {
   this._password = password;
}