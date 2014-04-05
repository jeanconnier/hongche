/* Offer class file */

/* Class declaration */
function Offer() {
   /* Properties - PRIVATE */
   this._id = '';
   this._userId = '';
   this._demandId = '';
   this._price = 0.0;
}

/* Properties - prototype */
Offer.prototype._id = '';
Offer.prototype._userId = '';
Offer.prototype._demandId = '';
Offer.prototype._price = '';

/* Methods - prototype*/
Offer.prototype.create = function() {
   
}

Offer.prototype.remove = function() {
   
}

Offer.prototype.display = function() {
   
}

Offer.prototype.update = function() {
   
}

Offer.prototype.acceptDeal = function() {
   
}

/* Getters & setters */
Offer.prototype.getId = function() {
   return this._id ;
}

Offer.prototype.getUserId = function() {
   return this._userId ;
}

Offer.prototype.getDemandId = function() {
   return this._demandId ;
}

Offer.prototype.getPrice = function() {
   return this._price ;
}

Offer.prototype.setId = function(id) {
   this._id = id;
}

Offer.prototype.setUserId = function(userId) {
   this._userId = userId;
}

Offer.prototype.setDemandId = function(demandId) {
   this._demandId = demandId;
}

Offer.prototype.setPrice = function(price) {
   this._price = price;
}