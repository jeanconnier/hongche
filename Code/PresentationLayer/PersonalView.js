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
            htmlDemandsList += '<li class="PersonalViewDemandElement"><table><tr><td>Demand Id</td><td id="DemandIdData'+i+'">'+currentElement.getId()+'</td><tr><td>Brand</td><td>'+currentElementArray[2]+'</td></tr><tr><td>Type</td><td>'+currentElementArray[3]+'</td></tr><tr><td>Colour</td><td>'+currentElementArray[4]+'</td></tr><tr><td>Motor</td><td>'+currentElementArray[5]+'</td></tr><tr><td>State</td><td>'+currentElementArray[6]+'</td></tr><tr><td class="BestPrice">Best price</td><td id="BestOffer'+i+'">Yet unknown</td></tr><tr><td class="Secured">Secured</td><td id="SecuredDeal'+i+'"></td></tr></table></li>';
            currentElement.getBestOffer( "#BestOffer"+i );
            currentElement.isSecured( "#SecuredDeal"+i,i );
         }
         
         debug(2, "SecureButton callbacks set...");
         $(document).on('click', ".SecureButton", function(){ 
            var index = $(this).attr("buttonIndex");
            var demandId = $("#DemandIdData"+index).text().replace(" ", "");;
            
            debug(2, index+ " demandId:" + demandId);
            $.ajax({
                type: 'POST',
                url: businessLogicLayerUrl,
                data: {
                  class:"Demand",
                  method:"secureDeal",
                  demandId:demandId
                },
                success: function ( data ) {
                  debug(2, 'success!' + data);
                  refreshView();
                },
                error: function () {
                  debug(2,'error');
                }
            });
         });
         
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
            //htmlOffersList += '<table><tr><td>Offer ID</td><td>'+currentElementArray[0]+'</td></tr><tr><td>Demand ID</td><td>'+currentElementArray[1]+'</td></tr></table>';
            htmlOffersList += '<li class="PersonalViewOfferElement"><table><tr><td>Offer ID</td><td>'+currentElementArray[0]+'</td><tr><td>Demand ID</td><td>'+currentElementArray[1]+'</td></tr><tr><td>Brand</td><td>'+currentElementArray[2]+'</td></tr><tr><td>Type</td><td>'+currentElementArray[3]+'</td></tr><tr><td>Colour</td><td>'+currentElementArray[4]+'</td></tr><tr><td>Motor</td><td>'+currentElementArray[5]+'</td></tr><tr><td>State</td><td>'+currentElementArray[6]+'</td></tr><tr><td>Buyer ID</td><td>'+currentElementArray[7]+'</td></tr><tr><td class="YourPrice">Your price</td><td>'+currentElementArray[9]+'</td></tr></table></li>';
         }
         
         
         
         $("#PersonalViewOffersList").html(htmlOffersList);
      });
   }
   else
   {
      displayError("Please log in...");
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
