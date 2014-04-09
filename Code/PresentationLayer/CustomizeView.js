/* CustomizeView class file */

function CustomizeView() {
   /* Properties - PRIVATE */
   debug(1, "CustomizeView instanciated");
   
}


/* Properties - prototype */


/* Methods - prototype*/
CustomizeView.prototype.display = function() {
   
}

CustomizeView.prototype.makeADemand = function() {
   var brand = $("#CustomizeViewBrand option:selected").val();
   var type = $("#CustomizeViewType option:selected").val();
   var colour = $("#CustomizeViewColour option:selected").val();
   var motor = $("#CustomizeViewMotor option:selected").val();
   var condition = $("#CustomizeViewState option:selected").val();
   
   $.ajax({
       type: 'POST',
       url: businessLogicLayerUrl,
       data: {
         class:"Demand",
         method:"create",
         brand:brand,
         type:type,
         colour:colour,
         motor:motor,
         state:condition
       },
       success: function ( data ) {
           debug(2,'success!' + data);
       },
       error: function () {
           debug(2,'error');
       }
   });
   
   debug(1, "Demande - couleur: " + colour + " & type: " + type + ".");
}

CustomizeView.prototype.sayHello = function() {
   debug(2,"hello");
}

CustomizeView.prototype.setCallbacks = function() {
   var self = this;
   debug(2,"alors?");
   $("#MakeADemandButton").click( function(){
      if(loginWidget._isConnected)
      {
         self.makeADemand();
      }
      else
      {
         displayError("Please log in...");
      }
   });
   
   debug(2, "CustomizeView callbacks set");
}




                       
/* Getters & setters */