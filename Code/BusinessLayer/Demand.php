<?php
   
   function Demand() {
   
      switch ( $_POST['method'] )
         case "create":
		 create();
	     break;
	  
	     case "delete":
		 delete();
	     break;
	  
	     case "getBestOffer":
		 update();
	     break;
	  
	     case "secureDeal":
		 acceptDeal();
	     break;
		 
		 case "cancel":
		 cancel();
		 break;
		 
		 
   }
   
   
   function create() {
   
      
   
   }
   
?>