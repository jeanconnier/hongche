<?php
	/*
	function createDemandDAL($did, $uid, $brand, $type, $colour, $motor, $cond)
	create a new row in demand
	I :given the value of demandid, userid, and the options of the car
	O: return a boolean
	*/
	
	/*
	function deleteDemandDAL($did){
	delete a row in demand
	I: given the value of demandid
	O: return a boolean
	*/
	
	/*
	function getBestOfferIdDAL($did)
	find the best offer for a demand
	I: given the demandid
	O: returns the offerid
	*/
	
	/*
	function getUserIdFromDemandDAL($did){
	get a userid from a demandid
	I: demandId
	O: userId 
	*/
	
	/*
	function getAllDemandsDAL()
	return all the Demands in the DB
	I: 
	O: string
	*/
	
	/*
	function searchDemandDAL($brand, $type, $colour, $motor, $cond)
	search a demand
	I: given the attributes of the car
	O: return string
	*/
	
	/*
	function securedDeal($did)
	I: demandid
	O: return true if the deal is secured
	*/
	
	/*
	function setSecured($did)
	secure a deal
	I: demandId
	O: return a bool
	*/
   
   /*
	function getDemandInfoDAL($did)
	I: demandId
	O: return all the information about the demand
	*/

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
		
		$req = $bdd->prepare('INSERT INTO demand VALUES(?, ?, ?, ?, ?, ?, ?, ?)'); 
		$req->execute(array($did, $uid, $brand, $type, $colour, $motor,	$cond, 0));
		
		$req->closeCursor();
			
		return $bret;
	}

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

//find the best offer for a demand
//given the demandid
//returns the offerid

	function getBestOfferDAL($did){
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
								'); 
		$req->execute(array($did));

		while ($ret = $req->fetch())
		{
			if($ret['NumberOffer'] != 0)
			{
				$boid = $bdd->prepare('SELECT * 
										FROM offer 
										WHERE DemandId = ? 
										ORDER BY Price ASC 
										LIMIT 1');
				$boid->execute(array($did));
			
				while ($ret = $boid->fetch())
				{
					$req->closeCursor();
					return $ret['Price'];
				}
				
				$boid->closeCursor();
			}
			else
			{
				$ret = "noOfferYet";
				$req->closeCursor();
				
				return $ret;
			}

		}
		
	}


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
			$req->closeCursor();
			return $ret['UserId'];
		}

	}


	//return all the Demands in the DB
	
	function getAllDemandsDAL(){
	try
	{
		$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
	}
	catch(Exception $e)
	{
		die('Error : '.$e->getMessage());
	}
	
	$req = $bdd->query('SELECT * FROM demand');
	$ret = "";
	
	while($temp = $req->fetch())
	{
		$ret = $ret . $temp['DemandId'] . "," . $temp['UserId'] . "," . $temp['Brand'] . "," . $temp['Type'] . "," . $temp['Colour'] . "," . $temp['Motor'] . "," . $temp['State'] . "," . $temp['isSecured'] . ";";
	}
	
	$req->closeCursor();

	return $ret;
	}		

	//function searchDemandDAL($brand, $type, $colour, $motor, $cond)
	//search a demand
	//given the attributes of the car
	//return string
	
	function searchDemandDAL($brand, $type, $colour, $motor, $cond){
	try
	{
		$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
	}
	catch(Exception $e)
	{
		die('Error : '.$e->getMessage());
	}
	
	$ret = "";
	
	$req = $bdd->prepare('SELECT *
							FROM demand
							WHERE Brand = :p1 AND Type = :p2 AND Colour = :p3 AND Motor = :p4 AND State = :p5'); //
	$req->bindValue(':p1', $brand, PDO::PARAM_STR);
	$req->bindValue(':p2', $type, PDO::PARAM_STR);
	$req->bindValue(':p3', $colour, PDO::PARAM_STR);
	$req->bindValue(':p4', $motor, PDO::PARAM_STR);
	$req->bindValue(':p5', $cond, PDO::PARAM_STR);
	$req->execute();
	
	while($temp = $req->fetch())
	{
		$ret = $ret . $temp['DemandId'] . "," . $temp['UserId'] . "," . $temp['Brand'] . "," . $temp['Type'] . "," . $temp['Colour'] . "," . $temp['Motor'] . "," . $temp['State'] . ";";
	}
	
	$req->closeCursor();
	
	return $ret;
	}

	//return true if the deal is secured
	
	function securedDeal($did){
	
	$bret = false;
	
	try
	{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}
	
	$req = $bdd->prepare('SELECT isSecured
							FROM demand
							WHERE DemandId = ?'); 
	$req->execute(array($did));
	
	while ($ret = $req->fetch())
	{
		if($ret['isSecured'] == 1)
		{
			$bret = true;
		}
	}
	$req->closeCursor();

	return $bret;
	}

	//secure a deal
	//return a bool
	
	function setSecured($did){
	
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
	
	$req = $bdd->prepare('UPDATE demand
							SET isSecured = 1
							WHERE DemandId = ?'); 
	$req->execute(array($did));
	
	$req->closeCursor();

	return $bret;
	}
   
   //return all the information of a demand 
	
	function getDemandInfoDAL($did){
	try
	{
		$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
	}
	catch(Exception $e)
	{
		die('Error : '.$e->getMessage());
	}
	
	$req = $bdd->prepare('SELECT * FROM demand WHERE DemandId = ?');
   $req->execute(array($did));
	$ret = "";
	
	while($temp = $req->fetch())
	{
		$ret = $ret . $temp['Brand'] . "," . $temp['Type'] . "," . $temp['Colour'] . "," . $temp['Motor'] . "," . $temp['State'] . "," . $temp['UserId'];
	}
	
	$req->closeCursor();

	return $ret;
	}		

?>