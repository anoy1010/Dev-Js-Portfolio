<?php
require('config.php');
include("../include/head.php");
session_start();
if (isset($_POST['deletebtn'])){
  
    $id = $_POST['delete_id'];
  
    $query = "DELETE FROM `formulaire` WHERE id='$id'";
    $result = mysqli_query($conn,$query) or die(mysqli_error($conn));
  
  if($result){
      $_SESSION['success'] = "suppression réussit avec succès";
      header("Location: Dashbord.php");
  }else{
    $message = "Echec de la suppression";
  }
}