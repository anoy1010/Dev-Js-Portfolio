<?php 


$host = 'localhost';
$dbname = 'baction';
$username = 'root';
$password = '';

    try {
    // se connecter à mysql
    $conn = new PDO("mysql:host=$host;dbname=$dbname","$username","$password");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo"connection success";

    } catch (PDOException $exc) {
        echo"connection failed" .$exc->getMessage();
    }

?>