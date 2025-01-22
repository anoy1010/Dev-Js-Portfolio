<?php

    session_start();
    include('dbcon.php');

    if(isset($_POST['registerBtn'])){

        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $date_naissance = $_POST['dateN'];
        $ville = $_POST['ville'];
        $pays = $_POST['pays'];
        $numero = $_POST['numero'];
        $email = $_POST['email'];
    }

    $query = "INSERT INTO formulaire(nom, prenom, date_naissance, ville,  pays, numero, email, date_enrg ) VALUES (:nom, :prenom, :date_naissance,:ville, :pays, :numero, :email, NOW()) ";

    $query_run = $conn->prepare($query);

    $data = [

        ':nom' =>$nom,
        ':prenom' =>$prenom,
        ':date_naissance' =>$date_naissance,
        ':ville' =>$ville,
        ':pays' =>$pays,
        ':numero' =>$numero,
        ':email' =>$email,
        
    ];

    $query_execute = $query_run->execute($data);

    if ($query_execute) {
        $_SESSION['message'] ="succes de l'enregistrement";
        header('Location: ../contact.php#form');
        exit(0);
    
    }else {
        $_SESSION['message'] ="echec de l'enregistrement";
        header('Location: ../contact.php#form');
        exit(0);
    }

?>