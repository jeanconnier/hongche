/* App script */

/* Global variables */
var debugLevel = 4;
var businessLogicLayerUrl = "../BusinessLayer/landing.php";
var loginWidget = null;

function debug(level, string) {
   if(debugLevel > level) {
      $("#ConsoleBar").html($("#ConsoleBar").html()+string+"<br />");
      $("#ConsoleBar").scrollTop($("#ConsoleBar")[0].scrollHeight);
   }
}



    
function displayError( string ) {
   $("#ErrorMessage").text( string );
   $("#ErrorWindow").show();
   /*$("#ErrorWindow").animate(
   {$("#ErrorWindow").show()},
     "fast").animate(
   {$("#ErrorWindow").hide()},
      "fast");
   });*/
}


$(document) .ready(function () {
    /* Loading the required scripts */
    $.getScript('User.js', debug(3, 'User.js loaded')) .success(function () {
        $.getScript('Demand.js', debug(3, 'Demand.js loaded')) .success(function () {
            $.getScript('Offer.js', debug(3, 'Offer.js loaded')) .success(function () {
                $.getScript('DemandsView.js', debug(3, 'DemandsView.js loaded')) .success(function () {
                    $.getScript('CustomizeView.js', debug(3, 'CustomizeView.js loaded')) .success(function () {
                        $.getScript('PersonalView.js', debug(3, 'PersonalView.js loaded')) .success(function () {
                            $.getScript('RegisterView.js', debug(3, 'RegisterView.js loaded')) .success(function () {
                                $.getScript('LoginWidget.js', debug(3, 'LoginWidget.js loaded')) .success(function () {
                                    $.getScript('StringChecker.js', debug(3, 'StringChecker.js loaded')) .success(function () {
                                        loginWidget = new LoginWidget();
                                        var app = new App();
                                        loginWidget.setCallbacks();
                                        loginWidget.display();
                                        debug(2,'fronf');
                                        app.main();
                                    });
                                    
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
      
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
      debug(2,"salut");
      
      $("#ErrorWindow").hide();
      
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
      $("#ErrorMessageButton").click( function() {
            $("#ErrorWindow").hide();
      });
      
      /* The default view is the CustomizeView */
      $("#CustomizeView").show();
      $("#RegisterView").hide();
      $("#DemandsView").hide();
      $("#PersonalView").hide();
      
      
      
      _customizeView.display();
   });
   
}
/*
//$(document).ready( function() {
   var loginWidget = new LoginWidget();
   var app = new App();
   
   $(document).ready( function() {
      loginWidget.setCallbacks();
      loginWidget.display();
   });
   
   app.main();
*/