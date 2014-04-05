/* Demand class file */

/* Class declaration */
function Demand() {
   /* Properties - PRIVATE */
   this._userId = '';
   this._id = '';
   this._optionColor = '';
}

/* Properties - prototype */
Demand.prototype._userId = '';
Demand.prototype._id = '';
Demand.prototype._optionColor = '';

/* Methods - prototype*/
Demand.prototype.create = function() {
   
}

Demand.prototype.remove = function() {
   
}

Demand.prototype.display = function() {
   
}

Demand.prototype.getBestOffer = function() {
   
}

Demand.prototype.secureDeal= function() {
   
}

Demand.prototype.makeAnOffer = function() {
   
}

/* Getters & setters */
Demand.prototype.getId = function() {
   return this._id;
}

Demand.prototype.getUserId = function() {
   return this._userId;
}

Demand.prototype.setId = function(id) {
   this._id = id;
}

Demand.prototype.setUserId = function(userId) {
   this._userId = userId;
}