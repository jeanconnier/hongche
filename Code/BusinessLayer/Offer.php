<?php
   
   function Offer() {
   
      switch ( $_POST['method'] ) {
         case "create":
		 createOfferBL();
	     break;
	  
	     case "delete":
		 deleteOfferBL();
	     break;
	  
	     case "update":
		 updateOfferBL();
	     break;
	  
	     case "acceptDeal":
		 acceptDealBL();
	     break;
      }
   }
   
   
   function createOfferBL() {
      if ( !empty($_POST['demandId'])  && !empty($_POST['userId']) && !empty($_POST['price']) )
	  {
         $offerId = $_POST['demandId'].$_SESSION['userId'].$_POST['price'];
		 // If the SQL request is successful
         if( createOfferDAL($offerId, $_POST['demandId'], $_SESSION['userId'], $_POST['price']) )
	     {
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
   
   function deleteOfferBL() {
      if( deleteOfferDAL($_POST['offerId']) )
	  {
	     echo "true";
	  }
	  else
	  {
	     echo "false";
	  }
   }
   
   function updateOfferBL() {
   
   }
   
   function acceptDealBL() {
   
   }
?>