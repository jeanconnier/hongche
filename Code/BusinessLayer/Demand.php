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
      createDemandDAL($_SESSION['userId'], $_POST['brand'], $_POST['type'], $_POST['colour'], $_POST['motor'], $_POST['condition']);
   }
   
   function deleteDemandBL() {
	  deleteDemandDAL($_POST['demandId']);
   }
   
   function getBestOfferBL() {
      echo getBestOfferDAL($_POST['demandID']);
   }
   
   function secureDealBL() {
   
   }
   
   function checkDemandIdBL() {

   }
   
?>