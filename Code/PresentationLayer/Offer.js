/* Offer class file */

/* Class declaration */
function Offer() {
   /* Properties - PRIVATE */
   this._id = '';
   this._user = '';
   this._demand = '';
   this._price = 0.0;
}

/* Properties - prototype */
Offer.prototype._id = '';
Offer.prototype._user = '';
Offer.prototype._demand = '';
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
Offer.prototype.get = function() {
   return this._id ;
}

Offer.prototype.getUser = function() {
   return this._userId ;
}

Offer.prototype.getDemand = function() {
   return this._demand ;
}

Offer.prototype.getPrice = function() {
   return this._price ;
}

Offer.prototype.setId = function(id) {
   this._id = id;
}

Offer.prototype.setUser = function(user) {
   this._userId = user;
}

Offer.prototype.setDemand = function(demand) {
   this._demandId = demand;
}

Offer.prototype.setPrice = function(price) {
   this._price = price;
}