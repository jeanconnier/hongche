<?php
   
   function Offer() {
   
      switch ( $_POST['method'] )
         case "create":
		 create();
	     break;
	  
	     case "delete":
		 delete();
	     break;
	  
	     case "update":
		 update();
	     break;
	  
	     case "acceptDeal":
		 acceptDeal();
	     break;
   }
   
?>