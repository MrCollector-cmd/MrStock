<?php
include('../config/configuration.php');
$email = $_POST['email'];
$pas = $_POST['password'];

$c = "SELECT * FROM users";
$r=mysqli_query($csql, $c);
while($dato = mysqli_fetch_assoc($r)){
    if($email == $dato['EMAIL'] && $pas == $dato['CLAVE']){
        $_SESSION['email'] = $dato['EMAIL'];
        $_SESSION['clave'] = $dato['CLAVE'];
        $_SESSION['nombre'] = $dato['NOMBRE'];
        $_SESSION['apellido'] = $dato['APELLIDO'];
        $_SESSION['conect'] = true;
        header("Location: ../index.php?seccion=panel");
    }
    else {
        header("Location: ../index.php?seccion=login");
    }
};
?>