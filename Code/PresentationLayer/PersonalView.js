/* PersonalView class file */

function PersonalView() {
   /* Properties - PRIVATE */
   this._user = '';
   this._offersList = new Array();
   this._demandsList = new Array();
   debug(1, "PersonalView instanciated");
}


/* Properties - prototype */
PersonalView.prototype._user = '';
PersonalView.prototype._offersList = new Array();
PersonalView.prototype._demandsList = new Array();

/* Methods - prototype*/
PersonalView.prototype.getOffers = function() {
   
}

PersonalView.prototype.getDemands = function() {
   
}

PersonalView.prototype.display = function() {
   this._user.getDemands();
   
   var htmlDemandsList = '';
   var htmlOffersList = '';
   
   for(var i = 0; i < this._demandsList.length; i++) {
      htmlDemandsList += '<li class="PersonalViewDemandElement">Id='+_demandsList[i].getId()+'<br/>Best price:'+_demandsList[i].getBestPrice()+'</li>';
   }
   
   for(var j = 0; i < this._offersList.length; j++) {
      htmlOffersList += '<li class="PersonalViewOfferElement">Id='+_offersList[j].getId()+'<br/>Your price:'+_offersList[j].getPrice()+''+_offersList[j].getDemand().getBestPrice()+'</li>';
   }
   
   $("#PersonalViewOffersList").html(htmlOffersList);
   $("#PersonalViewDemandsList").html(htmlDemandsList);
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
