/* App script */

var debugLevel = 2;

function debug(level, string) {
   if(debugLevel > level) {
      alert(string);
   }
}

      
/* Loading the required scripts */
$.getScript("User.js", debug(3,"User.js loaded"));
$.getScript("Demand.js", debug(3,"Demand.js loaded"));
$.getScript("Offer.js",debug(3,"Offer.js loaded"));
$.getScript("DemandsView.js", debug(3,"DemandsView.js loaded"));
$.getScript("CustomizeView.js", debug(3,"CustomizeView.js loaded"));
$.getScript("PersonalView.js", debug(3,"PersonalView.js loaded"));
$.getScript("RegisterView.js", debug(3,"RegisterView.js loaded"));
$.getScript("LoginWidget.js", debug(3,"LoginWidget.js loaded"));
$.getScript("StringChecker.js", debug(3,"StringChecker.js loaded"));
      
function App() {
/*
   this._customizeView = new CustomizeView();
   this._registerView = new RegisterView();
   this._personalView = new PersonalView();
   this._demandsView = new DemandsView();
   */
   debug(1, "App instanciated");
}

/* Properties - prototype 
App.prototype._customizeView = new CustomizeView();
App.prototype._registerView = new RegisterView();
App.prototype._personalView = new PersonalView();
App.prototype._demandsView = new DemandsView();
*/


/* Methods */
App.prototype.main = function() {

   $(document).ready( function() {
      var _customizeView = new CustomizeView();
      var _registerView = new RegisterView();
      var _personalView = new PersonalView();
      var _demandsView = new DemandsView();
      
      /* Set views callbacks */
      _customizeView.setCallbacks();
      _registerView.setCallbacks();
      _demandsView.setCallbacks();
      
      /* Set view switching callbacks */
      $("#MenuElementCustomize").click( function() {
         $("#CustomizeView").show();
         $("#RegisterView").hide();
         $("#DemandsView").hide();
         $("#PersonalView").hide();
         
         _customizeView.display();
      });
      $("#MenuElementPersonal").click( function() {
         $("#CustomizeView").hide();
         $("#RegisterView").hide();
         $("#DemandsView").hide();
         $("#PersonalView").show();

         _personalView.display();
      });
      $("#PersonalSpaceButton").click( function() {
         $("#CustomizeView").hide();
         $("#RegisterView").hide();
         $("#DemandsView").hide();
         $("#PersonalView").show();
         
         _personalView.display();
      });
      $("#RegisterButton").click( function() {
         $("#CustomizeView").hide();
         $("#RegisterView").show();
         $("#DemandsView").hide();
         $("#PersonalView").hide();
         
         _registerView.display();
      });
      $("#MenuElementDemands").click( function() {
         $("#CustomizeView").hide();
         $("#RegisterView").hide();
         $("#DemandsView").show();
         $("#PersonalView").hide();
         
         _demandsView.display();
      });
      
      /* The default view is the CustomizeView */
      $("#CustomizeView").show();
      $("#RegisterView").hide();
      $("#DemandsView").hide();
      $("#PersonalView").hide();
      
      _customizeView.display();
   });
   
}


var loginWidget = new LoginWidget();
var app = new App();

app.main();
