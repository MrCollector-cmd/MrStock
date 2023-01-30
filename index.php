<?php
include('config/configuration.php');
$seccion = isset($_GET['seccion']) ? $_GET['seccion']:' login';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mr.Stock</title>
</head>
<body>
    <?php
        switch ($seccion) {
            case 'login':
                include('page/login.php');
                break;
            default:
                if ($_SESSION['conect'] = true) {
                    include('page/pas.php');
                }
                else{
                    include('page/login.php');
                }
        }
    ?>
</body>
</html>