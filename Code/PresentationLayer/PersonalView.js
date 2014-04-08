/* PersonalView class file */

function PersonalView() {
   /* Properties - PRIVATE */
   this._user = '';
   
   /* Constructor */
   if( loginWidget._isConnected ) {
      _user = loginWidget._user;
   }
   
   debug(1, "PersonalView instanciated");
}


/* Properties - prototype */
PersonalView.prototype._user = '';

/* Methods - prototype*/
/*PersonalView.prototype.getOffers = function() {
   
}

PersonalView.prototype.getDemands = function() {
   
}*/

PersonalView.prototype.draw = function(data) {
   
}

PersonalView.prototype.display = function() {
   if( loginWidget._isConnected ) {
      if(this._user == '') {
         this._user = loginWidget._user;
      }
      
      var promiseDemands = this._user.getDemands();
      //var promiseOffers = this._user.getOffers();
      
      promiseDemands.success( function(data) {
         var htmlDemandsList = '';
         demandsList = data.split(",");
         debug(2,demandsList[0]);
         var currentElement = null;
         for(var i = 0; i < demandsList.length; i++) {
            /*currentElement = new Demand();
            currentElement.setId( demandsList[0] );
            currentElement.setUser( loginWidget.getUser() );*/
            htmlDemandsList += '<li class="PersonalViewDemandElement">Id='+demandsList[i]+'<br/>Best price:'+demandsList[i]+'</li>';
         }
         
         $("#PersonalViewDemandsList").html(htmlDemandsList);
      });
      
      /*
      promiseOffers.success( function(data) {
         var htmlOffersList = '';
         
         for(var j = 0; i < this._offersList.length; j++) {
            htmlOffersList += '<li class="PersonalViewOfferElement">Id='+_offersList[j].getId()+'<br/>Your price:'+_offersList[j].getPrice()+''+_offersList[j].getDemand().getBestPrice()+'</li>';
         }
         
         $("#PersonalViewOffersList").html(htmlOffersList);
      });
      */
      //this._demandsList
      
      
      /*this._offersList = this._user.getOffers();
      debug(2, "this._demandsList="+this._demandsList);
      
      
      
      var htmlDemandsList = '';
      var htmlOffersList = '';
      
      for(var i = 0; i < this._demandsList.length; i++) {
         htmlDemandsList += '<li class="PersonalViewDemandElement">Id='+_demandsList[i].getId()+'<br/>Best price:'+_demandsList[i].getBestPrice()+'</li>';
      }
      
      for(var j = 0; i < this._offersList.length; j++) {
         htmlOffersList += '<li class="PersonalViewOfferElement">Id='+_offersList[j].getId()+'<br/>Your price:'+_offersList[j].getPrice()+''+_offersList[j].getDemand().getBestPrice()+'</li>';
      }
      
      $("#PersonalViewOffersList").html(htmlOffersList);
      $("#PersonalViewDemandsList").html(htmlDemandsList);*/
   }
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
