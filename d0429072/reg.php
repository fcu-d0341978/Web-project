<?php
	if(isset($_POST['username']) && isset($_POST['password'] ) && isset($_POST['email'] ) && isset($_POST['birthDay'])){
		include 'conn.php';
		$sql = 'insert into user(username,password,email,birthday)values("'.$_POST["username"].'","'.md5($_POST["password"]).'","'.$_POST["email"].'","'.$_POST["birthDay"].'")';
		
		
		
		if($conn->query($sql))
			echo 'ok';
		else
			echo 'fail';
	}
?>