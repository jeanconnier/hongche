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
   
   }
   
   function deleteOfferBL() {
   
   }
   
   function updateOfferBL() {
   
   }
   
   function acceptDealBL() {
   
   }
?>