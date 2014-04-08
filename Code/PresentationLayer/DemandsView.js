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
   $("#PersonalViewOffersList").html('');
   
   if( loginWidget._isConnected ) {
      if(this._user == '') {
         this._user = loginWidget.getUser();
      }
      
      var promiseDemands = this.getDemands();
      
      promiseDemands.success( function(data) {
         var htmlDemandsList = '';
         demandsList = data.split(";");
         for(var i = 0; i < demandsList.length - 1; i++) {
            
         }
         
         $("#PersonalViewDemandsList").html(htmlDemandsList);
      });
      var htmlList = '';
      for(var i = 0; i < this._demandsList.length; i++) {
         htmlList += '<li class="DemandsViewDemandElement">Id='+_demandsList[i].getUser().getId()+'<br/>'+_demandsList[i].getId()+'<span class="button" id="AnswerDemandButton">Answer</span></li>';
      }
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