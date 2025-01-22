<?php

session_start();
include('config.php');

include('../include/head.php');



?>
<?php
  // Initialiser la session
    $connection = mysqli_connect("localhost", "root","", "baction");

    $username = $_SESSION['username'];

    $query ="SELECT username, name, job FROM connect_table WHERE username ='$username'";
    
    $result = mysqli_query($conn,$query) or die(mysqli_error($conn));
    
  // Vérifiez si l'utilisateur est connecté, sinon redirigez-le vers la page de connexion
 
?>

<div class="px-8 pb-24">
    <div class="navbar border-black border-1 flex justify-between items-center shadow-xl ">
        <div class="flex-col">
            <?php 

                if(!isset($_SESSION["username"])){
                    header("Location: login.php");
                    exit(); 
                }
                
                else 
                    if ($row['username'] = $username) {
                    
                        if(mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result))
                            {
            ?>

            <h1 class="font-bold text-lg mb-2"><br><br>  <?php echo $row['name']; ?></h1>
            <p class="text-gray-500 uppecase"><?php echo $row['job']; ?></p>
        </div>
        <?php }
                }
            }   
            else {
                echo "pas d'enregistrement";

            }
        ?>

        <div class="flex justify-end">
            <div class="flex justify-end " >
                <a class="inline-block px-7 py-3 mr-2 bg-black glass text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" href="logout.php">Déconnexion</a>
            </div>
        </div>
    </div>
</div>

<body class="max-w-auto">
    <div class="overflow-x-auto">
        <table class="table table-compact w-full">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Date de naissance</th>
                    <th>Ville</th>
                    <th>Pays</th>
                    <th>Numéro</th>
                    <th>Adresse email</th>
                    <th>Date d'enregistrement</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <?php
                try {
                    $conn = new PDO("mysql:host=localhost;dbname=baction", "root", "");
                    // return $conn;
                } catch (\Throwable $e) {
                    print "Erreur " . $e->getMessage() . "<br/>";
                }
                $req = "SELECT * FROM formulaire";
                $res = $conn->query($req);
                
                
                ?>

                <?php foreach($conn->query($req) as $row) :
                    // print_r($row);
                    ?>

                <tr>
                    <th><?= $row["id"] ?></th>
                    <td><?= $row["nom"] ?></td>
                    <td><?= $row["prenom"] ?></td>
                    <td><?= $row["date_naissance"] ?></td>
                    <td><?= $row["ville"] ?></td>
                    <td><?= $row["pays"] ?></td>
                    <td>0<?= $row["numero"] ?></td>
                    <td><?= $row["email"] ?></td>
                    <td><?= $row["date_enrg"] ?></td>
                    <td>
                        <form action="delete.php" method="POST">
                            <input type="hidden" name="delete_id" value="<?php echo $row['id']; ?>">
                            <button  type="submit"  name="deletebtn" class="inline-block px-7 py-3 mr-2 bg-black glass text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                                Delete
                            </button>
                        </form>
                    </td>
                </tr>
                <!-- <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>Blue</td>
                    <td>+22500707070</td>
                    <td>12/12/12 10:10:20min </td>
                </tr> -->

                <?php endforeach ?>

            </tbody>
            <tfoot>
                <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Date de naissance</th>
                    <th>Ville</th>
                    <th>Pays</th>
                    <th>Numéro</th>
                    <th>Adresse email</th>
                    <th>Date d'enregistrement</th>
                </tr>
            </tfoot>
        </table>
    </div>
</body>