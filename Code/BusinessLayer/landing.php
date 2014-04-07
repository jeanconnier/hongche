<?php

   echo $_POST['class'];
   echo $_POST['method'];
   echo $_POST['username'];
   echo $_POST['hash'];
   
   $handle = fopen('foo.txt', 'a');
   
   $text = $_POST['class'] . " " . $_POST['method'] . " " . $_POST['username'] . " " . $_POST['hash']; 
   fwrite($handle, "bonjour... " . $text);
   
?>