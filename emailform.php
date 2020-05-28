<?php

    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
    }
    $mailTo = "WodderGood4u@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
?>
