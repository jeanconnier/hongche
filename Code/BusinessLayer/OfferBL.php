<?php
   include('../DAL/OfferDAL.php');
   
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
   
   // Create an entry for a new Offer in the database
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
   
   // Delete an Offer in the database
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
      if ( !empty($_POST['offerId']) && !empty($_POST['demandId'])  && !empty($_POST['userId']) && !empty($_POST['price']) )
      {
	     // If the new price of the updated offer is lower than the current best offer
	     if (  $_POST['price'] < getOfferPriceDAL(getBestOfferIdDAL($_POST['demandId']) ) )
		 {
	        // If the SQL request succeed
    	    if ( updateOfferDAL($offerId, $_POST['demandId'], $_SESSION['userId'], $_POST['price']) )
	        {
	           echo "true";
	        }
            // If the SQL request fails		 
	        else
	        {
	           echo "error";
	        }
         }
		 // If the price is too high
		 else
		 {
		    echo "priceTooHigh";
		 }
      }
	  // If the form isn't correctly filled
	  else
	  {
	     echo "false";
	  }
   }
   
   function acceptDealBL() {
   
   }
?>