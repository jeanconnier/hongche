<?php
   include('User.php');
   include('Offer.php');
   include('Demand.php');
   
//   $handle = fopen('foo.txt', 'a');
   
//   $text = $_POST['class'] . " " . $_POST['method'] . " " . $_POST['userId'] . " " . $_POST['hash']; 
//   fwrite($handle, "bonjour... " . $text);
   
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