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
   $("#PersonalViewDemandsList").html('');
   $("#PersonalViewOffersList").html('');
   
   if( loginWidget._isConnected ) {
      if(this._user == '') {
         this._user = loginWidget.getUser();
      }
      
      var promiseDemands = this._user.getDemands();
      var promiseOffers = this._user.getOffers();
      
      promiseDemands.success( function(data) {
         var htmlDemandsList = '';
         demandsList = data.split(";");
         for(var i = 0; i < demandsList.length - 1; i++) {
            currentElementArray = demandsList[i].split(",");
            var currentElement = new Demand();
            currentElement.setId( currentElementArray[0] );
            currentElement.setUser( loginWidget.getUser() );
            htmlDemandsList += '<li class="PersonalViewDemandElement"><table><tr><td>Id</td><td>'+currentElement.getId()+'</td><tr><td>Brand</td><td>'+currentElementArray[2]+'</td></tr><tr><td>Type</td><td>'+currentElementArray[3]+'</td></tr><tr><td>Colour</td><td>'+currentElementArray[4]+'</td></tr><tr><td>Motor</td><td>'+currentElementArray[5]+'</td></tr><tr><td>State</td><td>'+currentElementArray[6]+'</td></tr><tr><td class="BestPrice">Best price</td><td>'+currentElement.getBestOffer()+'</td></tr></table></li>';
         }
         
         $("#PersonalViewDemandsList").html(htmlDemandsList);
      });
      
      /*## offerId, demandId, Brand, Type, Colour, Motor, State, buyerId, sellerId, price ##*/
      promiseOffers.success( function(data) {
         var htmlOffersList = '';
         debug( 2,"data="+data );
         /*for(var j = 0; i < this._offersList.length; j++) {
            htmlOffersList += '<li class="PersonalViewOfferElement">Id='+_offersList[j].getId()+'<br/>Your price:'+_offersList[j].getPrice()+''+_offersList[j].getDemand().getBestPrice()+'</li>';
         }*/
         offersList = data.split(";");
         for(var i = 0; i < offersList.length - 1; i++) {
            currentElementArray = offersList[i].split(",");
            alert(currentElementArray.length);
            //htmlOffersList += '<table><tr><td>Offer ID</td><td>'+currentElementArray[0]+'</td></tr><tr><td>Demand ID</td><td>'+currentElementArray[1]+'</td></tr></table>';
            htmlOffersList += '<li class="PersonalViewDemandElement"><table><tr><td>Offer ID</td><td>'+currentElementArray[0]+'</td><tr><td>Demand ID</td><td>'+currentElementArray[1]+'</td></tr><tr><td>Brand</td><td>'+currentElementArray[2]+'</td></tr><tr><td>Type</td><td>'+currentElementArray[3]+'</td></tr><tr><td>Colour</td><td>'+currentElementArray[4]+'</td></tr><tr><td>Motor</td><td>'+currentElementArray[5]+'</td></tr><tr><td>State</td><td>'+currentElementArray[6]+'</td></tr><tr><td>Buyer ID</td><td>'+currentElementArray[7]+'</td></tr><tr><td class="YourPrice">Your price</td><td>'+currentElementArray[9]+'</td></tr></table></li>';
         }
         
         $("#PersonalViewOffersList").html(htmlOffersList);
      });
      
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
   else
   {
      alert("Please log in...");
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
