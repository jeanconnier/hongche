/* DemandsView class file */

/* Class declaration */
function DemandsView() {
   /* Properties - PRIVATE */
   this._pageIndex = 0;
   this._demandsList = new Array();
}


/* Properties - prototype */
DemandsView.prototype._pageIndex = 0;
DemandsView.prototype._demandsList = newArray();

/* Methods - prototype*/
DemandsView.prototype.getDemands = function() {
   
}

DemandsView.prototype.display = function() {
   
}

/* Getters & setters */
DemandsView.prototype.getPageIndex = function() {
   return this._pageIndex;
}

DemandsView.prototype.getDemandsList = function() {
   return this._demandsList;
}

DemandsView.prototype.setPageIndex = function(pageIndex) {
   this._pageIndex = pageIndex;
}

DemandsView.prototype.setCallbacks = function() {
   var self = this;
   
   for(var i = 0; i<this._demandsList.length -1; i++) {
      
   }
   
   for (var i = 0; i < lines_number - 1; i++) {
                data += '<li class="public_line">' + lines[i] + '</li>';
            }
   });
}
/*
DemandsView.prototype.setDemandsList = function(demandsList) {
   this._demandsList = demandsList;
}
*/