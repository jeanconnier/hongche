<?php
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
		
		return $bret;
		
		$req->closeCursor();
	}
	
	
	//test
	/*
	registerDAL("94", "Max", "Max1");
	registerDAL("13", "Po", "Po1");
	registerDAL("63", "Jean", "Jean1");
	*/
?>


<?php

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
			
			//echo $bret;
		}
		
		$req->closeCursor();
      return $bret;
	}
	
	//test
	/*
	checkUserIdDAL("53");
	*/
?>

<?php

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
			return $ret['UserName'];
			//echo $ret['UserName'];
		}
		
		$req->closeCursor();
	}
	
	//test
	/*
	getUsernameDAL("94");
	*/
?>


<?php

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
			return $ret['Hash'];
			//echo $ret['Hash'];
		}
		
		$req->closeCursor();
	}
	
	//test
	/*
	getHashDAL("94");
	*/
?>

<?php
	
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
			return $ret['UserId'];
			//echo $ret['UserId'];
		}
		
		$req->closeCursor();
	}
	
	//test
	/*
	getUserIdFromOffer("1");
	*/
?>

