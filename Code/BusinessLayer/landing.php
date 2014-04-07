<?php
   include('User.php');
   include('Offer.php');
   include('Demand.php');

   // Get the name of the class and method called
   $_class = $_POST['class'];
   $_method = $_POST['method'];

   echo $_method;

   
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