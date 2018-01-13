<?php
	if(isset($_GET["username"])){
		include "conn.php";
		$result = $conn->query("select username from user where username = '".$_GET["username"]."'");
		
		while($row=$result->fetch_assoc()){
		
				echo 'ok';
		}
	}
?>