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
   var colour = $("#CustomizeViewColour option:selected").val();
   var type = $("#CustomizeViewType option:selected").val();
   
   debug(1, "Demande - couleur: " + colour + " & type: " + type + ".");
   //debug(1, "yoh");
}

CustomizeView.prototype.sayHello = function() {
   alert("hello");
}

CustomizeView.prototype.setCallbacks = function() {
   /*alert("callback set");
   this.sayHello();
   x.sayHello();*/
   var self = this;
   
   //self.sayHello();
   
   $("#MakeADemandButton").click( function(){
      //function() { alert("yoh " + this); }
      //this.makeADemand();
      //alert("bonjour" + typeof self);
      self.makeADemand();
   });
}


/* Getters & setters */