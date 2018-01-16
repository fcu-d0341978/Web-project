<?php

	if(isset($_POST['username']) && isset($_POST['password'] )){
		include "conn.php";
		
		$result = $conn->query("select username from user where username  = '".$_POST["username"]."'and password = '".md5($_POST["password"])."' ");
		
		
			while($row=$result->fetch_assoc()){
		
				echo '<script>alert("login success!");location.href="index.html";</script>';
				
				
		}
		
		echo '<script>alert("login fail!");location.href="login.html";</script>';
	}
?>