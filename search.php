<?php
	$CN =mysqli_connect("localhost","root","admin");
	
	$DB =mysqli_select_db($CN,"students");
	
	$FindUser = $_POST["FindUser"];
	
	$SQ ="SELECT * FROM booking.students where FindUser=$FindUser";

	$Table = mysqli_query($CN,$SQ);
	
	if (mysqli_num_rows($Table)>0)
	{
		$Row=mysqli_fetch_assoc($Table);
		$RollNo$Row["studentName"];
		$StudentName=$Row["studentName"];
		$Gender = $Row["Gender"];
	}
	else
	{
		$RollNo="";
		$studentName="";
		$Gender="";
	}
	
	$Response[]=array("RollNo"=>$RollNo,"StudentName"=>$StudentName,"Gender"=>$Gender);
	echo json_encode($Response);
?>