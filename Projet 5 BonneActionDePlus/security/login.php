<?php
require('config.php');
include("../include/head.php");
session_start();
if (isset($_POST['username'])){
  $username = stripslashes($_REQUEST['username']);
  $username = mysqli_real_escape_string($conn, $username);
  $password = stripslashes($_REQUEST['password']);
  $password = mysqli_real_escape_string($conn, $password);
    $query = "SELECT * FROM `connect_table` WHERE username='$username' and password='$password'";
  $result = mysqli_query($conn,$query) or die(mysqli_error($conn));
  $rows = mysqli_num_rows($result);
  if($rows==1){
      $_SESSION['username'] = $username;
      header("Location: Dashbord.php");
  }else{
    $message = "Le nom d'utilisateur ou le mot de passe est incorrect.";
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    











    <div class="container w-auto mx-auto">

      <!-- Section: Design Block -->
      <section class="py-32 max-h-auto flex justify-center text-gray-800 background-radial-gradient">
        <style>
          .background-radial-gradient {
            background-color: hsl(218, 41%, 15%);
            background-image: radial-gradient(
                650px circle at 0% 0%,
                hsl(218, 41%, 35%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%
              ),
              radial-gradient(
                1250px circle at 100% 100%,
                hsl(218, 41%, 45%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%
              );
          }
        </style>

        <div class="px-6 py-12 ] md:px-12 text-center lg:text-left">
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 gap-12 flex items-center">
              <div class="mt-12 lg:mt-0">
                <h1
                  class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                  style="color: hsl(218, 81%, 95%)"
                >
                  Register of <br /><span style="color: hsla(360, 88%, 42%, 1)">BonneActionde+</span>
                </h1>
                <p class="mb-4 opacity-70 lead" style="color: hsl(218, 81%, 85%)">
                  Nous vous offrons une liste complète de tous vos enregistrements.
                </p>
              </div>
              <div class="mb-12 lg:mb-0">
                <div class="block  rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                  <h2 class="text-3xl font-bold text-center mb-12">Connexion</h2>
                  <form action="" method="post" name="login">
                    <div class="form-group mb-6">
                      <input
                        type="text"
                        name="username"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput90"
                        placeholder="username"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <input
                        type="password"
                        name="password"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput91"
                        placeholder="Password"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      value="Connexion"
                      name="submit"
                      class="w-full px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      se connecter
                    </button>

                    <br>
                    <br>
                    <?php if (! empty($message)) { ?>
                      <div
                        class="mb-3 inline-flex w-full items-center rounded-lg bg-warning px-6 py-5 text-base text-white"
                        role="alert">
                        <span class="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                              fill-rule="evenodd"
                              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                              clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p class="errorMessage"><?php echo $message; ?></p>
                      </div>
                  <?php } ?>


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>
</body>
</html>

