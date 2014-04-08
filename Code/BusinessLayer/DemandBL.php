<?php
   include('../DAL/DemandDAL.php');

   function Demand() {
   
      switch ( $_POST['method'] ) {
         case "create":
		 createDemandBL();
	     break;
	  
	     case "delete":
		 deleteDemandBL();
	     break;
	  
	     case "getBestOffer":
		 getBestOfferBL();
	     break;
	  
	     case "secureDeal":
		 secureDealBL();
	     break;
      }
   }
   
   
   function createDemandBL() {      
      if ( !empty($_POST['brand'])  && !empty($_POST['type']) && !empty($_POST['motor']) && !empty($_POST['colour']) && !empty($_POST['state']) )
	  {
	     echo $_SESSION['userId'];
         $demandId = $_SESSION['userId'].time();
		 // If the SQL request is successful
         if( createDemandDAL($demandId, $_SESSION['userId'], $_POST['brand'], $_POST['type'], $_POST['colour'], $_POST['motor'], $_POST['state']) )
	     {
		    //echo 'Demand ID : '.$demandId.' Buyer ID : '.$_SESSION['userId'].' Brand : '.$_POST['brand'].' Type : '.$_POST['type'].' Motor : '.$_POST['motor'].' Condition : '.$_POST['state'];
	        echo "true";
	     }
		 // If the SQL request fails
	     else
	     {
	        echo "sqlError";
	     }
	  }
	  // If the form isn't correctly filled
	  else
	  {
	     echo "false";
	  }
   }
   
   function deleteDemandBL() {
	  if ( deleteDemandDAL($_POST['demandId']) )
	  {
	     echo "true";
	  }
	  else
	  {
	     echo "false";
	  }
   }
   
   function getBestOfferBL() {
      echo getBestOfferDAL($_POST['demandID']);
   }
   
   function secureDealBL() {
   
   }
   
?>