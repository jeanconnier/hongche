/* DemandsView class file */

/* Class declaration */
function DemandsView() {
   /* Properties - PRIVATE */
   //this._pageIndex = 0;
   this._demandsList = new Array();
}


/* Properties - prototype */
//DemandsView.prototype._pageIndex = 0;
DemandsView.prototype._demandsList = new Array();

/* Methods - prototype*/
DemandsView.prototype.getDemands = function() {
   debug(2,"Getting all demands...");
   var self = this;
   
   return $.ajax({
      type: 'POST',
      url: businessLogicLayerUrl,
      data: {
         class:"Demand",
         method:"getDemands"
      }
   });
}

DemandsView.prototype.display = function() {
   $("#DemandsViewDemandsList").html('');
   
   if( loginWidget._isConnected ) {
      //if(this._user == '') {
         this._user = loginWidget.getUser();
      //}
      
      var promiseDemands = this.getDemands();
      
      promiseDemands.success( function(data) {
         var htmlDemandsList = '';
         demandsList = data.split(";");
         var i = 0;
         for(i = 0; i < demandsList.length - 1; i++) {
            currentElementArray = demandsList[i].split(",");
            var currentElement = new Demand();
            //alert(currentElementArray[0] + " " + currentElementArray[1]);
            currentElement.setId( currentElementArray[0] );
            currentElement.setUser( currentElementArray[1] );
            // debug(2,"yoh");
            //alert(currentElement.getBestOffer());
            htmlDemandsList += '<li class="DemandsViewDemandElement"><table><tr><td>Id</td><td id="DemandIdData'+i+'">'+currentElementArray[0]+'</td><tr><td >User ID</td><td  id="UserId'+i+'">'+currentElementArray[1]+'</td></tr><tr><td>Brand</td><td>'+currentElementArray[2]+'</td></tr><tr><td>Type</td><td>'+currentElementArray[3]+'</td></tr><tr><td>Colour</td><td>'+currentElementArray[4]+'</td></tr><tr><td>Motor</td><td>'+currentElementArray[5]+'</td></tr><tr><td>State</td><td>'+currentElementArray[6]+'</td></tr><tr><td class="BestPrice">Best price</td><td>'+currentElementArray[0]+'</td></tr></table></li><input type="text" id="AnswerDemandPrice'+i+'"/><span class="Button AnswerDemandButton" buttonIndex="'+i+'">Answer!</span>';
            
            var self = this;
            var userId = loginWidget.getUser().getId();
            
            
         }
            
         debug(2, "AnswerDemandButton callback set?");
         $(document).on('click', ".AnswerDemandButton", function(){ 
            var index = $(this).attr("buttonIndex");
            var answerDemandPrice = $("#AnswerDemandPrice"+index).val();
            var demandId = $("#DemandIdData"+index).text();
            var userId = $("#UserId"+index).text();
            
            debug(2, index+ " userId:" + userId + " demandId:" + demandId + " price:" + answerDemandPrice);
            $.ajax({
                type: 'POST',
                url: businessLogicLayerUrl,
                data: {
                  class:"Offer",
                  method:"create",
                  userId:userId,
                  demandId:demandId,
                  price:answerDemandPrice
                },
                success: function ( data ) {
                  debug(2, 'success!' + data);
                },
                error: function () {
                  debug(2,'error');
                }
            });
         });
         debug(2, "AnswerDemandButton callback set!");
         $("#DemandsViewDemandsList").html(htmlDemandsList);
      });
   }
}

/* Getters & setters */
/*
DemandsView.prototype.getPageIndex = function() {
   return this._pageIndex;
}
*/
DemandsView.prototype.getDemandsList = function() {
   return this._demandsList;
}

/*
DemandsView.prototype.setPageIndex = function(pageIndex) {
   this._pageIndex = pageIndex;
}

*/
DemandsView.prototype.sayHello = function() {
   debug(2,"hello");
}

DemandsView.prototype.setCallbacks = function() {
   for(var i = 0; i < this._demandsList.length-1; i++) {
      x = this._demandsList[i];
      $("#AnswerDemandButton"+i).click( function() {
         x.makeAnOffer();
      });
   }
   debug(2, "DemandsView callbacks set");
}

/*
DemandsView.prototype.setDemandsList = function(demandsList) {
   this._demandsList = demandsList;
}
*/