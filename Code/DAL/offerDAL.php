<?php
	/*
	function createOfferDAL($oid, $did, $uid, $price)
	create a new row in offer
	I: given the value of offerid, demandid, userid, and the price
	O: return a boolean
	*/

	/*
	function updateOfferDAL($oid, $did, $uid, $price)
	update a row in offer
	I: given the value of offerid, demandid, userid, and the price
	O: return a boolean
	*/
	
	/*
	function deleteOfferDAL($oid)
	delete a row in offer
	I: given the value of offerid
	O: return a boolean
	*/

	/*
	function getOfferPriceDAL($oid)
	get the price of an offer (knowing there is only one price per offer)
	I: given the offerid
	O: return price 
	*/

	/*
	function getUserIdFromOfferDAL($oid)
	get userid from an offer 
	I: offerid
	O: userid
	*/

//create a new row in offer
//given the value of offerid, demandid, userid, and the price
//return a boolean

	function createOfferDAL($oid, $did, $uid, $price){
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
		
		$req = $bdd->prepare('INSERT INTO offer VALUES(?, ?, ?, ?)'); 
		$req->execute(array($oid, $did, $uid, $price));
		
		$req->closeCursor();
		
		return $bret;
	}
	
	//test
	/*
	createOfferDAL("1", "1", "63", 4000);
	createOfferDAL("2", "1", "94", 6000);
	*/

//update a row in offer
//given the value of offerid, demandid, userid, and the price
//return a boolean

	function updateOfferDAL($oid, $did, $uid, $price){
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
		
		$req = $bdd->prepare('UPDATE offer
								SET DemandId = ?, UserId = ?, Price = ?
								WHERE OfferId = ?'); 
		$req->execute(array($did, $uid, $price, $oid));
		
		$req->closeCursor();
		
		return $bret;
	}
	
	//test
	/*
	updateOfferDAL("29", "1", "13", 8000);
	*/

//delete a row in offer
//given the value of offerid
//return a boolean

	function deleteOfferDAL($oid){
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
		
		$req = $bdd->prepare('DELETE FROM offer
								WHERE OfferId = ?'); 
		$req->execute(array($oid));
		
		$req->closeCursor();
		
		return $bret;
	}
	
	//test
	/*
	deleteOfferDAL("14");
	*/
	

//get the price of an offer
//given the offerid
//knowing there is only one price per offer

	function getOfferPriceDAL($oid){
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}
		
		$oprice = $bdd->prepare('SELECT * 
									FROM offer 
									WHERE OfferId = ? 
									LIMIT 1');
		$oprice->execute(array($oid));
		
		while ($ret = $oprice->fetch())
		{
			$oprice->closeCursor();
			return $ret['Price'];
			//echo $ret['Price'];
		}
	}
	
	//test
	/*
	getOfferPriceDAL("1");
	*/

	//get userid from an offer idat
	
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
			$req->closeCursor();
			return $ret['UserId'];
			//echo $ret['UserId'];
		}
	}
	
	//test
	/*
	getUserIdFromOfferDAL("1");
	*/
?>