<?php
   //include('DataAccessLayer/User.php');

   session_start();
   
   // Get the name of the function called
   $_method = $_POST['method'];
   
   class User {
	   // Call the corresponding function
	   function User() {
		  switch ($_method) {
			 case "connect":
			 connect();
			 break;
			 
			 case "getDemands":
			 getDemands();
			 break;
			 
			 case "register":
			 register();
			 break;
			 
			 case "getUsername":
			 getUsername();
			 break; 
		  }
	   }
	   
	   // The checkUserId method returns true is the user exists and false otherwise
	   function checkUserId() {
	      $isExisting = false;
		  // Get the hash corresponding to the userId from the database
		  $hash = getHash($_POST['userId']);
		  // If the user exists
		  if ($username != NULL )
		  {
		     $isExisting = true;
	      }
		  return $isExisting;
	   }
	   
	   // The chechHash method returns true if the hash is correct and false otherwise
	   function checkHash() {
		  $isCorrect = false;
		  // Get the hash corresponding to the userId from the database
		  $hash = getHash($_POST['userId']);
		  
		  // If the user exists
		  if ( $hash != NULL )
		  {
			// If the hash is correct
			 if ( $hash == _hash )
			 {
			    $isCorrect = true;
			 }
		  }
		  return $isCorrect;
	   }
	   
	   
	   function connect() {
	      $isConnected = false;
          if ( checkUserId() )
		  {
		     if ( checkHash() )
			 {
			    $isConnected = true;
				$_SESSION['userId'] = $_POST['userId'];
			 }
		  }
		  echo 'User '.getUsername().' is connected';
		  return $isConnected;
	   }
	   
	   function register() {
	      echo 'Register';
	   }
	   
	   function getUsername() {
	      $username = getUsername($_POST['userId']);
		  echo $username;
		  return $username;
	   }
	   
	   function getDemands() {
			echo "Les demandes sont ...";
	   }
	   
	   
	}
?>