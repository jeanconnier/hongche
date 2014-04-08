<?php
	//secure a deal
	//return a bool
	
	function setSecured($did){
	
	$bret = true;
	
	try
	{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', 'knvhdjEJRVB2107');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
			$bret = false;
		}
	
	$req = $bdd->prepare('UPDATE demand
							SET isSecured = 1
							WHERE DemandId = ?'); 
	$req->execute(array($did));
	
	$req->closeCursor();

	return $bret;
	}
	
	setSecured("1");

?>

		