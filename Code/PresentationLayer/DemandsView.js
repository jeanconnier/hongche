/* DemandsView class file */

/* Class declaration */
function DemandsView() {
   /* Properties - PRIVATE */
   this._demandsList = new Array();
}


/* Properties - prototype */
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
      this._user = loginWidget.getUser();
      
      var promiseDemands = this.getDemands();
      
      promiseDemands.success( function(data) {
         var htmlDemandsList = '';
         demandsList = data.split(";");
         var i = 0;
         for(i = 0; i < demandsList.length - 1; i++) {
            currentElementArray = demandsList[i].split(",");
            if(currentElementArray[7] !== '1')
            {
               var currentElement = new Demand();
               currentElement.setId( currentElementArray[0].replace(" ",""));
               debug(2,"|"+currentElementArray[0]);
               currentElement.setUser( currentElementArray[1] );
               htmlDemandsList += '<li class="DemandsViewDemandElement"><table><tr><td>Id</td><td id="DemandIdData'+i+'">'+currentElementArray[0]+'</td><tr><td >User ID</td><td  id="UserId'+i+'">'+currentElementArray[1]+'</td></tr><tr><td>Brand</td><td>'+currentElementArray[2]+'</td></tr><tr><td>Type</td><td>'+currentElementArray[3]+'</td></tr><tr><td>Colour</td><td>'+currentElementArray[4]+'</td></tr><tr><td>Motor</td><td>'+currentElementArray[5]+'</td></tr><tr><td>State</td><td>'+currentElementArray[6]+'</td></tr><tr><td class="BestPrice">Best price</td><td id="BestPrice'+i+'">Yet unknown</td></tr></table></li><input type="text" id="AnswerDemandPrice'+i+'"/><span class="Button AnswerDemandButton" buttonIndex="'+i+'">Answer!</span>';
               
               currentElement.getBestOffer( "#BestPrice"+i );
               
               var self = this;
               var userId = loginWidget.getUser().getId();
            }
            
         }
            
         debug(2, "AnswerDemandButton callback set?");
         $(document).one('click', ".AnswerDemandButton", function(){ 
            var index = $(this).attr("buttonIndex");
            var answerDemandPrice = $("#AnswerDemandPrice"+index).val().replace(" ","");
            var demandId = $("#DemandIdData"+index).text().replace(" ", "");
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
                  refreshView();
                },
                error: function () {
                  debug(2,'error');
                }
            });
         });
         
         $(document).on('click', "#SearchButton", function(){ 
            var brand = $("#DemandsViewSearchBrand option:selected").val();
            var type = $("#DemandsViewSearchType option:selected").val();
            var colour = $("#DemandsViewSearchColour option:selected").val();
            var motor = $("#DemandsViewSearchMotor option:selected").val();
            var condition = $("#DemandsViewSearchState option:selected").val();
            $.ajax({
                type: 'POST',
                url: businessLogicLayerUrl,
                data: {
                  class:"Demand",
                  method:"searchDemand",
                  brand:brand,
                  type:type,
                  colour:colour,
                  motor:motor,
                  state:condition
                },
                success: function ( data ) {
                  var demandsList = data.split(";");
                  var htmlSearchDemandsList = '';
                  var currentElementArray = null;
                  for(var i = 0; i < demandsList.length - 1; i++) {
                     currentElementArray = demandsList[i].split(",");
                     if(currentElementArray[7] !== '1')
                     {
                        var currentElement = new Demand();
                        currentElement.setId( currentElementArray[0].replace(" ",""));
                        currentElement.setUser( currentElementArray[1] );
                        htmlSearchDemandsList += '<li class="DemandsViewDemandElement"><table><tr><td>Id</td><td id="DemandIdData'+i+'">'+currentElementArray[0]+'</td><tr><td >User ID</td><td  id="UserId'+i+'">'+currentElementArray[1]+'</td></tr><tr><td>Brand</td><td>'+currentElementArray[2]+'</td></tr><tr><td>Type</td><td>'+currentElementArray[3]+'</td></tr><tr><td>Colour</td><td>'+currentElementArray[4]+'</td></tr><tr><td>Motor</td><td>'+currentElementArray[5]+'</td></tr><tr><td>State</td><td>'+currentElementArray[6]+'</td></tr><tr><td class="BestPrice">Best price</td><td id="BestPrice'+i+'">Yet unknown</td></tr></table></li><input type="text" id="AnswerDemandPrice'+i+'"/><span class="Button AnswerDemandButton" buttonIndex="'+i+'">Answer!</span>';
                        
                        currentElement.getBestOffer( "#BestPrice"+i );
                        
                        
                     }
                  }
                  $("#SearchResults").html(htmlSearchDemandsList);
                  
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
   else
   {
      displayError("Please log in...");
   }
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