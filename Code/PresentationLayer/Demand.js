/* Demand class file */

/* Class declaration */
function Demand() {
   /* Properties - PRIVATE */
   this._user = '';
   this._id = '';
   this._optionColor = '';
}

/* Properties - prototype */
Demand.prototype._user = '';
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

Demand.prototype.makeAnOffer = function( price ) {
   var offer = new Offer();
   offer.setDemand( this );
   offer.setUser( this._user );
   offer.setPrice( price );
   offer.create();
   
}

/* Getters & setters */
Demand.prototype.getId = function() {
   return this._id;
}

Demand.prototype.getUser = function() {
   return this._user;
}

Demand.prototype.setId = function(id) {
   this._id = id;
}

Demand.prototype.setUser = function(user) {
   this._user = user;
}