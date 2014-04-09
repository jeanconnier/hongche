/* Demand class file */

/* Class declaration */
function Demand() {
   /* Properties - PRIVATE */
   this._user = '';
   this._id = '';
   this._optionColor = '';
}

/* Properties - prototype */
Demand.prototype._user = '';
Demand.prototype._id = '';
Demand.prototype._optionColor = '';

/* Methods - prototype*/
Demand.prototype.create = function() {
   
}

Demand.prototype.remove = function() {
   
}

Demand.prototype.display = function() {
   
}

Demand.prototype.getBestOffer = function( htmlElement ) {
   var self = this;
   debug(2, "Getting "+htmlElement+"\'s best offer...");
   
   $.ajax({
       type: 'POST',
       url: businessLogicLayerUrl,
       data: {
         class:"Demand",
         method:"getBestOffer",
         demandId:self._id
       },
       success: function ( data ) {
         debug(2, 'success!' +htmlElement +" "+ data);
         $(htmlElement).html(data);
       },
       error: function () {
         debug(2,'error');
       }
   });
}

Demand.prototype.isSecured = function( htmlElement, i ) {
   var self = this;
   debug(2, "Checking if "+htmlElement+" is secured...");
   
   $.ajax({
       type: 'POST',
       url: businessLogicLayerUrl,
       data: {
         class:"Demand",
         method:"isSecured",
         demandId:self._id
       },
       success: function ( data ) {
         debug(2, 'success!' +htmlElement +" "+ data);
         var str = 'No! <span class="Button SecureButton" id="SecureButton'+i+'" buttonIndex="'+i+'">Secure!</span>';
         if(data === "1")
         {
            str = "Oh yes!";
         }
         $(htmlElement).html(str);
       },
       error: function () {
         debug(2,'error');
       }
   });
}

Demand.prototype.secureDeal= function() {
   
}

Demand.prototype.makeAnOffer = function( price ) {
   var offer = new Offer();
   offer.setDemand( this );
   offer.setUser( this._user );
   offer.setPrice( price );
   offer.create();
   
}

/* Getters & setters */
Demand.prototype.getId = function() {
   return this._id;
}

Demand.prototype.getUser = function() {
   return this._user;
}

Demand.prototype.setId = function(id) {
   this._id = id;
}

Demand.prototype.setUser = function(user) {
   this._user = user;
}