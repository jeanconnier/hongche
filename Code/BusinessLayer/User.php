<?php
   //include('DataAccessLayer/User.php');

   session_start();
   
   // Call the corresponding function
   function User() {
	  switch ($_POST['method']) {
		 case "connect":
		 connectBL();
		 break;
		 
		 case "getDemands":
		 getDemandsBL();
		 break;
		 
		 case "register":
		 registerBL();
		 break;
		 
		 case "getUsername":
		 getUsernameBL();
		 break; 
	  }
   }
   
   // The checkUserId method returns true is the user exists and false otherwise
   function checkUserIdBL() {
	  $isExisting = false;
	  // If the user exists
	  if ( checkUserIdDAL() )
	  {
		 $isExisting = true;
	  }
	  return $isExisting;
   }
   
   // The chechHash method returns true if the hash is correct and false otherwise
   function checkHashBL() {
	  $isCorrect = false;	  
	  // If the user exists
	  if ( checkUserIdDAL() )
	  {
	    // Get the hash corresponding to the userId from the database
	    $hash = getHashDAL($_POST['userId']);
		// If the hash is correct
		 if ( $hash == $_POST['hash'] )
		 {
			$isCorrect = true;
		 }
	  }
	  return $isCorrect;
   }
   

   function connectBL() {
	  $isConnected = false;
	  /*
	  // If the user exists
	  if ( checkUserIdBL() )
	  {
	     // If the hash is correct
		 if ( checkHashBL() )
		 {
			$isConnected = true;
			// The session save the user ID
			$_SESSION['userId'] = $_POST['userId'];
		 }
	  }
	  */
	  $_SESSION['userId'] = $_POST['userId'];
	  echo $_SESSION['userId'];
	  //echo 'User '.getUsernameDAL().' is connected';
	  return $isConnected;
   }
   
   // registerBL tests if the userId is already in use, if not the user is created
   function registerBL() {
      // If the user doesn't exist
     /* if( !checkUserIdBL() )
	  {
	     registerBL($_POST['userId'], $_POST['username'], $_POST['hash']);
         echo "User created";
	  }
	  else
	  {
	     echo "userId already in use";
	  }*/
	  echo $_SESSION['userId'];
	  echo "Register";
   }
   
   // getUsernameBL returns the username corresponding to the userId
   function getUsernameBL() {
      // If the user exists
      if ( checkUserIdBL() )
	  {
	     // Get the username from the database
         $username = getUsernameDAL($_SESSION['userId']);
		 echo $username;
      }
	  else
	  {
	     echo "User unregistered";
	  }
   }
   
   // getDemandsBL returns all the demands of the user
   function getDemandsBL() {
      $demands = getDemandsDAL($_POST['userId']);
      echo "Les demandes sont ...";
   }
?>