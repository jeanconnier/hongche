/* App script */

/* Global variables */
var debugLevel = 4;
var businessLogicLayerUrl = "../BusinessLayer/landing.php";
var loginWidget = null;
var currentView = null;

function debug(level, string) {
   if(debugLevel > level) {
      $("#ConsoleBar").html($("#ConsoleBar").html()+string+"<br />");
      $("#ConsoleBar").scrollTop($("#ConsoleBar")[0].scrollHeight);
   }
}

    
function displayError( string ) {
   $("#ErrorMessage").text( string );
   $("#ErrorWindow").show();
   $('#ErrorWindow').animate({'left': '40%'});
}

function refreshView() {
   if(loginWidget._isConnected)
   {
      debug(2, "refreshing the current view");
      currentView.display();
      debug(2, "displaying current view " + currentView);
   }
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
   debug(1, "App instanciated");
}

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
         currentView = _customizeView;
         _customizeView.display();
      });
      $("#MenuElementPersonal").click( function() {
         $("#CustomizeView").hide();
         $("#RegisterView").hide();
         $("#DemandsView").hide();
         $("#PersonalView").show();
         currentView = _personalView;

         _personalView.display();
      });
      $("#PersonalSpaceButton").click( function() {
         $("#CustomizeView").hide();
         $("#RegisterView").hide();
         $("#DemandsView").hide();
         $("#PersonalView").show();
         currentView = _personalView;
         
         _personalView.display();
      });
      $("#RegisterButton").click( function() {
         $("#CustomizeView").hide();
         $("#RegisterView").show();
         $("#DemandsView").hide();
         $("#PersonalView").hide();
         currentView = _customizeView;
         
         _registerView.display();
      });
      $("#MenuElementDemands").click( function() {
         $("#CustomizeView").hide();
         $("#RegisterView").hide();
         $("#DemandsView").show();
         $("#PersonalView").hide();
         currentView = _demandsView;
         
         _demandsView.display();
      });
      $("#ErrorMessageButton").click( function() {
            $('#ErrorWindow').animate({'left': '-40%'});
      });
      
      /* The default view is the CustomizeView */
      $("#CustomizeView").show();
      $("#RegisterView").hide();
      $("#DemandsView").hide();
      $("#PersonalView").hide();
      
      
      
      _customizeView.display();
   });
   
}