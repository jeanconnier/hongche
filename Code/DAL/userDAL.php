<?php
	/*
	function registerDAL($uid, $uname, $hpwd){
	create a new row in table user
	I: given the value userid, username, hash
	O: return a boolean
	*/
	
	/*
	function getOffersDAL($uid)
	return all the Offer in the DB of a user
	I: given his userid
	O: string
	*/
	
	/*
	function getDemandsDAL($uid)
	return all the Demands in the DB of a user
	I: given his userid
	O: string
	*/
	
	/*
	function getUserIdFromOffer($oid)
	give userid from a given offerid
	I: offerid
	O: userid
	*/
	
	/*
	function getHashDAL($uid)
	return the hash of a user given his userId
	I: userid
	O: hash	
	*/
	
	/*	
	function getUsernameDAL($uid)
	return the username of a user given his userId
	I: userid
	O: username
	*/
	
	/*
	
	function checkUserIdDAL($uid)
	check if userid exist or not
	I: given a userid
	O: return true or false
	*/
	

//create a new row in table user
//given the value userid, username, hash
//return a boolean

	function registerDAL($uid, $uname, $hpwd){
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
		
		$req = $bdd->prepare('INSERT INTO user VALUES(?, ?, ?)'); 
		$req->execute(array($uid, $uname, $hpwd));
		
		$req->closeCursor();
		
		return $bret;
	}
	
	
	//test
	/*
	registerDAL("94", "Max", "Max1");
	registerDAL("13", "Po", "Po1");
	registerDAL("63", "Jean", "Jean1");
	*/


//check if userid exist or not
//given a userid
//return true or false

	function checkUserIdDAL($uid){
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}
		
		$req = $bdd->prepare('SELECT COUNT(*) AS "NumberId"
								FROM user 
								WHERE UserId = ?'); 
		$req->execute(array($uid));
		
		while ($ret = $req->fetch())
		{
			if($ret['NumberId'] == 1)
			{
				$bret = true;
			}
			else
			{
				$bret = false;
			}
			
			$req->closeCursor();
			
			return $bret;
			//echo $bret;
		}
		
	}
	
	//test
	/*
	checkUserIdDAL("53");
	*/


//return the username of a user given his userId

	function getUsernameDAL($uid){
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}
		
		$req = $bdd->prepare('SELECT * 
								FROM user 
								WHERE UserId = ?'); 
		$req->execute(array($uid));
		
		while ($ret = $req->fetch())
		{
			$req->closeCursor();
			
			return $ret['UserName'];
			//echo $ret['UserName'];
		}

	}
	
	//test
	/*
	getUsernameDAL("94");
	*/


//return the hash of a user given his userId

	function getHashDAL($uid){
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}
		
		$req = $bdd->prepare('SELECT * 
								FROM user 
								WHERE UserId = ?'); 
		$req->execute(array($uid));
		
		while ($ret = $req->fetch())
		{
			$req->closeCursor();
			
			return $ret['Hash'];
			//echo $ret['Hash'];
		}
		
		
	}
	
	//test
	/*
	getHashDAL("94");
	*/

	
		function getUserIdFromOffer($oid){
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
		}
		catch(Exception $e)
		{
			die('Error : '.$e->getMessage());
		}
		
		$req = $bdd->prepare('SELECT *
								FROM Offer 
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
	getUserIdFromOffer("1");
	*/


	//return all the Demands in the DB of a user
	//given his userid
	
	function getDemandsDAL($uid){
	try
	{
		$bdd = new PDO('mysql:host=localhost;dbname=carsale', 'root', '');
	}
	catch(Exception $e)
	{
		die('Error : '.$e->getMessage());
	}
	
	$req = $bdd->prepare('SELECT * 
							FROM demand 
							WHERE UserId = ?');
	$req->execute(array($uid));
	
	$ret = "";
	
	while($temp = $req->fetch())
	{
		$ret = $ret . $temp['DemandId'] . ", " . $temp['UserId'] . ", " . $temp['Brand'] . ", " . $temp['Type'] . ", " . $temp['Colour'] . ", " . $temp['Motor'] . ", " . $temp['State'] . "; ";
	}
	
	$req->closeCursor();
	
	//echo $ret;
	return $ret;
	}



	//return all the Offer in the DB of a user
	//given his userid
	
	function getOffersDAL($uid){
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
							WHERE UserId = ?');
	$req->execute(array($uid));
	
	$ret = "";
	
	while($temp = $req->fetch())
	{
		$ret = $ret . $temp['OfferId'] . ", " . $temp['DemandId'] . ", " . $temp['UserId'] . ", " . $temp['Price'] . "; ";
	}
	
	$req->closeCursor();
	
	//echo $ret;
	return $ret;
	}

?>