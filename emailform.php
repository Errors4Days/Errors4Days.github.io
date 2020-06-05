<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';

    if(isset($_POST["submit"])){
        $name = clean_input($_POST["name"]);
        $email = clean_input($_POST["email"]);
        $message = clean_input($_POST["message"]);
        $subject = clean_input($_POST["subject"]);

        $mail = new PHPMailer(true);
        $body = "You have received an email from " . $name . "<br> <br>" . $message;
        $body .= "<br> <br>" . "Email: " . $email;

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'woddergood4u@gmail.com';
            $mail->Password = 'password';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            //Recipients
            $mail->setFrom('woddergood4u@gmail.com', 'Mailer');
            $mail->addAddress('woddergood4u@gmail.com');

            // Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $body;

            $mail->send();

            //Indicates that email was sent and displays pop up
            echo '<script type = "text/javascript">
            alert("Email sent successfully!");
            window.location = "form.html?mailsend";
            </script>';
        }
        catch (Exception $e){
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }

    //Security, prevents insertion of code through the form
    function clean_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    //Checks that name and email are formated correctly
    /*
    function name_check($name){
        if(!preg_match("/^[a-zA-Z ]*$/",$name)){
            return "Invalid name";
        }
        return $name;
    }

    function email_check($email){
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return = "Invalid email format";
        }
        return $email;
    }*/
?>
