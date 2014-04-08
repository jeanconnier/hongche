<?php
   include('../DAL/UserDAL.php');

   session_start();
   
   // Call the corresponding function
   function User() {
	  switch ($_POST['method']) {
		 case "connect":
		 connectBL();
		 break;
		 
		 case "disconnect":
		 disconnectBL();
		 break;
		 
		 case "getDemands":
		 getDemandsBL();
		 break;
		 
		 case "getOffers":
		 getOffersBL();
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
	  if ( checkUserIdDAL($_POST['userId']) )
	  {
		 $isExisting = true;
	  }
	  return $isExisting;
   }
   
   // The chechHash method returns true if the hash is correct and false otherwise
   function checkHashBL() {
	  $isCorrect = false;	  
	  // If the user exists
	  if ( checkUserIdDAL($_POST['userId']) )
	  {
	    // Create the hash corresponding to the input password with the Blowfish algorithm
	    $inputHash = hash('sha512',$_POST['password']);
	    // Get the hash corresponding to the userId from the database
	    $databaseHash = getHashDAL($_POST['userId']);
		// If the hash is correct
		 if ( $databaseHash == $inputHash )
		 {
			$isCorrect = true;
		 }
	  }
	  return $isCorrect;
   }
   
   // Connect the user after checking his userId and password
   function connectBL() {
	  $isConnected = "false";
	  // If the form has been correctly filled
	  if ( !empty($_POST['userId']) && !empty($_POST['password']) )
	  {
	     // If the user exists
	     if ( checkUserIdBL() )
	     {
	        // If the password is correct
		    if ( checkHashBL() )
		    {
			   $isConnected = "true";
			   // The session save the user ID
			   $_SESSION['userId'] = $_POST['userId'];
		    }
	     }
	  }
	  echo $isConnected;
   }
   
   // Disconnect the user by cleaning the session variable
   function disconnectBL() {
      if ( !empty($_SESSION['userId']) )
      {
         echo 'Bye '.$_SESSION['userId'];
         session_destroy();
      }
      else
      {
         echo "notConnected";
      }
   }
   
   // registerBL tests if the userId is already in use, if not the user is created
   function registerBL() {
      $isRegistered = "false";
      if ( !empty($_POST['userId']) && !empty($_POST['username']) && !empty($_POST['password']) )
      {
         // If the user ID is available
         if( !checkUserIdBL() )
         {
            $hash = hash('sha512',$_POST['password']);
            // If the SQL succeed
            if ( registerDAL($_POST['userId'], $_POST['username'], $hash) )
            {
               $isRegistered = "true";
            }
         }
      }  
      echo $isRegistered;
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
   
   // getDemandsBL returns all the demands made by the user
   function getDemandsBL() {
      echo getAllDemandsFromUserDAL($_POST['userId']);
   }
   
   // getOffersBL returns all the offers made by the user
   function getOffersBL() {
      echo getAllOffersFromUserDAL($_POST['userId']);
   }
?>