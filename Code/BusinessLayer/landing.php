<?php
   include('UserBL.php');
   include('OfferBL.php');
   include('DemandBL.php');
   
   switch ($_POST['class']) {
      case "User":
		 User();
         break;
      case "Offer":
		 Offer();
         break;
      case "Demand":
	     Demand();
         break;
   }
   
?>