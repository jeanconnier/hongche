<?php
	
		function getUserIdFromOfferDAL($oid){
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}
		
		$req = $bdd->prepare('SELECT *
								FROM offer 
								WHERE OfferId = ?'); 
		$req->execute(array($oid));
		
		while ($ret = $req->fetch())
		{
			//return $ret['UserId'];
			echo $ret['UserId'];
		}
		
		$req->closeCursor();
	}
	
	//test
	/*
	getUserIdFromOfferDAL("1");
	*/


?>