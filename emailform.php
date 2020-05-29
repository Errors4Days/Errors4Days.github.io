<?php
    
    if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $subject = $_POST["subject"];
    }
    $mailTo = "woddergood4u@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$name.".\n\n".$message;
    mail($email, $subject, $message);
    

    header("Location: form.html?mailsend");
    
?>
