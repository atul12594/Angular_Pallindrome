<?php
   /*
   * Collect all Details from Angular HTTP Request.
   */ 
    $postdata = file_get_contents("php://input");
   
     $strRev = strrev($postdata);
    
    if($strRev == $postdata) {
		echo "The given string is pallindrome";
	}
	else{
		echo "The given string is not a pallindrome";	
	}

   
    //this will go back under "data" of angular call.
    /*
     * You can use $email and $pass for further work. Such as Database calls.
    */    
?>
