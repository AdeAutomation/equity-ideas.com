<?php
	if(isset($_POST['submit'])){
		$name=$_POST['firstname'];
		$email=$_POST['email'];
		$tel=$_POST['tel'];
		$message=$_POST['message'];

		$to='ade@equity-ideas.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$firstname."\n"."Phone :".$tel."\n"."Wrote the following :"."\n\n".$message;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>