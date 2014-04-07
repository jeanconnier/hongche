/* User class file */

/* Class declaration */
function User() {

   /* Properties - PRIVATE */
   this._name = '';
   this._id = '';
   this._hash = '';
   
}

/* Properties - prototype */
User.prototype._name = '';
User.prototype._id = '';
User.prototype._hash = '';

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

}

/* Getters & setters */
User.prototype.getName = function() {
   return this._name;
}

User.prototype.getId = function() {
   return this._id;
}

User.prototype.getHash = function() {
   return this._hash;
}

User.prototype.setName = function(name) {
   this._name = name;
}

User.prototype.setId = function(id) {
   this._id = id;
}

User.prototype.setHash = function(hash) {
   this._hash = hash;
}