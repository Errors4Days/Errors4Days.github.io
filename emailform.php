<?php

    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
    }
    $mailTo = "WodderGood4u@hotmail.com";
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$name.".\n\n".$message;
    $subject = "subject"

    echo $text;
    header("Location: index.php?mailsend");
?>
