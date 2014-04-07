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
   var condition = $("#CustomizeViewCondition option:selected").val();
   
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
         condition:condition
       },
       success: function ( data ) {
           alert('success!' + data);
       },
       error: function () {
           alert('error');
       }
   });
   
   debug(1, "Demande - couleur: " + colour + " & type: " + type + ".");
}

CustomizeView.prototype.sayHello = function() {
   alert("hello");
}

CustomizeView.prototype.setCallbacks = function() {
   var self = this;
   
   $("#MakeADemandButton").click( function(){
      self.makeADemand();
   });
   
   debug(2, "CustomizeView callbacks set");
}




                       
/* Getters & setters */