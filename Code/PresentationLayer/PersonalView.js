/* PersonalView class file */

function PersonalView() {
   /* Properties - PRIVATE */
   this._userId = '';
   this._offersList = new Array();
   this._demandsList = new Array();
}


/* Properties - prototype */
PersonalView.prototype._userId = '';
PersonalView.prototype._offersList = new Array();
PersonalView.prototype._demandsList = new Array();

/* Methods - prototype*/
PersonalView.prototype.getOffers = function() {
   
}

PersonalView.prototype.getDemands = function() {
   
}

PersonalView.prototype.display = function() {
   
}


/* Getters & setters */
PersonalView.prototype.getUserId = function() {
   return this._userId;
}

PersonalView.prototype.getOffersList = function() {
   return this._offersList;
}

PersonalView.prototype.getDemandsList = function() {
   return this._demandsList;
}

PersonalView.prototype.setUserId = function(userId) {
   this._userId = userId;
}

/*
PersonalView.prototype.setOffersList = function(offersList) {
   this._offersList = offersList;
}

PersonalView.prototype.setDemandsList = function(demandsList) {
   this._demandsList = demandsList;
}
*/
