<?php

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
      if ( !empty($_POST['brand'])  && !empty($_POST['type']) && !empty($_POST['motor']) && !empty($_POST['condition']) )
	  {
	     echo $_SESSION['userID'];
         $demandId = $_SESSION['userId'].time();
		 // If the SQL request is successful
         if( true /*createDemandDAL($demandId, $_SESSION['userId'], $_POST['brand'], $_POST['type'], $_POST['motor'], $_POST['condition'])*/ )
	     {
		    echo 'Demand ID : '.$demandId.' Buyer ID : '.$_SESSION['userId'].' Brand : '.$_POST['brand'].' Type : '.$_POST['type'].' Motor : '.$_POST['motor'].' Condition : '.$_POST['condition'];
	        echo "true";
	     }
		 // If the SQL request fails
	     else
	     {
	        echo "error";
	     }
	  }
	  // If the form isn't correctly filled
	  else
	  {
	     echo "false";
	  }
   }
   
   function deleteDemandBL() {
	//  deleteDemandDAL($_POST['demandId']);
   }
   
   function getBestOfferBL() {
      //echo getBestOfferDAL($_POST['demandID']);
   }
   
   function secureDealBL() {
   
   }
   
   function checkDemandIdBL() {

   }
   
?>