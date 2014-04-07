<?php
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
?>

<?php
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
?>

<?php
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
	
?>


<?php
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
			return $ret['Price'];
			//echo $ret['Price'];
		}
		
		$oprice->closeCursor();
	}
	
	//test
	/*
	getOfferPriceDAL("1");
	*/
?>



<?php
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
			return $ret['UserId'];
			//echo $ret['UserId'];
		}
		
		$req->closeCursor();
	}
	
	//test
	/*
	getUserIdFromOfferDAL("1");
	*/
?>