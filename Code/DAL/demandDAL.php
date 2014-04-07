<?php
//create a new row in demand
//given the value of demandid, userid, and the options of the car
//return a boolean

	function createDemandDAL($did, $uid, $brand, $type, $colour, $motor, $cond){
		$bret = true;
		
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
			$bret = false;
		}
		
		$req = $bdd->prepare('INSERT INTO demand VALUES(?, ?, ?, ?, ?, ?, ?)'); 
		$req->execute(array($did, $uid, $brand, $type, $colour, $motor,	$cond));
		
		$req->closeCursor();
		
		$fp=fopen('createDemandTest.txt', 'a');
		fwrite($fp, 'essai');
		fclose($fp);
		
		return $bret;
	}
	
	//test
	/*
	createDemandDAL("1", "13", "Volkswagen", "sedan", "green", "oil", "second-hand");
	*/
	
?>


<?php
//delete a row in demand
//given the value of demandid
//return a boolean

	function deleteDemandDAL($did){
		$bret = true;
		
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
			$bret = false;
		}
		
		$req = $bdd->prepare('DELETE FROM demand
								WHERE DemandId = ?'); 
		$req->execute(array($did));
		
		$req->closeCursor();
		
		return $bret;
	}
	
	//test
	/*
	deleteDemandDAL("14");
	*/
	
?>


<?php
//find the best offer for a demand
//given the demandid
//returns the offerid

	function getBestOfferIdDAL($did){
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}

		$req = $bdd->prepare('SELECT COUNT(*) AS "NumberOffer"
								FROM offer
								WHERE DemandId = ?
								LIMIT 1'); 
		$req->execute(array($did));

		while ($ret = $req->fetch())
		{
			if($ret['NumberOffer'] == 1)
			{
				$boid = $bdd->prepare('SELECT * 
										FROM offer 
										WHERE DemandId = ? 
										ORDER BY Price ASC 
										LIMIT 1');
				$boid->execute(array($did));
			
				while ($ret = $boid->fetch())
				{
					//return $ret['OfferId'];
					echo $ret['OfferId'];
				}
				
				$boid->closeCursor();
			}
			else
			{
				$ret = "noOfferYet";
				//return $ret;
				echo $ret;
			}

		}

		$req->closeCursor();
		
	}
	
	//test
	/*
	getBestOfferIdDAL("45");
	*/
?>


<?php

	//get a userid from a demandid
	
		function getUserIdFromDemandDAL($did){
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}
		
		$req = $bdd->prepare('SELECT *
								FROM Demand 
								WHERE DemandId = ?'); 
		$req->execute(array($did));
		
		while ($ret = $req->fetch())
		{
			return $ret['UserId'];
			//echo $ret['UserId'];
		}
		
		$req->closeCursor();
	}
	
	//test
	/*
	getUserIdFromDemand("1");
	*/


?>